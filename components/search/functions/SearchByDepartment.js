import { Form, TreeSelect } from "antd";
import { useState } from "react";

const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "0-0-0",
        key: "0-0-0",
      },
    ],
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "Child Node3",
        value: "0-1-0",
        key: "0-1-0",
      },
      {
        title: "Child Node4",
        value: "0-1-1",
        key: "0-1-1",
      },
      {
        title: "Child Node5",
        value: "0-1-2",
        key: "0-1-2",
      },
    ],
  },
];
const { SHOW_PARENT } = TreeSelect;
const SearchByDepartment = () => {
  const [value, setValue] = useState(["0-0-0"]);
  console.log("value", value);
  return (
    <Form.Item label="選擇系所" style={{width:"100%"}}>
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        treeCheckable={true}
        showCheckedStrategy={SHOW_PARENT}
        placeholder="Please select"
        style={{ width: "100%" }}
      />
    </Form.Item>
  );
};
export default SearchByDepartment;
