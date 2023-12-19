"use client";

import { useEffect, useRef, useState } from "react";

import { ConfigProvider, Form } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import Name from "./Name";
import NicknameAndId from "./NicknameAndId";
import { useAppSelector } from "../redux/hooks";

import type { formType } from "@/type/signUp";

const EmailNew = dynamic(() => import("./EmailNew"));
const SignUpValidation = dynamic(() => import("./SignupValidation"));
const SelectValidationAndPassword = dynamic(() => import("./SelectValidationAndPassword"));

const validateMessages = {
  required: "${label} is required!",
  types: {
    name: "${label}은 12글자 이하여야합니다.",
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values: unknown) => {
  console.log(values);
};

const SiginupForm = () => {
  const [isActive, setIsActive] = useState(false);

  const [emailbtn, setEmailbtn] = useState(false);
  const [confirmbtn, setConfirmbtn] = useState(false);
  const [resSuccess, setResSuccess] = useState("");
  const checked = useAppSelector((state) => state.auth.checkedthird);

  const [form] = Form.useForm<formType>();

  const nicknameValue = Form.useWatch("nickname", form);
  const user_nameValue = Form.useWatch("user_name", form);

  const emailId = Form.useWatch("emailId", form);
  const emailDomain = Form.useWatch("emailDomain", form);

  const fullEmail = `${emailId}@${emailDomain}`;
  console.log(emailId, "사인업폼 ");
  const route = useRouter();
  const alertShown = useRef(false);

  useEffect(() => {
    if (!checked && !alertShown.current) {
      alertShown.current = true;
      alert("필수 동의 항목을 체크해주세요");
      route.push("/signup/provideinfo");
    }
  }, [checked]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#26AF66",
          colorLink: "#000",
          borderRadius: 2,
          colorBgContainer: "#F7F7F7",
          colorBorder: "transparent",
          colorPrimaryActive: "none",
          colorPrimaryBorderHover: "none",
          colorPrimaryHover: "none",
        },
        components: {
          Input: {
            colorBgContainer: "#F7F7F7",
            activeBorderColor: "none",
            hoverBorderColor: "none",
            colorBorder: "transparent",
            activeShadow: "none",
          },
        },
      }}>
      <Form form={form} colon={false} labelAlign="left" className="my-auto " name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Name />
        <NicknameAndId value={nicknameValue} type="hasnickname" />
        <NicknameAndId value={user_nameValue} type="hasid" />
        <EmailNew
          setResSuccess={setResSuccess}
          resSuccess={resSuccess}
          emailformValue={fullEmail}
          confirmbtn={confirmbtn}
          setConfirmbtn={setConfirmbtn}
          emailbtn={emailbtn}
          setEmailbtn={setEmailbtn}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <SelectValidationAndPassword />
        <SignUpValidation resSuccess={resSuccess} form={form} />
      </Form>
    </ConfigProvider>
  );
};

export default SiginupForm;
