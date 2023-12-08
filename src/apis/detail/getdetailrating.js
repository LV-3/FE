import axios from "axios";

export const getratingdata = async(content_id) => {
    const response = await axios.get(`https://d225nwg9l5o274.cloudfront.net/detail/${content_id}/rating`) (`http:localhost:30/detail${content_id}rating`) 
    return response;
}
