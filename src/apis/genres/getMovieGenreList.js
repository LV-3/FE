import axios from "axios";

//genre별 VOD 리스트 가져오기
export const movieGenreList = async (genre2) => {
    const result = await axios.get(`https://api.hellogptv.com/movie/${genre2.replaceAll('/', ':')}`);
    return result;
};