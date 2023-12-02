import axios from "axios";

//VODdata 가져오기
export const VOD_model2 = async (subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/main/reload2', {subsr}); //("http://localhost:30/mainreload2",{subsr})
    return result;
};
