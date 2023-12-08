import axios from "axios";

export const getwishdata = async(content_id) => {
    const subsr = localStorage.getItem('subsr')
    const result = await axios.post(`https://d225nwg9l5o274.cloudfront.net/detail/${content_id}/mywish`, {subsr}) (`http:localhost:30/detail${content_id}mywish`,{subsr})
    return result;
}

