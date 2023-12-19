/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";

import { Alert } from "antd";

import { verifyCode } from "@/API/customApis/EmailApi";

import FindInput from "./FindInput";

import type { Email } from "./Findlayout";

interface Props {
  email: Email;
  setCheckID: Function;
  setCode: Function;
  setIsOpen: Function;
  code: string;
  type: string;
}

function VertifyCode({ email, setCheckID, setCode, code, type, setIsOpen }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendingCode = async () => {
    setIsLoading(true);
    setIsClick(true);
    const formattedEmail = `${email.id}@${email.domain}`;
    const res = await verifyCode(formattedEmail, code);
    res.success === true ? (type === "pw" && setIsOpen(true), setCheckID(true), setIsSending(true)) : setCheckID(false);
  };

  return (
    <div>
      <div className="certified findinput flex items-center">
        <div className="w-full">
          <FindInput name={"인증번호"} classData={"code"} setName={setCode} stateName={code} />
        </div>
        {type === "pw" && (
          <button className="code-cp-btn h-[50px]" onClick={sendingCode}>
            인증하기
          </button>
        )}
      </div>
      {isLoading && isClick && (
        <Alert message={isSending ? "인증에 성공했습니다." : "유효하지 않은 코드입니다."} type={isSending ? "success" : "error"} showIcon />
      )}
    </div>
  );
}

export default VertifyCode;
