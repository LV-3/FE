import axios from "axios";

export const getmypagewish = async (subsr) => {
    const result = await axios.post('https://d3l7tgeznk7sw9.cloudfront.net/mypage/wish', {subsr});
    return result;
}

