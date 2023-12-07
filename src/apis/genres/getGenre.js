import axios from "axios";

//genre별 VOD 리스트 가져오기
export const genreList = async (genre) => {
    const result = await axios.get(`http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/genres/${genre}`); //(`http://localhost:30/genres${genre}`)
    return result;
};