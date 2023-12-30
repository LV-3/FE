import axios from "axios";

export const getmypagerating = async (subsr) => {
    const result = await axios.post('https://api.hellogptv.com/mypage/rating', {subsr});
    return result;
};