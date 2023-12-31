import axios from "axios";

export const delReview = async(subsr,content_id) => {
    const result = await axios.delete(`https://d225nwg9l5o274.cloudfront.net/${content_id}/rating`, {
        data:{subsr}
    })
    return result;
}
// https://d225nwg9l5o274.cloudfront.net
// http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com
// http://localhost:30
// https://d225nwg9l5o274.cloudfront.net