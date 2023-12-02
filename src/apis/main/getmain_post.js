import axios from "axios";

//VODdata 가져오기
export const allVods = async (subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/main', {subsr}); //("http://localhost:30/main",{subsr})
    return result;
};