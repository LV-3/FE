import axios from "axios";

export const getmypagewish = async (subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/mypage/wish', {subsr}) //('http://localhost:30/mypagewish', {subsr})
    return result;
}