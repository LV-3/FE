import axios from "axios";

//전체 VOD 카테고리 가져오기
export const genres = async () => {
    const result = await axios.get('http://1.220.201.108:8080/genres'); //("http://localhost:30/genres");
    return result;
};