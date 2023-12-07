import axios from "axios";

export const getVodData = async (content_id)=>{
    const result = await axios.get(`http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/detail/${content_id}`) //(`http://localhost:30/detail${content_id}`)
    return result;
}

