import axios from 'axios';

export const getReplay = async(subsr) => {
    const result = await axios.post('d225nwg9l5o274.cloudfront.net/mypage/replay', {subsr}); //("http://localhost:30/mypagereplay",{subsr})
    return result;
}