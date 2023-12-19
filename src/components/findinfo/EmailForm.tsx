/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

import { LoadingOutlined } from "@ant-design/icons";
import { Alert, Select, Spin } from "antd";

import { sendEmailToFindId, sendEmailToFindPw } from "@/API/customApis/EmailApi";
import { domainData } from "@/constants/constants";

import type { Email } from "./Findlayout";

const EmailForm = ({ email, setEmail, setIsOpen, name, type }: { email: Email; setEmail: Function; setIsOpen: Function; name: string; type: string }) => {
  const [isSending, setIsSending] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirectInput, setIsDirectInput] = useState(false);

  const inputHandler = (e: { target: { name: string; value: string } }) => {
    setEmail((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = (value: string) => {
    setIsDirectInput(value === "직접입력");
    setEmail((prev: any) => ({
      ...prev,
      domain: value,
    }));
  };

  const checkID = async () => {
    try {
      setIsLoading(true);
      setIsClick(true);

      const formattedEmail = isDirectInput ? email.id : `${email.id}@${email.domain}`;
      const res = type === "pw" ? await sendEmailToFindPw(formattedEmail) : await sendEmailToFindId(formattedEmail, name);
      res?.success === true && setIsSending(true);
      setIsOpen(true);
    } catch (_) {
      setIsSending(false);
    } finally {
      setIsLoading(false);
    }
  };

  const inputId = `email_${Date.now()}`;

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="email findinput">
          <label htmlFor={inputId}>이메일</label>
          <div className="w-10/12 flex items-center gap-[0.3rem]">
            <input
              name="id"
              onChange={inputHandler}
              type="email"
              id={inputId}
              autoComplete={inputId}
              className="w-[45%] h-[50px] px-4 rounded border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <span className="font-light text-[1.25rem] text-[#bfbfbf]">@</span>
            <Select
              className="ant-select-custom w-40 outline-none"
              style={{ width: "50%", height: "50px" }}
              defaultValue="직접입력"
              showSearch
              onChange={handleChange}
              options={domainData}
            />
          </div>
          {isDirectInput && (
            <input
              name="domain"
              onChange={inputHandler}
              type="text"
              className="w-[45%] h-10 px-4 rounded border border-gray-300 focus:outline-none focus:border-gray-500 mt-2"
            />
          )}
        </div>
        <div className="w-2/12 my-auto">
          <button onClick={checkID} className="flex items-center justify-center text-xs email-btn w-full h-[50]">
            확인
          </button>
        </div>
      </div>
      {isClick &&
        (isLoading ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : (
          <Alert message={isSending ? "메일을 성공적으로 보냈습니다." : "메일 전송이 실패하였습니다."} type={isSending ? "success" : "error"} showIcon />
        ))}
    </div>
  );
};

export default EmailForm;
