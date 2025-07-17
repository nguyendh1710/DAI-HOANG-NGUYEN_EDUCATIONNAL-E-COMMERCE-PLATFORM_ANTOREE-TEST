Ứng dụng Ứng dụng Thương mại Điện tử Giáo dục (Eduactional Ecommerce App)

(Ứng dụng React hiển thị danh sách khóa học, hỗ trợ tìm kiếm, lọc giá, xem gợi ý khóa học dựa trên yêu thích, và lưu lịch sử xem.)

✅ CÔNG NGHỆ SỬ DỤNG
React + TypeScript

React Query (API quản lý trạng thái)
Tailwind CSS (giao diện)
Lucide React (icon)
LocalStorage (lưu lịch sử xem)
API sản phẩm và gợi ý khóa học (gọi từ productAPI.ts)
AI (api ChatGPT)

✅ Cài đặt & chạy dự án

Clone dự án
git clone https://github.com/nguyendh1710/DAI-HOANG-NGUYEN_EDUCATIONNAL-E-COMMERCE-PLATFORM_ANTOREE-TEST
cd your-repo
 
✅Cài đặt thư viện

npm install hoặc yarn install

✅ Chạy ứng dụng trong môi trường phát triển

npm run dev hoặc yarn dev

Truy cập tại địa chỉ:
http://localhost:3000

✅ Build bản production

npm run build hoặc yarn build
Để kiểm tra bản build:

npm run preview hoặc yarn preview

📂 Cấu trúc dự án chính

src/
├── apis/
│   └── productAPI.ts         # API lấy danh sách và gợi ý sản phẩm
├── components/
│   └── Modal.tsx             # Modal hiển thị chi tiết sản phẩm
│   └── ...                   # Các component khác
├── modules/
│   ├── ProductList/
│   │   ├── ProductItem/      # Hiển thị 1 sản phẩm
│   │   └── ProductList.tsx   # Trang chính danh sách sản phẩm
│   └── Details/              # Component chi tiết sản phẩm
├── data/
│ └── userData.json           # Dữ liệu người dùng mẫu
├── types/
│   └── ProductType.ts       # Định nghĩa kiểu dữ liệu sản phẩm
│   └──  UserType.ts         # Định nghĩa kiểu dữ liệu người dùng
└── hook/
│   └── useFavorites.ts      # Định nghĩa customhook yêu thích
└── context/
│   └── FavoritesContext.tsx # Định nghĩa các context


✅ Chức năng chính

- Danh sách khóa học

-Tìm kiếm khóa học

- Lọc theo khoảng giá

- Hiển thị gợi ý khóa học (từ API)

- Lưu & hiển thị lịch sử xem khóa học

- Xử lý loading, skeleton, và lỗi API

- Chatbot AI

-...

🛠️ Ghi chú
- Bấm nút Xem chi tiết để hiển thị Lịch sử xem

- API gợi ý được gọi khi nhấn "Gợi ý khóa học phù hợp". Loading Skeleton sẽ hiển thị trong quá trình gọi.

- Khi API gợi ý lỗi, thông báo lỗi hiển thị bên dưới nút gợi ý.

- Lịch sử xem lưu trong LocalStorage, tối đa 16 khóa học gần nhất.

📩 Liên hệ
Liên hệ nếu cần hỗ trợ thêm:
daihoangnguyen17101994@gmail.com

🎉 Cảm ơn bạn đã sử dụng ứng dụng!