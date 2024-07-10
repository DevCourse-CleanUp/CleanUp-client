import { atom } from "recoil";

export interface LoginStore {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
}

export const loginState = atom({
    key: "isLoggedIn",
    default: false,
})
