import axios from 'axios';

//로그인 함수
export const login = async (subsr) => {
    const result = await axios.post('http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/login', {subsr});
    return result;
}