import axios from "axios";

//mood VOD 리스트 가져오기
export const moodList = async (tags) => {
    const result = await axios.get(`https://d3l7tgeznk7sw9.cloudfront.net/main/${tags}`) 
    return result;
};