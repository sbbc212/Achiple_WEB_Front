/* eslint-disable @typescript-eslint/ban-types */
import Link from "next/link";

import type { InfoData } from "./Findlayout";

function CheckID({ severInfo, setCheckID, setActiveTab }: { severInfo: InfoData; setCheckID: Function; setActiveTab: Function }) {
  const findPwHandler = () => {
    setCheckID(true);
    setActiveTab("2");
  };
  return (
    <div className="h-60">
      <div>{severInfo?.user_name}</div>
      <div className="flex flex-col gap-2">
        <Link href="/signin">
          <button className="flex items-center justify-center text-xs email-btn w-full h-10" type="button">
            로그인으로 이동
          </button>
        </Link>
        <button onClick={findPwHandler} className="flex items-center justify-center text-xs email-btn w-full h-10">
          비밀번호찾기
        </button>
      </div>
    </div>
  );
}

export default CheckID;
