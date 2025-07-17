export type Evaluate = {
  ten: string;
  anh: string;
  thoiGian: string;  // hoặc Date nếu bạn parse dữ liệu về kiểu Date
  rating: number;
  comments:string;
};
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description:string,
  details: string;
  evaluate:Evaluate[]
};