import axios from "axios";

//VODdata 가져오기
export const allVods = async (subsr) => {
    const result = await axios.post('http://1.220.201.108:8080/main', {subsr}); //("http://localhost:30/main",{subsr})
    return result;
};