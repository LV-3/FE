import axios from 'axios';

export const getReplay = async(subsr) => {
    const result = await axios.post('https://api.hellogptv.com/mypage/replay', {subsr}); 
    return result;
}