/* eslint-disable react/display-name */
import React, { useState } from "react";
import "antd/dist/antd.css";
import { PlusSquareOutlined } from "@ant-design/icons";

import { Table, Space, Button } from "antd";

const MAX_COURSE_NUM = 10;

const SearchTable = ({
  data,
  selected,
  setSelected,
  setModalVisible,
  displayStatus,
  current,
  total,
  onPagechange,
}) => {
  const pagenation = {
    // pageSize: 50,
    current: current,
    total: total,
    onChange: onPagechange,
    pageSizeOptions: [10],
    position: ["topRight", "bottomRight"],
    showTotal: () => (
      <div className="Search-button_wrap">
        <Button
          onClick={() => setModalVisible(true)}
          type="primary"
          disabled={selected.length <= 0}
        >
          刪除或查看已選課程
        </Button>
      </div>
    ),
  };
  const columns = [
    {
      title: "年份",
      dataIndex: "semester",
      key: "semester",
    },
    {
      title: "流水號",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "課程名稱",
      dataIndex: "class_name",
      key: "class_name",
    },
    {
      title: "學分",
      dataIndex: "credit",
      key: "credit",
    },
    {
      title: "加選方式",
      dataIndex: "reg_method",
      key: "reg_method",
    },
    {
      title: "課程識別碼",
      dataIndex: "class_id",
      key: "class_id",
    },
    {
      title: "授課教師",
      key: "teacher_name",
      dataIndex: "teacher_name",
    },
    {
      title: "",
      key: "add",
      width: "4%",
      render: (record) => (
        <Space size="middle">
          <PlusSquareOutlined
            onClick={() => {
              // already in list
              if (
                selected.find(
                  (course) =>
                    course.semester === record.semester &&
                    course.id === record.id
                )
              ) {
                displayStatus({
                  type: "error",
                  msg: "此課程已存在於清單中",
                });
                return;
              }
              // out of maxima
              if (selected.length >= MAX_COURSE_NUM) {
                displayStatus({
                  type: "error",
                  msg: `已達課程清單上限 (${MAX_COURSE_NUM}堂)`,
                });
                return;
              }
              const newSelected = [...selected];
              newSelected.push(record);
              displayStatus({
                type: "success",
                msg: "成功加入此課程",
              });
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
          dataSource={data}
          bordered
          pagination={pagenation}
          scroll={{ y: 480 }}
        />
      </div>
    </>
  );
};

export default SearchTable;
