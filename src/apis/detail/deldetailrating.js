import axios from "axios";

export const delReview = async(subsr,content_id) => {
    const result = await axios.delete(`/detail/${content_id}/rating`, {
        data:{subsr}
    })
    return result;
}