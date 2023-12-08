import axios from "axios";

export const getratingdata = async(content_id) => {
    const response = await axios.get(`http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/detail/${content_id}/rating`) (`http:localhost:30/detail${content_id}rating`) 
    return response;
}
