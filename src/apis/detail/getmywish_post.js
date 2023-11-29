import axios from "axios";

export const getwishdata = async(content_id) => {
    const subsr = localStorage.getItem('subsr')
    const result = await axios.post(`http://1.220.201.108:8080/detail/${content_id}/mywish`, {subsr}) //(`http://localhost:30/detail${content_id}mywish`,{subsr})
    return result;
}

