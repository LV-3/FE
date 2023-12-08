import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`https://d225nwg9l5o274.cloudfront.net/detail/${content_id}/wish`,{ 
        subsr,
        wish
    });
    return result;
}
