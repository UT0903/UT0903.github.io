/* eslint-disable react/display-name */
import React, { useState, useEffect,useContext } from "react";
import "antd/dist/antd.css";
import { Table, Popconfirm,Form,Typography,Modal,Button} from "antd";
import { tidyUpData,packet } from "./functions/Data";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import EditableCell from "./EditTableCell";
import insertToCalendar from "./functions/ExportCalendar";
import useWindowDimensions from "../../contexts/UseWindowDimensions";
import {emptyWarning, noDataWarning, exportSuccess, insertSuccess} from './functions/HintModal'
import axio from '../../contexts/axios'
import AuthContext from "../../contexts/AuthContext";
import { useQuery } from "react-query";
import ExportCsv from "./functions/ExportCsv";
import ExportCalendar from "./functions/ExportCalendar";
const EditableTable = () => {
  const [form] = Form.useForm();
  const { confirm } = Modal;
  const [editingKey, setEditingKey] = useState("");
  const [selectedRowKeys, setSelectRowKeys] = useState([]);
  const [tableData, setTableData] = useState([]);
  const {userInfo} = useContext(AuthContext)
  const isEditing = (record) => record.key === editingKey;
  const { height, width } = useWindowDimensions();
  const { data = [], status, isLoading } = useQuery(
    "/api/getTodos",
    async () => {
      const config = {
        headers: {
          JWT: userInfo?.JWT
        },
      };
      const {err, res} = await axio.get("/api/getTodos", config)
      if(err){
        return []
      } 
      else{
        return tidyUpData(res.data && res.data.info);
      } 
    }
  );
  useEffect(()=>{
    if(status === 'success'){
      console.log('use Effect', data)
      setTableData(data)
    }
  }, [tableData, data])
  
  const onSelectChange = (selectedRowKeys) => {
    setSelectRowKeys(selectedRowKeys);
  };

  const showConfirm = () => {
    confirm({
      title: "確定要刪除所選項目嗎？",
      icon: <ExclamationCircleOutlined />,
      okText: "確定",
      cancelText: "取消",
      onOk() {
        const newData = tableData.filter(
          (row) => !selectedRowKeys.includes(row.key)
        );
        setTableData(newData);
        setSelectRowKeys([]);
      },
    });
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      {
        key: "select_all",
        text: "全部選取",
        onSelect: () => {
          setSelectRowKeys(tableData.map((row) => row.key));
        },
      },
      {
        key: "select_none",
        text: "清除選取項目",
        onSelect: () => {
          setSelectRowKeys([]);
        },
      },
      {
        key: "delete",
        text: "刪除所選資料",
        onSelect: () => {
          showConfirm();
        },
      },
    ],
  };

  const edit = (record) => {
    form.setFieldsValue({
      course: "",
      hw: "",
      due: "",
      src_from: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const deleteRow = (key) => {
    const newData = tableData.filter((row) => row.key !== key);
    setTableData(newData);
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...tableData];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setTableData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setTableData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "課程",
      dataIndex: "course",
      width: "33%",
      editable: true,
      defaultSortOrder: "ascend",
      sortDirections: ["ascend", "descend"],
      sorter: (a, b) => a.course.localeCompare(b.course),
    },
    {
      title: "作業",
      dataIndex: "hw",
      width: "33%",
      editable: true,
    },
    {
      title: "到期日",
      dataIndex: "due",
      width: "15%",
      editable: true,
      sortDirections: ["ascend", "descend", "ascend"],
      sorter: (a, b) => a.due.localeCompare(b.due),
    },
    {
      title: "來源",
      dataIndex: "src_from",
      width: "6%",
      editable: false,
    },
    {
      title: "編輯",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              儲存
            </a>
            <Popconfirm
              title="確定要取消編輯嗎？"
              okText="確定"
              cancelText="取消"
              onConfirm={cancel}
            >
              <Typography.Link>取消</Typography.Link>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <div style={{ display: "inline-block", marginRight: "8px" }}>
              <Typography.Link
                disabled={editingKey !== ""}
                onClick={() => edit(record)}
              >
                修改
              </Typography.Link>
            </div>
            <div style={{ display: "inline-block" }}>
              <Popconfirm
                title="確定要刪除嗎？"
                okText="確定"
                cancelText="取消"
                onConfirm={() => deleteRow(record.key)}
              >
                <Typography.Link disabled={editingKey !== ""}>
                  刪除
                </Typography.Link>
              </Popconfirm>
            </div>
          </span>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "Age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const total = data && data.length > 1 ? {} : { total: 1 };
  console.log('window height', Math.floor(height*3/4))
  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <ExportCsv selectedRowKeys={selectedRowKeys} tableData={tableData}/>
        </Form.Item>
        <Form.Item>
          <ExportCalendar selectedRowKeys={selectedRowKeys} tableData={tableData}/>
        </Form.Item>
        <Table
          rowSelection={rowSelection}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          scroll={{x: true, y: Math.floor(height*3/4)}}
          bordered
          dataSource={tableData}
          columns={mergedColumns}
          rowClassName="editable-row"
          loading={isLoading}
          pagination={false}
          sticky={true}
        />
      </Form>
    </>
  );
};

export default EditableTable;
