//import { utilGoogle } from "./util";
import { noDataWarning, insertSuccess, emptyWarning } from "./HintModal";
import {Button} from 'antd'
const insertToCalendar = (data, success) => {
    const events = [];
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      let event = {};
      if (row.due === "" || row.hw === "" || row.course === "") return false;
      event.summary = row.hw;
      event.description = row.course;
      const tok = row.due.split(" ");
      const tokDate = tok[0].split("/"); // yyyy/mm/dd
      event.start = {
        dateTime: tokDate.join("-") + "T" + tok[1] + ":00+08:00", // Taiwan time zone
      };
      event.end = {
        dateTime: tokDate.join("-") + "T" + tok[1] + ":00+08:00", // Taiwan time zone
      };
      events.push(event);
    }
    //const { login } = utilGoogle();
    //login(events, success, () => {});
    return true;
  };
const ExportCalendar = ({selectedRowKeys, tableData})=>{
  const onClick = () =>{
    if (selectedRowKeys.length === 0) {
      noDataWarning();
      return;
    }
    const selectedData = tableData.filter((row) =>
      selectedRowKeys.includes(row.key)
    );
    const res = insertToCalendar(selectedData, insertSuccess);
    if (!res) emptyWarning();
  }
  return (
    <Button type="primary" htmlType="button" onClick={onClick}>
      Export to Calendar
    </Button>
  )
}
export default ExportCalendar