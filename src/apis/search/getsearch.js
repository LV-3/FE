import axios from "axios";

export const getSearch = async (input) => {
    const result = await axios.get(`https://d225nwg9l5o274.cloudfront.net/search/${input}`) 
    return result;
};