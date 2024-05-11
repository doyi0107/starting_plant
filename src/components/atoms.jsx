import { atom } from "recoil";

export const cartState = atom({
  key: "cartState", // 고유한 key
  default: [], // 기본값은 빈 배열
});
