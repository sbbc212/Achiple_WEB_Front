import React from "react";

import { Button, Form } from "antd";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const route = useRouter();

  const clickCancel = () => {
    route.push("/");
  };

  return (
    <div className="py-[1.2rem]">
      <Form.Item>
        <button style={{ padding: "1.6rem", lineHeight: 0, background: "#26af66", display: "block", width: "100%", color: "#fff" }} className="completion-btn">
          로그인
        </button>
      </Form.Item>
      <Form.Item>
        <Button
          style={{ padding: "1.6rem", lineHeight: 0, border: "1px solid #d9d9d9", color: "#434343" }}
          type="link"
          onClick={clickCancel}
          className="btn btn-primary login-form-button"
          block>
          취소
        </Button>
      </Form.Item>
    </div>
  );
};
export default LoginButton;
