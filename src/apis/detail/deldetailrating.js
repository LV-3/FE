import axios from "axios";

export const delReview = async(subsr,content_id) => {
    const result = await axios.delete(`https://api.hellogptv.com/detail/${content_id}/rating`, {
        data:{subsr}
    })
    return result;
}
// https://https://d225nwg9l5o274.cloudfront.net
// http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com
// http://localhost:30
// https://api.hellogptv.com