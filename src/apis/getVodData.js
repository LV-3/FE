import axios from "axios";

export const getVodData = async (content_id)=>{
    const result = await axios.get(`http://localhost:30/detail${content_id}`)
    return result.data;
}
