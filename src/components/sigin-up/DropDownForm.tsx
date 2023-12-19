import React from "react";

import { DatePicker, Form, Select } from "antd";

import { nation, sex, type UserType } from "@/constants/siginupFormData";

import type { formType } from "@/type/signUp";

// eslint-disable-next-line @typescript-eslint/ban-types
function DropDownForm({ item, setForm }: { setForm: Function; item: UserType }) {
  const selectData = item.label === "성별" ? sex : nation;
  const selectHandler = (value: number) => {
    setForm((prev: formType) => {
      return {
        ...prev,
        [item.name[1]]: value,
      };
    });
  };
  return (
    <Form.Item name={item.name} label={item.label}>
      {item.label === "생년월일" ? <DatePicker /> : <Select onChange={selectHandler} placeholder="선택" style={{ width: 200 }} options={selectData}></Select>}
    </Form.Item>
  );
}

export default DropDownForm;
