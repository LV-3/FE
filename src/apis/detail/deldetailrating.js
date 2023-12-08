import axios from "axios";

export const delReview = async(subsr,content_id) => {
    const result = await axios.delete(`http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/detail/${content_id}/rating`, {
        data:{subsr}
    })
    return result;
}

