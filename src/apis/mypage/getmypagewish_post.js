import axios from "axios";

export const getmypagewish = async (subsr) => {
    const result = await axios.post('http://1.220.201.108:8080/mypage/wish', {subsr}) //('http://localhost:30/mypagewish', {subsr})
    return result;
}