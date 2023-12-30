import axios from "axios";

export const getwishdata = async(content_id) => {
    const subsr = localStorage.getItem('subsr')
    const result = await axios.post(`https://api.hellogptv.com/detail/${content_id}/mywish`, {subsr}) 
    return result;
}

