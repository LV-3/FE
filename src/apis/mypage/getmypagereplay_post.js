import axios from 'axios';

export const getReplay = async(subsr) => {
    const result = await axios.post('https://d3l7tgeznk7sw9.cloudfront.net//mypage/replay', {subsr}); 
    return result;
}