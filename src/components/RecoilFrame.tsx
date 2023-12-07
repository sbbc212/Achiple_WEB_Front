"use client";

import { RecoilRoot } from "recoil";

function RecoilFrame({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilFrame;
