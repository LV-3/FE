import axios from "axios";

export const getTags = async (content_id)=>{
    const result = await axios.get(`https://hellogptv.com/${content_id}/tags`) 
    return result;
}