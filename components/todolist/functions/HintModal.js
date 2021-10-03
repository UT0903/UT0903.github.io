import {Modal} from 'antd'
const emptyWarning = () => {
  Modal.warning({
    title: "錯誤",
    content: "請檢查是否有欄位為空",
  });
};

const noDataWarning = () => {
  Modal.warning({
    title: "錯誤",
    content: "請選擇欲處理的資料",
  });
};

const exportSuccess = () => {
  Modal.success({
    title: "匯出成功",
    content: "可至 google 日曆匯入此檔案",
  });
};

const insertSuccess = () => {
  Modal.success({
    title: "已成功匯入至google 日曆",
  });
};

export {emptyWarning, noDataWarning, exportSuccess, insertSuccess}
