import React, {useState, useEffect} from 'react'

import {HeartOutlined, HeartFilled} from '@ant-design/icons';	

//상세페이지 동적 url 라우팅 위한 useParams 
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { postwish } from '../apis/detail/postdetailwish';
import ReviewModal from '../components/ReviewModal';
import { Rating } from 'react-simple-star-rating'
import { getVodData} from '../apis/detail/getVodData';
import { getwishdata } from '../apis/detail/getmywish_post';
import { getratingdata } from '../apis/detail/getdetailrating';
import DelConfirmAlert from '../components/DelConfirmAlert';


export default function Detail() {
    
    //url 파라미터("localhost:3000/detail/" 뒤에 붙는 상세 페이지 파라미터)를 content_id 변수로 저장
    let {content_id}=useParams();
    //유저아이디
    const subsr= localStorage.getItem('subsr');

    //VOD 데이터
    const [vodData, setVodData] = useState({});

    //rating 데이터
    const [ratingData, setRatingData] = useState([]);

    //찜하기
    //const [count,setCount]=useState(0);
    const [wish, setWish] = useState();
    //const [wishClick,setWishClick]=useState(0);

    // VOD GET 요청
    useEffect(()=> {
      const getvoddata = async() => {
        try {
          const response = await getVodData(content_id);
          setVodData(response.data);
          console.log(response)
        }catch (error){
          console.log(error);
        }
      };
      getvoddata();
    },[]);

    
    //wish get요청
    useEffect(() => {
      const getWishData = async () => {
        try {
          const response = await getwishdata(content_id);
          if (response.data.length > 0) {
            setWish(response.data[response.data.length-1]?.wish);
            console.log(response)
          } 
        } catch (error) {   
          console.log("error", error);
        }
      };
      getWishData();
    }, []);
    
    // //Wish POST 요청
    // useEffect(() => {
    //   const postWish = async()=>{
    //     await postwish(subsr, content_id, wish);}
      
    // //   if (count===0) {
    // //       setCount(count+1)
    // // } else {
    // //   postWish();
    // // }
        
    //     postWish();
      
    // }, [wishClick]);     //subsr, content_id, wish]);

    const postWish = async()=>{
          await postwish(subsr, content_id, Number(!wish));}

    //wish 변경 
    const handleWishButton = async() => {
      if (!wish) {
        setWish(1);
      } else {
        setWish(0);
      }
    };

    //rating get요청
    useEffect(() => {
      const getRatingData = async () => {
        try {
          const response = await getratingdata(content_id);
          if (response.data.length > 0) {
            setRatingData(response.data);
            console.log(response)
          } 
        } catch (error) {   
          console.log("error", error);
        }
      };
      getRatingData();
    }, []);

    return (
    <div>
        <h2>{vodData[0]?.title}</h2>
        <img src={vodData[0]?.posterurl} alt="" />
        <p>{vodData[0]?.release_year}·{vodData[0]?.category}·{vodData[0]?.genre}·{vodData[0]?.country}</p>
        <p>{vodData[0]?.disp_rtm}·{vodData[0]?.grade}</p>
        <div>감독 : {vodData[0]?.director}</div>
        <div>출연진 : {vodData[0]?.actors}</div>
        <div>줄거리 : {vodData[0]?.description}</div>
        
        
        <ReviewModal />
            <Button
                onClick={()=>{
                  handleWishButton();
                  postWish();}}>
                {wish? <HeartFilled style={{color:"red", fontSize: '30px'}}/>:<HeartOutlined style={{fontSize: '30px'}}/>}
            </Button>
        <div>
          <h2>나의 리뷰</h2>
            {
              (ratingData&&ratingData.filter((ratingData)=>ratingData.subsr === subsr).map((item, index)=>(
                <li key={index}>
                  {item.subsr}
                  <Rating
                    fillColor="#A50034"
                    size="15"
                    initialValue={item.rating}
                    readonly="true"
                  />
                  {item.rating_date}
                  <br />
                  {item.review}
                  <DelConfirmAlert />
                  <hr />
                </li>
              )))
            }
            
        </div>
        <br />
        <div>
          <h2>모든 리뷰</h2>
            {
              (ratingData&&ratingData.filter((ratingData)=>ratingData.subsr !== subsr).map((item, index)=>(
                <li key={index}>
                  {item.subsr}
                  <Rating
                    fillColor="#A50034"
                    size="15"
                    initialValue={item.rating}
                    readonly="true"
                  />
                  {item.rating_date}
                  <br />
                  {item.review}
                  <hr />
                </li>
              )))
            }

        </div>

    </div>
    )
}
  

const Button = styled.button`
    border: 0;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    &:hover{
      transform: scale(1.1);
    }
}
`;