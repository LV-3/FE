import axios from "axios";

//VODdata 가져오기
export const VOD_model1 = async (subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/main/reload1', {subsr}); 
    return result;
};
