import axios from "axios";

export const getVodData = async (content_id)=>{
    const result = await axios.get(`https://api.hellogptv.com/detail/${content_id}`) 
    return result;
}

