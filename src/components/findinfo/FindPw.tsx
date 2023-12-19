/* eslint-disable @typescript-eslint/ban-types */
import { memo, useState } from "react";

import { Space } from "antd";

import { idfind } from "@/API/customApis/EmailApi";

import EmailForm from "./EmailForm";
import FindInput from "./FindInput";
import VertifyCode from "./VertifyCode";

import type { Email } from "./Findlayout";

interface FindInfoType {
  type: string;
  email: Email;
  setEmail: Function;
  setCheckID: Function;
  setServerInfo: Function;
  checkID: boolean;
  name: string;
  setName: Function;
}

function FindPW({ type, email, setEmail, setCheckID, setServerInfo, name, setName }: FindInfoType) {
  const [code, setCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const returnType = type === "pw" ? "pw" : "id";
  console.log(isOpen);
  const formSubmitHandler = async () => {
    const newEmail = `${email.id}@${email.domain}`;
    const res = type === "pw" ? isOpen && setCheckID(true) : await idfind(name, newEmail, code);

    if (res?.success === true) {
      setServerInfo(res);
      setIsOpen(true);
      setCheckID(true);
    }
  };

  // const inputHanlder = (e: { target: { value: SetStateAction<string> } }) => {
  //   setResetPw(e.target.value);
  // };

  return (
    <Space className="w-full">
      <div>
        <div className="find-text-box">
          <p className="find-tit">등록 된 이메일로 찾기</p>
          <p className="find-text">가입 시 입력한 이메일을 통해 인증 후 비밀번호를 재설정해주세요. </p>
        </div>
        <div className="find-from-wrap">
          {type === "pw" ? (
            <FindInput setName={setName} stateName={name} name={"아이디"} classData={"id"} />
          ) : (
            <FindInput setName={setName} stateName={name} name={"이름"} classData={"name"} />
          )}
          <EmailForm email={email} setEmail={setEmail} setIsOpen={setIsOpen} name={name} type={type} />
          <VertifyCode setIsOpen={setIsOpen} setCheckID={setIsOpen} code={code} email={email} setCode={setCode} type={returnType} />
        </div>

        <div>
          <button className="completion-btn" onClick={formSubmitHandler}>
            확인
          </button>
        </div>
      </div>
    </Space>
  );
}

export default memo(FindPW);
