import Slider from "react-slick";
import styled from "styled-components";

export const MainStyledSlider = styled(Slider)`
  margin-left: 16.5%;
  width: 90%;
  height: 270px;
  align-items: center;
  justify-content: center;
  
  .slick-list {
    margin: 0 -90px;
    overflow: hidden;
    height: 300px;
    text-align: left;
  }
  .slick-arrow {
    display: block;
    z-index: 10;
    width: 24px;
    height: 24px;
    align-self: stretch;
  }

  .slick-arrow:hover {
    height: 30px;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const StyledSlider = styled(Slider)`
  margin-left: 15.5%;
  width: 90%;
  height: 270px;
  text-align: center;
  justify-content: center;
  
  .slick-list {
    margin: 0 -85px;
    overflow: hidden;
    height: 270px;
    text-align: center;
  }
  .slick-arrow {
    display: block;
    z-index: 10;
    width: 24px;
    height: 24px;
    align-self: stretch;
  }

  .slick-arrow:hover {
    height: 30px;
  }

  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

export const BannerSlider = styled(Slider)`
  width: 100vw;
  height: 250px;
`;

export const SliderContainer = styled.div`
  height: 250px;
  margin: 0 10%;
  margin-bottom: 5%;
`;

export const MainSliderContainer = styled.div`
  height: 300px;
  margin: 0 10%;
  margin-bottom: 2%;
  margin-top: -2%;
`;

export const BannerSliderContainer = styled.div`

  margin-bottom: -7%;

  display: grid;
  align-items: center;
  justify-items: center;
  height: 250px;
  width: 100vw;
`;

export const Div = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    right: -5vw;
    top: -1vw;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

export const DivPre = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    left: -6.5vw;
    top: -1vw;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

export const MypageTitle = styled.h3`
  margin-top: 4%;
  margin-bottom: 2%;
  margin-left: 10%
`;

export const MypageText = styled.text`
  margin-left: 16%;
  font-size: 18px;
  color: white;
  text-decoration: underline;
`;

export const ImgLabel = styled.label`
    width: 176px; 
    height: 244px; 
    border-radius: 3px; 
    overflow: hidden;
    border: 1px black solid;
    flexDirection: column;
    justifyContent: flex-start;
    display: flex;
    cursor: pointer;
`;

export const Poster = styled.img`
    display: flex;
    flex: 0 1 0;
    border-color: black;
    height: 100%;
    border-radius: 3px; 
`;
export const RatingBox = styled.div`
  width: 90%;
  height: 180px;
  margin-left: 10%;
  margin-bottom: 1%;
  border-bottom : 2px #d4d4d4 solid;
  display: inline-flex;
  flexDirection: row;
`;

export const RatingTitle = styled.div`
  margin-left: 1%;
  margin-right: 2%;
  display: inline-flex;
  text-align: start;
  white-space: nowrap;
`;

export const PageTitle = styled.p`
    margin-left: 16%;
    margin-top: 4%;
    margin-bottom: 4%;
    color:white;
    font-weight: bold;
    font-size: 22px;
`;

export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`;

export const Inputs = styled.div`
    position: relative;
    top: 250px;
    display: flex;
    height: 400px;
    width: 600px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
    border-radius: 10px;
    background-color:transparent;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    color:white;
`;

export const PageErrorText = styled.div`
    text-align: center;
    color:white;
    font-size: 24px;
    font-weight: 500;
    margin-top: 20%;
`
export const BackButtonContainer=styled.div`
  position: absolute;
  left: 50px;
  top: 120px;
`

export const BackButton=styled.button`
  background-color:transparent;
  border: 0;
  cursor:pointer;
  `

export const BackImg= styled.img`
  width: 30px;
  height: 30px;
  margin-left: 25%;
  margin-top: 20%;
`

export const SearchTitle = styled.p`
  margin-left: 16.5%;
  margin-top: 2%;
  margin-bottom: 2%;
  color:white;
  font-weight: bold;
  font-size: 22px;
`

