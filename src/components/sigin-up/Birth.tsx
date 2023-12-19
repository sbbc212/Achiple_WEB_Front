"use client";
import React from "react";

import { ConfigProvider, DatePicker, Form } from "antd";
import "moment/locale/ko";
import locale from "antd/lib/locale/ko_KR";
import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import moment from "moment";
import "dayjs/locale/ko";

dayjs.extend(updateLocale);
dayjs.updateLocale("ko", {
  weekStart: 0,
});

export interface ValidProps {
  validateSelect: (_: unknown, value: string | number) => Promise<void>;
  ko_KR: string;
}
console.log();

function Birth({ validateSelect }: ValidProps) {
  // 영어 로케일 비활성화

  moment.locale("ko");
  const customFormat = "YYYY-MM-DD";
  return (
    <ConfigProvider locale={locale}>
      <Form.Item
        rules={[
          {
            required: true,
            message: "생년월일을 선택해주세요.",
          },
          {
            validator: validateSelect,
          },
        ]}
        name="birthday"
        label="생년월일"
        labelCol={{ span: 2 }}>
        <DatePicker placeholder="생년월일" style={{ cursor: "pointer", width: "15%", padding: "0.5rem 0.8rem" }} format={customFormat} />
      </Form.Item>
    </ConfigProvider>
  );
}

export default Birth;
