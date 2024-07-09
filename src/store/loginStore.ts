import { atom } from "recoil";


interface LoginStore {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
}

export const loginState = atom({
    key: "isLoggedIn",
    default: false,
})
