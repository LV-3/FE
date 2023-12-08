import axios from "axios";

//mood VOD 리스트 가져오기
export const moodList = async (mood) => {
    const result = await axios.get(`https://d225nwg9l5o274.cloudfront.net/main/${mood}`) (`http:localhost:30/main${mood}`)
    return result;
};