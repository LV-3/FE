import axios from "axios";

export const getmypagerating = async (subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/mypage/rating', {subsr}) //('http://localhost:30/mypagerating', {subsr})
    return result;
}