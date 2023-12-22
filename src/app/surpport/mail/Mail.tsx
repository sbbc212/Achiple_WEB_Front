"use client";

import { useState } from "react";

function Mail() {
  const [form, setForm] = useState({
    email: "",
    content: "",
  });

  const inputValueHandler = (e: { target: { name: string; value: string } }) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="w-4/12 flex flex-col space-y-10 my-10 mx-auto text-center ">
      <h2 className=" text-5xl font-bold">연락처 지원</h2>
      <form className="flex flex-col gap-5 text-base">
        <input onChange={inputValueHandler} name="email" value={form.email} className="bg-gray-200 p-2 leading-3 rounded-md" type="text" placeholder="이메일" />
        <textarea
          onChange={inputValueHandler}
          value={form.content}
          name="content"
          className="bg-gray-200 p-2 min-h-[140px] rounded-md"
          placeholder="문의하신 내용을 자세히 기재해 주시면 최대한 빠른 답변을 드릴수 있도록 하겠습니다."
        />
      </form>
      <div className="mx-auto bg-[#2aa86b] rounded-md text-white w-full px-5 py-2">
        <button type="button">제출하기</button>
      </div>
    </div>
  );
}

export default Mail;
