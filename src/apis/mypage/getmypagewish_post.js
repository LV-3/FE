import axios from "axios";

export const getmypagewish = async (subsr) => {
    const result = await axios.post('https://api.hellogptv.com/mypage/wish', {subsr});
    return result;
}

