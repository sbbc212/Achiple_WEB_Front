"use client";

import type { ReactNode } from "react";

import { Provider } from "react-redux";
import { StyleRegistry } from "styled-jsx";

import { store } from "./redux/store";

function RecoilFrame({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <StyleRegistry>{children}</StyleRegistry>
    </Provider>
  );
}

export default RecoilFrame;
