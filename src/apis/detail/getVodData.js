import axios from "axios";

export const getVodData = async (content_id)=>{
    const result = await axios.get(`https://hellogptv.com/${content_id}`) 
    return result;
}

