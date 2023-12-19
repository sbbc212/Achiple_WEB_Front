// api.js

import { baseApi } from "../apis";

export interface NoticeData {
  corp_name: string;
  name: string;
  email: string;
  call: string;
  body: string;
}
interface emailres {
  success: boolean;
}
const api = new baseApi();
export const verifyCode = async (email: string, code: string) => {
  try {
    const response = await api.post({
      url: "/validate/verifycode",
      body: {
        email: email,
        code: code,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const sendEmail = async (emailformValue: string) => {
  try {
    const res: emailres = await api.post({
      url: "/validate/sendemail",
      body: {
        email: emailformValue,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const findEmail = async (name: string, email: string) => {
  const res = await api.post({
    url: "/find/idfind",
    body: {
      name,
      email,
    },
  });
  return res;
};

export const resetPw = async (user_name: string, email: string, pw: string) => {
  const res = await api.post({
    url: "/find/resetpassword",
    body: {
      user_name,
      email,
      pw,
    },
  });
  return res;
};

export const sendEmailToFindId = async (emailformValue: string, name: string) => {
  try {
    const res: emailres = await api.post({
      url: "/validate/sendemail/tofind/id",
      body: {
        name,
        email: emailformValue,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const sendEmailToFindPw = async (emailformValue: string) => {
  try {
    const res: emailres = await api.post({
      url: "/validate/sendemail/tofind/pw",
      body: {
        email: emailformValue,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const idfind = async (name: string, email: string, code: string) => {
  const res = await api.post({
    url: "/find/id",
    body: {
      name,
      email,
      code,
    },
  });
  return res;
};

export const sendNotice = async (notice: NoticeData) => {
  const { corp_name, name, email, call, body } = notice;
  const res: emailres = await api.post({
    url: "/contact",
    body: {
      corp_name,
      name,
      email,
      call,
      body,
    },
  });

  return res;
};

export const resetPwAPI = async (user_name: string, email: string, password: string) => {
  const res = await api.post({
    url: "/find/resetpassword",
    body: { user_name, email, password },
  });

  return res;
};
