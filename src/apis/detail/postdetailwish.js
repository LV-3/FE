import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`http://lv3-loadbalancer-918926550.ap-northeast-2.elb.amazonaws.com/detail/${content_id}/wish`,{ 
        subsr,
        wish
    });
    return result;
}
