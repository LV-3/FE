import axios from 'axios';

export const getReplay = async(subsr) => {
    const result = await axios.post('http://1.220.201.108:8080/mypage/replay', {subsr}); //("http://localhost:30/mypagereplay",{subsr})
    return result;
}