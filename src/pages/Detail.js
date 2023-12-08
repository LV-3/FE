import React, {useState, useEffect} from 'react'
import '../css/Detail.css';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';	
import ReviewModal from '../components/ReviewModal';

//상세페이지 동적 url 라우팅 위한 useParams 
import { useParams } from 'react-router-dom';

import { postwish } from '../apis/detail/postdetailwish';
import { Rating } from 'react-simple-star-rating'
import { getVodData} from '../apis/detail/getVodData';
import { getwishdata } from '../apis/detail/getmywish_post';
import { getratingdata } from '../apis/detail/getdetailrating';
//import DelConfirmAlert from '../components/__DelConfirmAlert';
import { delReview } from '../apis/detail/deldetailrating';
import {PageTitle, ImgLabel, Poster} from '../css/StyledComponents';



export default function Detail() {
    
    //url 파라미터("localhost:3000/detail/" 뒤에 붙는 상세 페이지 파라미터)를 content_id 변수로 저장
    let {content_id}=useParams();
    //유저아이디
    const subsr= localStorage.getItem('subsr');

    //VOD 데이터
    const [vodData, setVodData] = useState({});

    //my rating 데이터
    const [ratingData, setRatingData] = useState();

    //all rating 데이터
    const [allRatingData, setAllRatingData] = useState();


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
          if (response.data) {
            setWish(response.data);
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

    const deleletereview=async()=>{
      await delReview(subsr,content_id);
      window.location.reload(true);
    }

    //rating get요청
    useEffect(() => {
      const getRatingData = async () => {
        try {
          const response = await getratingdata(content_id);
          console.log("ratingData",response)
          console.log("ratingData",ratingData)
          const found = response.data.filter((item) => item.subsr === subsr);
          const allfound = response.data.filter((item) => item.subsr !== subsr);

          if (found.length > 0) {
            setRatingData(found);
          } 
          if (allfound.length > 0) {
            setAllRatingData(allfound);
          } 
        } catch (error) {   
          console.log("error", error);
        }
      };
      getRatingData();
    }, []);

    return (
    <div className='Detaildivbg'>
        <div className="VodDataContainer">
          <ImgLabel>
            <Poster src={vodData?.posterurl} alt={vodData?.title}/>
          </ImgLabel>
          <div className='VodData'>
            <div className="TitleContainer">
              <h1 className="VodTitle">{vodData?.title}</h1>
                 <button className='WishButton'
                  onClick={()=>{
                    handleWishButton();
                    postWish();}}>
                  {wish? <HeartFilled style={{color:"red", fontSize: '35px', height:'60%'}}/>:<HeartOutlined style={{fontSize: '35px', height:'60%'}}/>}
              </button><br/>
            </div>
            <div className='Vodtextbox'>
            <p className='VodInfo1'><b>카테고리</b>&nbsp;&nbsp;{vodData.release_year?.release_year}{vodData?.category}·{vodData?.genre}·{vodData?.country}</p>
            <p><b>재생시간</b> &nbsp;&nbsp;{vodData?.disp_rtm}</p>
            {/* <div><b>감독</b> &nbsp;&nbsp;{vodData?.director}</div> */}
            <div><b>출연진</b> &nbsp;&nbsp;{vodData?.actors}</div>
            <div><b>줄거리</b> &nbsp;&nbsp;<div className='Vodsumrybox'>{vodData?.description}</div></div>
            </div>
            
          </div>
        </div>
        
       {ratingData?<div>
          <PageTitle>나의 리뷰</PageTitle>
            {
              (ratingData&&ratingData.filter((ratingData)=>ratingData.subsr === subsr).map((item, index)=>(
                <div key={index} className="ReviewBox">
                  {/* {item.subsr} */}
                  <Rating
                    fillColor="#A50034"
                    size="15"
                    initialValue={item.rating} 
                    readonly="true"
                  />&emsp;
                  {item.rating_date}
                  &emsp;<ReviewModal /><button className='ReviewButton' onClick={deleletereview}>리뷰 삭제</button>
                  {/* <DelConfirmAlert/>*/}
                  
                  <br />
                  {item.review}
                  
                </div>
              )))
            }
          </div>:<><PageTitle>나의 리뷰</PageTitle><text className="ReviewBox">리뷰가 없습니다.</text><text className="firstReviewButton"><ReviewModal /></text></>}
          <><br/><br/></>
        {allRatingData?<div>
          <PageTitle>모든 리뷰</PageTitle>
            {
              (allRatingData&&allRatingData.filter((allRatingData)=>allRatingData.subsr !== subsr).map((item, index)=>(
                <div key={index} className="ReviewBox">
                  ID: {item.subsr}&emsp;
                  <Rating
                    fillColor="#A50034"
                    size="15"
                    initialValue={item.rating}
                    readonly="true"
                  />&emsp;
                  {item.rating_date}<br />
                  {item.review}
                </div>
              )))
            }

        </div>:<><PageTitle>모든 리뷰</PageTitle><text className="ReviewBox">다른 이용자의 리뷰가 없습니다.</text></>}

    </div>
    )
}
  