import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Input,
  Radio,
  Select,
  TreeSelect,
  Checkbox,
} from "antd";
const searchTypes = [
  { title: "全部", value: "noLimit" },
  { title: "以系所搜索", value: "department" },
  { title: "只搜索體育課", value: "PE" },
  { title: "只搜索通識課", value: "GE" },
];
const semesters = [
  "110-1",
  "109-2",
  "109-1",
  "108-2",
  "108-1",
  "107-2",
  "107-1",
  "106-2",
  "106-1",
  "105-2",
  "105-1",
];
import treeDepartment from "./functions/TreeDepartment";
const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [searchType, setSearchType] = useState("noLimit");
  const [confirmLoading, setConfirmLoading] = useState(false);
  //console.log('form.getFieldValue("range")', form.getFieldValue("range"))
  return (
    <Modal
      visible={visible}
      title="搜尋條件"
      okText="查看結果"
      cancelText="Cancel"
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      onOk={() => {
        form
          .validateFields()
          .then(async(values) => {
            //form.resetFields();
            setConfirmLoading(true)
            await onCreate(values);
            setConfirmLoading(false)
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        // name="form_in_modal"
        initialValues={{
          range: "noLimit",
          semester: "109-2",
          onlyShowHasGrade: true,
        }}
      >
        <Form.Item label="搜索範圍" name="range" style={{ width: "100%" }}>
          <Select
            onChange={(val) => {
              console.log("range", val);
              setSearchType(val);
            }}
          >
            {searchTypes.map((x) => {
              return (
                <Select.Option key={x.value} value={x.value}>
                  {x.title}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item label="學期" name="semester" style={{ width: "100%" }}>
          <Select>
            {semesters.map((x) => {
              return (
                <Select.Option key={x} value={x}>
                  {x}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        {searchType !== "department" ? (
          <></>
        ) : (
          <Form.Item
            name="department"
            label="選擇系所"
            style={{ width: "100%" }}
          >
            <TreeSelect
              // type={form.getFieldValue("range") === "noLimit"? "hidden":"text"}
              treeData={treeDepartment}
              // name="department"
              // value={value}
              // onChange={(value) => {
              //   setValue(value);
              // }}
              treeCheckable={true}
              showCheckedStrategy={TreeSelect.SHOW_PARENT}
              placeholder="Please select"
              style={{ width: "100%" }}
            />
          </Form.Item>
        )}
        <Form.Item label="關鍵字" name="keyword">
          <Input
            placeholder="請輸入關鍵字(課名、教授名皆可)"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item name="onlyShowHasGrade" valuePropName="checked">
          <Checkbox>只顯示有歷年成績資料的課程</Checkbox>
        </Form.Item>
        {/* <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
              message: "Please input the title of collection!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item> */}
      </Form>
    </Modal>
  );
};

const CollectionsPage = ({onSearch}) => {
  const [visible, setVisible] = useState(false);

  const onCreate = async(values) => {
    await onSearch(values)
    //console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        htmlType="button"
        onClick={() => {
          setVisible(true);
        }}
        style={{ alignItems:"center" }}
      >
        設定搜尋條件
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default CollectionsPage;
