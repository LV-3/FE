import axios from "axios";

//VODdata 가져오기
export const getPopular = async () => {
    const result = await axios.post('https://hellogptv.com/main/popular'); 
    return result;
};