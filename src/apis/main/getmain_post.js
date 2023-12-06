import axios from "axios";

//VODdata 가져오기
export const allVods = async (subsr) => {
    const result = await axios.post('d225nwg9l5o274.cloudfront.net/main', {subsr}); //("http://localhost:30/main",{subsr})
    return result;
};