/* eslint-disable react/display-name */
import React, { useState } from "react";
import "antd/dist/antd.css";
import { MinusSquareOutlined } from "@ant-design/icons";

import { Table, Space } from "antd";

const same = (r1, r2) => {
  if (r1.semester === r2.semester && r1.id === r2.id) return true;
  return false;
};

const SelectedTable = ({ selected, setSelected }) => {
  const columns = [
    {
      title: "年份",
      dataIndex: "semester",
      key: "semester",
    },
    {
      title: "課程名稱",
      dataIndex: "class_name",
      key: "class_name",
    },
    {
      title: "授課教師",
      key: "teacher_name",
      dataIndex: "teacher_name",
    },
    {
      title: "",
      key: "delete",
      width: "4%",
      render: (record) => (
        <Space size="middle">
          <MinusSquareOutlined
            onClick={() => {
              const newSelected = selected.filter(
                (data) => !same(data, record)
              );
              setSelected(newSelected);
            }}
            style={{ color: "#08c" }}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="Search-table">
        <Table
          columns={columns}
          dataSource={selected}
          bordered
          pagination={false}
          size="small"
        />
      </div>
    </>
  );
};

export default SelectedTable;
