import { atom } from "recoil";

export const loginState = atom({
    key: "loginState",
    default: false
});

export const userInfoState = atom({
    key: "userInfoState",
    default: {
        nickname: "",
        profileImageUrl: ""
    }
});