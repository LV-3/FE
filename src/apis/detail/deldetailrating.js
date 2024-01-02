import axios from "axios";

export const delReview = async(subsr,content_id) => {
    const result = await axios.delete(`https://d3l7tgeznk7sw9.cloudfront.net//${content_id}/rating`, {
        data:{subsr}
    })
    return result;
}
// https://d225nwg9l5o274.cloudfront.net
// https://hellogptv.com
// http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com
// https://d3l7tgeznk7sw9.cloudfront.net/
// https://api.hellogptv.com