import { type Dispatch, type SetStateAction, useState } from "react";

import { debounce } from "lodash";

import { mappingLabel } from "@/constants/constants";

import type { NoticeData } from "@/API/customApis/EmailApi";
function LabelWithInput({
  label,
  setNotice,
  notice,
}: {
  label: keyof typeof mappingLabel;
  setNotice: Dispatch<SetStateAction<NoticeData>>;
  notice: NoticeData;
}) {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const onChangeHandler = (e: { target: { name: string; value: string } }) => {
    setNotice((prev: NoticeData) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    label === "이메일" && emailValidater(e.target.value);
  };
  const newLabel = mappingLabel[label];

  const emailValidater = debounce((email: string) => {
    const emailValidation = /^[-0-9A-Za-z!#$%&'*+/=?^_`{|}~.]+@[-0-9A-Za-z!#$%&'*+/=?^_`{|}~]+[.]{1}[0-9A-Za-z]/;
    const isValid = emailValidation.test(email);
    return setIsEmailValid(isValid);
  }, 500);
  return (
    <div className="flex flex-col bg">
      <label className="pl-1" htmlFor={label}>
        {label}
      </label>
      <input id={label} name={newLabel} onChange={onChangeHandler} className="h-10 p-1 bg-gray-200 border-none rounded-md" type="text" />
      {notice.email.length > 0 && !isEmailValid && label === "이메일" && (
        <span className="text-red-500 text-sm">이메일 양식이 틀립니다. 다시 한번 확인하세요.</span>
      )}
    </div>
  );
}

export default LabelWithInput;
