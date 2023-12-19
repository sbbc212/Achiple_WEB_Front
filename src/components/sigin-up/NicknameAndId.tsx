import React, { useEffect, useState } from "react";

import { Button, Form, Input } from "antd";

import { duplicateTest } from "@/API/customApis/signupApi";

const NicknameAndId = ({ value, type }: { value: string; type: string }) => {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(false);
  }, [value]);

  const checkDuplicate = async () => {
    try {
      const response = await duplicateTest(type, value);

      if (response?.success) {
        setIsValid(response.success);
      } else if (response?.success === false) {
        setIsValid(response.success);
        alert(`중복된 ${type === "hasid" ? "아이디" : "닉네임"} 입니다.`);
        console.error(`중복된 ${type === "hasid" ? "아이디" : "닉네임"} 입니다.`);
      }
    } catch (error) {
      console.error("Error in onClick:", error);
    }
  };
  return (
    <Form.Item
      hasFeedback={isValid}
      rules={[
        {
          required: true,
          message: type === "hasid" ? "아이디는 영문소문자 또는 숫자 4~19자로 입력해 주세요. (영문소문자/숫자, 4~19자)" : "닉네임을 입력해 주세요.",
        },
        {
          validator: (_, value: string) => {
            if (value?.length <= 12) {
              return Promise.resolve("");
            }
            return Promise.reject(new Error("유효하지 않은 닉네임입니다. "));
          },
        },
      ]}
      name={type === "hasid" ? "user_name" : "nickname"}
      label={type === "hasid" ? "아이디" : "닉네임"}
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 6 }}>
      <div className="flex gap-[0.5rem]">
        <Input
          placeholder={type === "hasid" ? "아이디는 영문소문자 또는 숫자 4~19자로 입력해 주세요." : "12자 이하로 입력해 주세요."}
          style={{ padding: "0.5rem 0.8rem" }}
        />
        <Button style={{ height: "100%", padding: "0.5rem 1.2rem" }} onClick={checkDuplicate}>
          중복확인
        </Button>
      </div>
    </Form.Item>
  );
};

export default NicknameAndId;
