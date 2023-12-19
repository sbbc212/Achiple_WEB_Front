"use client";

import { useState } from "react";

import { ConfigProvider, Tabs } from "antd";
import dynamic from "next/dynamic";

import FindPw from "./FindPw";

import type { TabsProps, ThemeConfig } from "antd";

const CheckID = dynamic(() => import("./CheckID"));
const ResetPw = dynamic(() => import("./ResetPw"));

import "./style.css";

export interface Email {
  id: string;
  domain: string;
}

const thmeConfig: ThemeConfig = {
  components: {
    Select: {
      selectorBg: "#F7F7F7",
      colorBorder: "none",
    },
    Tabs: {
      inkBarColor: "#26AF66",
      itemHoverColor: "none",
      itemSelectedColor: "#fff",
    },
  },
  token: {
    borderRadius: 0,
    controlHeight: 40,
    colorPrimaryHover: "transparent",
    controlOutline: "transparent",
  },
};

export interface InfoData {
  user_name: string;
  email: string;
  password: string;
}

const Findlayout = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [email, setEmail] = useState<Email>({
    id: "",
    domain: "",
  });
  const [name, setName] = useState("");
  const [checkID, setCheck] = useState(false);
  const [severInfo, setServerInfo] = useState<InfoData>({
    user_name: "",
    email: "",
    password: "",
  });
  console.log("checkId=========>", checkID);

  const setCheckID = () => {
    setCheck(true);
  };

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const returnFindInfo = (key: string) => {
    setCheck(false);
    handleTabChange(key);
  };

  const rederCheck = (type: string) => {
    if (type === "id") {
      return checkID === false ? (
        <FindPw
          name={name}
          setName={setName}
          checkID={checkID}
          setCheckID={setCheckID}
          email={email}
          setEmail={setEmail}
          setServerInfo={setServerInfo}
          type={type}
        />
      ) : (
        <CheckID severInfo={severInfo} setCheckID={setCheckID} setActiveTab={setActiveTab} />
      );
    }

    if (type === "pw") {
      return checkID === false ? (
        <FindPw
          name={name}
          setName={setName}
          checkID={checkID}
          setCheckID={setCheckID}
          email={email}
          setEmail={setEmail}
          setServerInfo={setServerInfo}
          type={type}
        />
      ) : (
        <ResetPw name={name} email={email} setCheckID={setCheckID} />
      );
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            setCheck(false);
            returnFindInfo("1");
          }}
          className="tabs-btn">
          아이디 찾기
        </div>
      ),
      children: rederCheck("id"),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            setCheck(false);
            returnFindInfo("2");
          }}
          className="tabs-btn">
          비밀번호 찾기
        </div>
      ),
      children: rederCheck("pw"),
    },
  ];

  return (
    <div className="findinfo-wrap">
      <div className="find-contant">
        <ConfigProvider theme={thmeConfig}>
          <Tabs
            tabBarStyle={{ width: "100%" }}
            tabBarGutter={0}
            defaultActiveKey="1"
            items={items}
            centered
            activeKey={activeTab} // 현재 활성화된 탭의 key를 설정
            onChange={handleTabChange}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default Findlayout;
