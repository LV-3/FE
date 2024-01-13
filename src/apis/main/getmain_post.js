import axios from "axios";

//VODdata 가져오기
export const allVods = async (subsr) => {
    const result = await axios.post('https://d3l7tgeznk7sw9.cloudfront.net/main', {subsr}); 
    return result;
};