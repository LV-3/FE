import axios from "axios";

export const getratingdata = async(content_id) => {
    const response = await axios.get(`http://1.220.201.108:8080/detail/${content_id}/rating`) //(`http://localhost:30/detail${content_id}rating`) 
    return response;
}
