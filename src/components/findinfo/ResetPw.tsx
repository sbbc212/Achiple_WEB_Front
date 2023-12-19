/* eslint-disable @typescript-eslint/ban-types */
"use client";

import type { SetStateAction } from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import { resetPwAPI } from "@/API/customApis/EmailApi";

import FindInput from "./FindInput";

import type { Email } from "./Findlayout";

interface CustomSwalClass {
  popup?: string;
  content?: string;
  confirmButton?: string;
}

function ResetPw({ email, name, setCheckID }: { email: Email; name: string; setCheckID: Function }) {
  const [password, setPassword] = useState("");
  const [isSame, setIsSame] = useState(true);
  // const valueHandler = (e: { target: { value: SetStateAction<string> } }) => {
  //   setPassword(e.target.value);
  // };
  const router = useRouter();
  const checkPW = (e: { target: { value: SetStateAction<string> } }) => {
    return password === e.target.value ? setIsSame(false) : setIsSame(true);
  };

  const resethandler = async () => {
    const formatEmail = email.id + "@" + email.domain;
    await resetPwAPI(name, formatEmail, password);

    Swal.fire({
      title: "비밀번호가 변경되었습니다.",
      icon: "success",
      customClass: {
        content: "text-white",
        confirmButton: "bg-green-500 text-green-500",
      } as CustomSwalClass,
    }).then((res) => {
      res.isConfirmed && router.push("/signin");
      res.isConfirmed && setCheckID(false);
    });
  };

  return (
    <div className="flex flex-col">
      <p>비밀번호 재설정</p>
      <FindInput type={"password"} name={"비밀번호"} classData={"resetPw"} setName={setPassword} stateName={"resetPw"} />
      <form onSubmit={(e) => e.preventDefault()} className="findinput">
        <label htmlFor="reCheckPw">비밀번호 재설정</label>
        <input type="password" onChange={checkPW} id="reCheckPw" />
      </form>

      <button disabled={isSame} onClick={resethandler} className="flex items-center justify-center text-xs email-btn w-full h-10">
        비밀번호 변경
      </button>
    </div>
  );
}

export default ResetPw;
