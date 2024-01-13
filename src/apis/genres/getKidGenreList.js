import axios from "axios";

//genre별 VOD 리스트 가져오기
export const kidGenreList = async (genre3) => {
    const result = await axios.get(`https://d3l7tgeznk7sw9.cloudfront.net/kids/${genre3.replaceAll('/', ':')}`);
    return result;
};