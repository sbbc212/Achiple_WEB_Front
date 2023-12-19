import React from "react";

import { Form, Input } from "antd";

const EmailId = () => {
  return (
    <div>
      <Form.Item
        name="emailId" // 첫 번째 Form.Item
        label="이메일"
        labelCol={{ span: 10 }}
        rules={[
          { required: true, message: "이메일 아이디를 입력해 주세요." },
          {
            validator: (_, value) => {
              if (value.length > 2) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("아이디를 입력해주세요"));
            },
          },
        ]}>
        <Input style={{ padding: "0.5rem 0.8rem" }} />
      </Form.Item>
    </div>
  );
};

export default EmailId;
