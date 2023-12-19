"use client";

import React, { useEffect, useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { getDateTime } from "@/lib/dateFormat";

import { useAppSelector } from "../redux/hooks";

function CompleteForm() {
  const username = useAppSelector((state) => state.auth.username);
  const signTime = getDateTime();
  const route = useRouter();
  const alertShown = useRef(false);
  useEffect(() => {
    if (!username && !alertShown.current) {
      alertShown.current = true;
      alert("필수 동의 항목을 체크해주세요");
      route.push("/signup/provideinfo");
    }
  }, []);
  return (
    <>
      <div className="completr-wrap">
        <div className="flex justify-center	items-center">
          <div className="flex complert-content">
            <div className="flex justify-center	items-center flex-col gap-[1rem]">
              <span className="check-icon shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="39.922" height="26.524" viewBox="0 0 39.922 26.524">
                  <path
                    id="패스_7618"
                    data-name="패스 7618"
                    d="M61.687,875.846,74.2,887.18l24.729-22.343"
                    transform="translate(-60.344 -863.353)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="6"
                  />
                </svg>
              </span>
              <div className="complert-txt">
                <p className="uesr-name">{username} 님 환영합니다!</p>
                <p className="uesr-complert font-bold">회원가입 완료 되었습니다.</p>
              </div>
              <div className="complert-day">
                <p>가입일시 : {signTime}</p>
              </div>
            </div>
            <Link href={"/"}>
              <button className="complert-btn">아키플 스튜디오 살펴보기</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompleteForm;
