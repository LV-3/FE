import axios from "axios";

//genre별 VOD 리스트 가져오기
export const movieGenreList = async (genre2) => {
    const result = await axios.get(`https://d3l7tgeznk7sw9.cloudfront.net/movie/${genre2.replaceAll('/', ':')}`);
    return result;
};