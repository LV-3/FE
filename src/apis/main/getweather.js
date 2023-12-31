import axios from "axios";

//VODdata 가져오기
export const getWeather = async () => {
    const result = await axios.get('https://hellogptv.com/main/weather'); 
    return result;
};