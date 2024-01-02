import axios from "axios";

export const getSearch = async (input) => {
    const result = await axios.get(`https://d3l7tgeznk7sw9.cloudfront.net//search/${input}`) 
    return result;
};