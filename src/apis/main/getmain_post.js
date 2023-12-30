import axios from "axios";

//VODdata 가져오기
export const allVods = async (subsr) => {
    const result = await axios.post('https://api.hellogptv.com/main', {subsr}); 
    return result;
};