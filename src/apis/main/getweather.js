import axios from "axios";

//mood VOD 리스트 가져오기
export const getWeather = async () => {
    const result = await axios.get('https://d225nwg9l5o274.cloudfront.net/main/weather') 
    return result;
};