import { atom } from "recoil";

const exampleAtom = atom({
  key: "exampleAtom",
  default: {
    name: "래덕님",
    value: "Example Value!",
  },
});

export default exampleAtom;
