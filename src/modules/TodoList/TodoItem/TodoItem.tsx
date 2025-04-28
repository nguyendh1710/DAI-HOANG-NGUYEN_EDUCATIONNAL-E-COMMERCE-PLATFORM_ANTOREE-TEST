import { ContentBox, CusCheckbox, ContainerBox } from "./TodoItem.style";
import { Typography, Box } from "@mui/material";

// ✅ Định nghĩa Item cần thêm với typescript
type TodoItemProps = {
  id: number;
  itemTask: string;
  completed?: boolean; // ✅ Cho phép giá trị này có thể không được truyền xuống
  sendDataToList: (id: number, isComplete: boolean) => void; // Gửi id + trạng thái completed (lấy cờ để xóa) 
                                                                 

};

export default function TodoItem({ id, itemTask, completed,sendDataToList }: TodoItemProps) {

  const handleCheck =() =>{
    sendDataToList(id, !completed); // Gửi trạng thái mới lên component cha (Gọi callback và truyền dữ liệu lên cha)
  }

  return (
    <ContainerBox>
      <ContentBox>
        <Typography variant="h6">{id}</Typography>
        <Typography variant="h6">{itemTask}</Typography>
      </ContentBox>
      <CusCheckbox
        checked={Boolean(completed)} // ✅ Đảm bảo giá trị luôn là boolean
        onChange={handleCheck}
        color="primary"
      />
    </ContainerBox>
  );
}
