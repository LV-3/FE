import axios from "axios";

//genre별 VOD 리스트 가져오기
export const tvGenreList = async (genre1) => {
    const result = await axios.get(`https://d225nwg9l5o274.cloudfront.net/tv/${genre1.replaceAll('/', ':')}`);
    return result;
};