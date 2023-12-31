import axios from "axios";

export const getVodData = async (content_id)=>{
    const result = await axios.get(`https://d225nwg9l5o274.cloudfront.net/${content_id}`) 
    return result;
}

