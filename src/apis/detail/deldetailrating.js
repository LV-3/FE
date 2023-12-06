import axios from "axios";

export const delReview = async(subsr,content_id) => {
    const result = await axios.delete(`d225nwg9l5o274.cloudfront.net/detail/${content_id}/rating`, {
        data:{subsr}
    })
    return result;
}

//{ //("http://localhost:30/ratings", { 