import axios from "axios";

export const getSearch = async (input) => {
    const result = await axios.get(`https://api.hellogptv.com/search/${input}`) 
    return result;
};