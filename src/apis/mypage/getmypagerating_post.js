import axios from "axios";

export const getmypagerating = async (subsr) => {
    const result = await axios.post('https://d3l7tgeznk7sw9.cloudfront.net/mypage/rating', {subsr});
    return result;
};