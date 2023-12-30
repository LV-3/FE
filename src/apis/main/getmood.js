import axios from "axios";

//mood VOD 리스트 가져오기
export const moodList = async (tags) => {
    const result = await axios.get(`https://api.hellogptv.com/main/${tags}`) 
    return result;
};