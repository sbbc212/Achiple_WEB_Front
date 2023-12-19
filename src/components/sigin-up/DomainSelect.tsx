import React from "react";

import { Form, Select } from "antd";

import { domainData } from "@/constants/constants";

const DomainSelect = ({ selectHandler }: { selectHandler: () => void }) => {
  return (
    <div className="ml-[-2rem]">
      <Form.Item name="emailDomain" label="" wrapperCol={{ span: 30 }} rules={[{ message: "도메인을 선택하거나 입력해 주세요." }]}>
        <Select
          placeholder="직접 입력"
          style={{ height: "2.4rem", marginBottom: "-2rem", padding: "0 0.2rem" }}
          options={domainData}
          onChange={selectHandler}
        />
      </Form.Item>
    </div>
  );
};

export default DomainSelect;
