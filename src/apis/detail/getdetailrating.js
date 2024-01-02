import axios from "axios";

export const getratingdata = async(content_id) => {
    const response = await axios.get(`https://d3l7tgeznk7sw9.cloudfront.net//${content_id}/rating`)
    return response;
}
