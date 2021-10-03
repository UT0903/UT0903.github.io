import { noDataWarning, exportSuccess, emptyWarning } from "./HintModal";
import {Button} from 'antd'
const MakeCsv = (data) => {
  let csvData = "Subject,Description,Start date,Start Time,End Time\n";
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (row.due === "" || row.hw === "" || row.course === "") return "";
    let newCsvData = row.hw + "," + row.course + ",";
    const tok = row.due.split(" ");
    const tokDate = tok[0].split("/"); // yyyy/mm/dd
    const tokTime = tok[1].split(":"); // hh:mm:ss
    newCsvData += tokDate[1] + "/" + tokDate[2] + "/" + tokDate[0] + ","; // mm/dd/yyyy
    const time =
      tokTime[0] > 12
        ? tokTime[0] - 12 + ":" + tokTime[1] + " PM"
        : tokTime[0] + ":" + tokTime[1] + " AM";
    newCsvData += time + "," + time + "\n";
    csvData += newCsvData;
  }
  return csvData;
};
const ExportCsv = ({selectedRowKeys, tableData})=>{
  const onClick = ()=>{
    if (selectedRowKeys.length === 0) {
      noDataWarning();
      return;
    }
    const selectedData = tableData.filter((row) =>
      selectedRowKeys.includes(row.key)
    );
    const csvData = MakeCsv(selectedData);
    if (csvData) {
      exportSuccess();
      const blob = new Blob(["\uFEFF" + csvData], {
        type: "text/csv;charset=gb2312;",
      });
      const a = document.createElement("a");
      a.download = "todo.csv";
      a.href = URL.createObjectURL(blob);
      a.click();
    } else {
      emptyWarning();
    }
  }
  
  return (
    <Button type="primary" htmlType="button" onClick={onClick}>
      Export to CSV
    </Button>
  )
}
  
export default ExportCsv