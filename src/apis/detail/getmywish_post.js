import axios from "axios";

export const getwishdata = async(content_id) => {
    const subsr = localStorage.getItem('subsr')
    const result = await axios.post(`https://d3l7tgeznk7sw9.cloudfront.net//${content_id}/mywish`, {subsr}) 
    return result;
}

