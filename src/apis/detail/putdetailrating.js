import axios from "axios";

export const putrating = async(content_id, subsr, rating, review, rating_date)=> {
    const result=await axios.put(`https://api.hellogptv.com/${content_id}/rating`, 
    {
        subsr: subsr,
        rating: rating,
        review: review,
        rating_date: rating_date
    })
    return result;
}