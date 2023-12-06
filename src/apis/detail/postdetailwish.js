import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`d225nwg9l5o274.cloudfront.net/detail/${content_id}/wish`,{ //(`http://localhost:30/detail${content_id}wish`, 
        subsr,
        wish
    });
    return result;
}
