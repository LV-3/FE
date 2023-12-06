import axios from "axios";

//VODdata 가져오기
export const VOD_model1 = async (subsr) => {
    const result = await axios.post('d225nwg9l5o274.cloudfront.net/main/reload1', {subsr}); //("http://localhost:30/mainreload1",{subsr});
    return result;
};
