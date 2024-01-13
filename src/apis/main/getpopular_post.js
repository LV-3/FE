import axios from "axios";

//VODdata 가져오기
export const getPopular = async () => {
    const result = await axios.post('https://d3l7tgeznk7sw9.cloudfront.net/main/popular'); 
    return result;
};