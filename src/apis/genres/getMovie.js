import axios from "axios";

//전체 VOD 카테고리 가져오기
export const getMovie = async () => {
    const result = await axios.get('https://d3l7tgeznk7sw9.cloudfront.net/movie'); 
    return result;
};