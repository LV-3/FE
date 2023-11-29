import axios from "axios";

export const delReview = async(subsr,content_id) => {
    const result = await axios.delete(`http://1.220.201.108:8080/detail/${content_id}/rating`, {
        data:{subsr}
    })
    return result;
}