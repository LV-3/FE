import axios from 'axios';

//로그인 함수
export const login = async (subsr) => {
    const result = await axios.post('https://d225nwg9l5o274.cloudfront.net/login', {subsr}); //('http://localhost:30/login', {subsr});
    return result;
}

