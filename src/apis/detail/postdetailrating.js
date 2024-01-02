import axios from "axios";

export const postrating = async(content_id, subsr, rating, review, rating_date)=>{
    const result = await axios.post(`https://d3l7tgeznk7sw9.cloudfront.net//${content_id}/rating`,{
        subsr,
        rating,
        review,
        rating_date
    })
    return result;
}
