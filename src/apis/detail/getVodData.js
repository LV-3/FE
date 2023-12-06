import axios from "axios";

export const getVodData = async (content_id)=>{
    const result = await axios.get(`d225nwg9l5o274.cloudfront.net/detail/${content_id}`) //(`http://localhost:30/detail${content_id}`)
    return result;
}

