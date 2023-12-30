import axios from "axios";

//genre별 VOD 리스트 가져오기
export const kidGenreList = async (genre3) => {
    const result = await axios.get(`https://api.hellogptv.com/kids/${genre3.replaceAll('/', ':')}`);
    return result;
};