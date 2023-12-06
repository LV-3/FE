import Slider from "react-slick";
import styled from "styled-components";

export const StyledSlider = styled(Slider)`
  margin-left: 0 auto;
  width: 90%;
  height: 270px;
  text-align: center;
  

  .slick-list {
    margin: 0 10px;
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


export const Div = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 4vw;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

export const DivPre = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    left: 2.5vw;
    z-index: 99;
    text-align: left;
    line-height: 30px;
`;

export const MypageTitle = styled.h3`
  margin-top: 4%;
  margin-bottom: 2%;
  margin-left: 10%
`
export const MypageText = styled.p`
  margin-left: 10%;
  font-size: 18px;
`
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
`
export const Poster = styled.img`
    display: flex;
    alignSelf: stretch;
    flex: 1 1 0;
`
export const RatingBox = styled.div`
  width: 80%;
  height: 180px;
  margin-left: 10%;
  margin-bottom: 1%;
  border-bottom : 2px #d4d4d4 solid;
  display: inline-flex;
  flexDirection: row;
`
export const RatingTitle = styled.div`
  margin-left: 1%;
  margin-right: 2%;
  display: inline-flex;
  text-align: start;
  white-space: nowrap;
`
export const SliderContainer = styled.div`
  height: 250px;
  margin: 0 10%;
`
export const PageTitle = styled.h3`
    margin-left: 10%;
    margin-top: 3%;
    margin-bottom: 3%;
    color:white;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const Inputs = styled.div`
    position: relative;
    top: 180px;
    display: flex;
    height: 400px;
    width: 500px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 10px;
    background-color:black;
`;

export const Title = styled.div`
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    color:white;
`;

export const Input = styled.input`
    font-size: 20px;
    height: 30px;
    border-radius: 5px;
    border: none;
    padding: 15px;
    &::placeholder {
        color: #d4d4d4;
        font-size: 20px;
        font-weight: 550;
        border: none;
    };
    &:focus {
        outline: 2px solid #a50034;
    };
`;

export const Button = styled.button`
    background-color: #a50034;
    height: 60px;
    width: 280px;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    align-content: center;
    justify-content: center;
    cursor: pointer;
    &:disabled {
        background-color: #F5ADAD;
      }
}
`;


