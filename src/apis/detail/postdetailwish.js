import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`https://api.hellogptv.com/detail/${content_id}/wish`,{ 
        subsr,
        wish
    });
    return result;
}
