import axios from "axios";

export const putrating = async(content_id, subsr, rating, review, rating_date)=> {
    const result=await axios.put(`https://d3l7tgeznk7sw9.cloudfront.net//${content_id}/rating`, 
    {
        subsr: subsr,
        rating: rating,
        review: review,
        rating_date: rating_date
    })
    return result;
}