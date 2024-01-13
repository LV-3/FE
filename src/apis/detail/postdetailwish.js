import axios from "axios";

export const postwish = async(subsr, content_id, wish) => {
    const result = await axios.post(`https://d3l7tgeznk7sw9.cloudfront.net/${content_id}/wish`,{ 
        subsr,
        wish
    });
    return result;
}
