import { atom } from "recoil";

export const normalState = atom({
  key: "normalState",
  default: [
    {
      id: 1,
      content: "first content",
    },
  ],
});
