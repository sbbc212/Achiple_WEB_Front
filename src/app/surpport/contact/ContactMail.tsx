"use client";

import { useState } from "react";

import { sendNotice } from "@/API/customApis/EmailApi";
import { labelText } from "@/constants/constants";

import LabelWithInput from "../LabelWithInput";

import type { NoticeData } from "@/API/customApis/EmailApi";
function ContactMail() {
  const [notice, setNotice] = useState<NoticeData>({
    corp_name: "",
    name: "",
    email: "",
    call: "",
    body: "",
  });
  //   const [isChecked, setIsChecked] = useState(false);

  //   const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean) } }) => {
  //     setIsChecked(event.target.checked);
  //   };

  const handleCancel = async () => {
    const isAllPropertiesValid = Object.values(notice).every((value) => value.length > 0);
    try {
      if (isAllPropertiesValid) {
        const res = await sendNotice(notice);
        res.success === true && alert("문의가 접수되었습니다.");
        setNotice({ corp_name: "", name: "", email: "", call: "", body: "" });
      } else {
        !isAllPropertiesValid && alert("정보제공과 모든 입력창을 작성하세요!");
        !isAllPropertiesValid && alert("모든 정보를 입력해주세요!");
        isAllPropertiesValid && alert("정보제공에 동의해주세요!");
      }
    } catch (_) {
      alert("이메일 전송이 실패되었습니다. 다시 시도해 보세요.");
    }
  };

  return (
    <div className="overflow-auto  p-6 scrollbar-hide w-1/2 mx-auto border  border-[#2aa86b] rounded-md my-10 space-y-4">
      <div className="text-center py-8">
        <p className="text-line-ugreen text-4xl font-bold">비즈니스 문의하기</p>
        <span className="text-lg">
          우리는 가능한 협력 기회를 파악하고, <br /> 서로 유용한 파트너십을 구축하려고 합니다.
        </span>
      </div>
      <div>
        <div className="grid grid-rows-2 grid-flow-col gap-2">
          {labelText.map((item) => (
            <LabelWithInput notice={notice} key={item} label={item} setNotice={setNotice} />
          ))}
        </div>
        <label htmlFor="body">내용</label>
        <textarea
          id="body"
          onChange={(e) => {
            setNotice((prev) => {
              return { ...prev, body: e.target.value };
            });
          }}
          value={notice.body}
          name="body" // Set a unique name for the textarea
          placeholder="원하시는 문의글을 자세히 남겨주시면 순차적으로 연락 드리겠습니다."
          className="w-full h-80 rounded-md bg-gray-200 border-none resize-none p-2"
        />
      </div>
      {/* <div className="gap-1">
        <p className="font-bold text-lg">개인정보 수집 및 활용 동의</p>
        {infoData.map((item) => (
          <div key={item.title}>
            <p className="font-bold text-l">{item.title}</p>
            {item.content.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
        ))}
      </div>
      <Divider />
      <div>
        <input id="check" onChange={handleCheckboxChange} name="check" type="checkbox" />
        <label htmlFor="check">위 개인정보 수집 및 활용에 동의합니다.</label>
      </div> */}
      <div className="w-1/3 flex justify-center py-4 border  border-[#2aa86b] rounded-md mx-auto">
        <button onClick={handleCancel} className="w-32 bg-line-ugreen border-none text-line-gray-1">
          문의보내기
        </button>
      </div>
    </div>
  );
}

export default ContactMail;
