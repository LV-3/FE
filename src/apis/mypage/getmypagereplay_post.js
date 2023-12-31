import axios from 'axios';

export const getReplay = async(subsr) => {
    const result = await axios.post('https://d225nwg9l5o274.cloudfront.net/mypage/replay', {subsr}); 
    return result;
}