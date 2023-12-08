import axios from "axios";

export const getmypagerating = async (subsr) => {
    const result = await axios.post('https://d225nwg9l5o274.cloudfront.net/mypage/rating', {subsr}) ('http:localhost:30/mypagerating', {subsr})
    return result;
};