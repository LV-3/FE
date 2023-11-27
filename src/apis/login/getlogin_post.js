import axios from 'axios';

//로그인 함수
export const login = async (subsr) => {
    const result = await axios.post('/login', {subsr}); //('http://localhost:30/login', {subsr});
    return result;
}

