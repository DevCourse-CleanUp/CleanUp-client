import { atom } from "recoil";

export const codeAtom = atom<string>({
  key: "code",
  default: "",
});

export const answerAtom = atom<string>({
  key: "answer", // unique ID
  default: "display: flex; justify-content: end;",
});

export const solveAtom = atom<boolean>({
  key: "solve",
  default: false,
});
