import axios from "axios";

export const getmypagewish = async (subsr) => {
    const result = await axios.post('https://d225nwg9l5o274.cloudfront.net/mypage/wish', {subsr}) //('http://localhost:30/mypagewish', {subsr})
    return result;
}