import axios from 'axios';

//로그인 함수
export const login = async (subsr) => {
    const result = await axios.post('https://d3l7tgeznk7sw9.cloudfront.net//login', {subsr});
    return result;
}