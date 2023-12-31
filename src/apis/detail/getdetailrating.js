import axios from "axios";

export const getratingdata = async(content_id) => {
    const response = await axios.get(`https://d225nwg9l5o274.cloudfront.net/${content_id}/rating`)
    return response;
}
