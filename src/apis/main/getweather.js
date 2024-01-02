import axios from "axios";

//VODdata 가져오기
export const getWeather = async () => {
    const result = await axios.get('https://d3l7tgeznk7sw9.cloudfront.net//main/weather'); 
    return result;
};