import { useState } from "react";
import { Paper, Typography, Box, Grid } from "@mui/material";
import {
  CusContainerFuild,
  CusContainer,
  CusGrid,
  CusTextFiel,
  CusPaper,
  CusTypo,
  TitleBox,
} from "./TodoList.style";
import data from "./../../data.json";
import CusButton from "../../componets/Button/CusButton";
import TodoItem from "./TodoItem/TodoItem";

// ✅ Định nghĩa Item cần thêm với typescript
type ItemNeedAdd = {
  id: number;
  task: string;
  completed: boolean;
};

export default function TodoList() {
  // khai báo state data
  const dataInit: ItemNeedAdd[] = data;
  const [dataCopy, setDataCopy] = useState<ItemNeedAdd[]>([...dataInit]);
  // khai báo state input
  const [input, setInput] = useState("");


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    // console.log(input)
  };
  const handleClick = () => {
    if (input.trim() !== "") {
      const maxId =
        dataCopy.length > 0 ? Math.max(...dataCopy.map((item) => item.id)) : 0;
      const addedItem: ItemNeedAdd = {
        id: maxId + 1,
        task: input,
        completed: false,
      };
      // thêm vào state hiển thị dữ liệu ban đầu
      setDataCopy([addedItem, ...dataCopy]);
    }
    setInput("");
  };
// Hàm callback nhận dữ liệu từ con Item
const handleComplete = (id: number, isComplete: boolean) => {
  if (isComplete) {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa công việc này?");
    if (!confirmDelete) {
      return; // Nếu người dùng bấm "Hủy", không làm gì cả
    }
  }

  setDataCopy((prevData) =>
    isComplete
      ? prevData.filter((item) => item.id !== id) // Xóa nếu được xác nhận
      : prevData.map((item) =>
          item.id === id ? { ...item, completed: isComplete } : item
        ) // Nếu chưa hoàn thành, chỉ cập nhật trạng thái
  );
};


  return (
    <CusContainerFuild
      maxWidth={false}
      sx={{ background: "lightblue", padding: 2 }}
    >
      <CusContainer maxWidth="md" sx={{ mt: 4, background: "green" }}>
        {/* Input Field */}
        <TitleBox>
          <CusTextFiel
            fullWidth
            label="Enter item"
            variant="outlined"
            value={input}
            onChange={handleChange}
            // onKeyDown={handleClick}
            sx={{ mb: 3 }}
          />
          <CusButton size="small" onClick={handleClick}>
            {" "}
            Thêm công việc
          </CusButton>
        </TitleBox>

        {/* Items Grid */}
        <Grid container spacing={2}>
          {dataCopy.map((item, index) => (
            <CusGrid item xs={12} sm={12} md={12} key={item.id}>
              <CusPaper
                elevation={3}
                sx={{
                  padding: 2,
                  textAlign: "center",
                  bgcolor: "primary.light",
                  color: "white",
                }}
              >
                <TodoItem
                  id={item.id}
                  itemTask={item.task}
                  completed={item.completed}
                  sendDataToList={handleComplete}
                />
                {/* <ContentBox>
                  <Typography variant="h6">{item.id}</Typography>
                  <Typography variant="h6">{item.task}</Typography>
                </ContentBox> */}
              </CusPaper>
            </CusGrid>
          ))}
        </Grid>
      </CusContainer>
    </CusContainerFuild>
  );
}
