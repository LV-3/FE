import axios from "axios";

//VODdata 가져오기
export const getPopular = async () => {
    const result = await axios.post('https://d225nwg9l5o274.cloudfront.net/popular'); 
    return result;
};