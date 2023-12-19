import React from "react";

import { Form, Input } from "antd";

const EmailDomain = () => {
  return (
    <div>
      <Form.Item
        name="emailDomain" // 두 번째 Form.Item
        label=""
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 19 }}
        rules={[
          { required: true, message: "도메인을 입력해 주세요." },
          {
            validator: (_, value) => {
              if (value.length > 2 && value.includes(".")) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("유효하지 않은 이메일 입니다."));
            },
          },
        ]}>
        <Input style={{ padding: "0.5rem 0.1rem" }} />
      </Form.Item>
    </div>
  );
};

export default EmailDomain;
