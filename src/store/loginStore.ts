import { create } from "zustand";

interface LoginStore {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
}

const useLoginStore = create<LoginStore>(
    (set) => ({
        isLoggedIn: false,
        setIsLoggedIn: (value: boolean) => {
            set(() => ({isLoggedIn: value}))
        }
    })
)

export default useLoginStore;