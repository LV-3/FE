import axios from "axios";

//전체 VOD 카테고리 가져오기
export const genres = async () => {
    const result = await axios.get('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/genres'); //("http://localhost:30/genres");
    return result;
};