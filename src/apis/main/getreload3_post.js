import axios from "axios";

//VODdata 가져오기
export const VOD_model3 = async (subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/main/reload3', {subsr}); //("http://localhost:30/mainreload3",{subsr})
    return result;
};
