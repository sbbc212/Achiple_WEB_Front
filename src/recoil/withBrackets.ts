/* eslint-disable @typescript-eslint/no-unused-vars */
import { selector } from "recoil";

import exampleAtom from "./atom";

const exampleWithBrackets = selector({
  key: "exampleWithBrackets",
  get: ({ get }) => `Adding brackets: [${get(exampleAtom).value}]`,
});

export default exampleWithBrackets;
