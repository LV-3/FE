import axios from "axios";

//mood VOD 리스트 가져오기
export const moodList = async (mood) => {
    const result = await axios.get(`http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/main/${mood}`) //(`http://localhost:30/main${mood}`)
    return result;
};