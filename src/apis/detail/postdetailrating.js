import axios from "axios";

export const postrating = async(content_id, subsr, rating, review, rating_date)=>{
    const result = await axios.post(`https://d225nwg9l5o274.cloudfront.net/detail/${content_id}/rating`,{ //(`http://localhost:30/detail${content_id}rating`, {
        subsr,
        rating,
        review,
        rating_date
    })
    return result;
}
