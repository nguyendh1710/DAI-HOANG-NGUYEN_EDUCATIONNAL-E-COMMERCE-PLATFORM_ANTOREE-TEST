import { instance } from "./fetcher";
import { Product } from "../types/ProductType";
import {getProducts} from "./productAPI"

// lấy gợi ý sản phẩm thông minh
export const getCartSuggestion = async (cart: number[]): Promise<Product[]> => {
  if (cart.length === 0) {
    console.warn("Danh sách yêu thích trống.");
    return [];
  }

  const allProducts = await getProducts();

  const cartProducts = allProducts.filter((product: Product) =>
    cart.includes(product.id)
  );

  const stopwords = ["khóa", "học", "cho", "và", "các", "bạn", "của", "người"];
  const extractKeywords = (name: string) =>
    name
      .toLowerCase()
      .split(/\s+/)
      .filter(word => word.length > 2 && !stopwords.includes(word));

  const keywords: string[] = cartProducts
    .flatMap((p: Product) => extractKeywords(p.name));

  console.log("Từ khóa trích xuất:", keywords);

  // Xây dựng điểm ưu tiên cho từng sản phẩm dựa trên số từ khóa trùng
  const productScores: { product: Product; score: number }[] = allProducts
    .filter((product: Product) => !cart.includes(product.id))
    .map((product: Product) => {
      const productWords = extractKeywords(product.name);
      const matchCount = keywords.filter(kw => productWords.includes(kw)).length;
      return { product, score: matchCount };
    })
    .filter((item: { product: Product; score: number }) => item.score > 0)
    .sort((a: { product: Product; score: number }, b: { product: Product; score: number }) => b.score - a.score); // Ưu tiên nhiều từ khóa trùng hơn

  let suggestedProducts = productScores.map(item => item.product);

  // Nếu không có sản phẩm phù hợp, fallback ngẫu nhiên
  if (suggestedProducts.length === 0) {
    console.warn("Không tìm thấy sản phẩm gợi ý từ từ khóa. Đề xuất ngẫu nhiên.");
    suggestedProducts = allProducts
      .filter((p: Product) => !cart.includes(p.id))
      .slice(0, 3);
  }

  return suggestedProducts;
};
