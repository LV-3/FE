import axios from "axios";

export const getwishdata = async(content_id) => {
    const subsr = localStorage.getItem('subsr')
    const result = await axios.post(`http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/detail/${content_id}/mywish`, {subsr}) //(`http://localhost:30/detail${content_id}mywish`,{subsr})
    return result;
}

