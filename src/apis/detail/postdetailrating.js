import axios from "axios";

export const postrating = async(content_id, subsr, rating, review, rating_date)=>{
    const result = await axios.post(`http://1.220.201.108:8080/detail/${content_id}/rating`,{ //(`http://localhost:30/detail${content_id}rating`, {
        subsr,
        rating,
        review,
        rating_date
    })
    return result;
}
