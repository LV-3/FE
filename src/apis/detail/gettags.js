import axios from "axios";

export const getTags = async (content_id)=>{
    const result = await axios.get(`https://d3l7tgeznk7sw9.cloudfront.net//${content_id}/tags`) 
    return result;
}