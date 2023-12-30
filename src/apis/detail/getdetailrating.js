import axios from "axios";

export const getratingdata = async(content_id) => {
    const response = await axios.get(`https://api.hellogptv.com/${content_id}/rating`)
    return response;
}
