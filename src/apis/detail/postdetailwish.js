import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`https://hellogptv.com/${content_id}/wish`,{ 
        subsr,
        wish
    });
    return result;
}
