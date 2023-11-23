import React, {useState, useEffect} from 'react'
import Modal from 'react-modal';
import { Rating } from 'react-simple-star-rating'

import { useParams } from 'react-router-dom';
import moment from "moment/moment";

import { postrating } from '../apis/postdetailrating';
import { getratingdata } from '../apis/getdetailrating';
import { putrating } from '../apis/putdetailrating';

export default function ReviewModal() {
    let {content_id}=useParams();
    const subsr= localStorage.getItem('subsr');

    //review get 요청 useState
    const [review, setReview] = useState();
    //rating get 요청 useState
    const [rating, setRating] = useState();
    const [isRated, setIsRated] = useState(false);
    //rating_date 설정 useState
    const [ratingDate, setRatingDate] = useState();
  
    const rating_date = moment(ratingDate).format('yyyy-MM-DD HH:mm');

    const [modalIsOpen, setIsOpen] = useState(false);

    //rating get요청
    useEffect(() => {
      const checkRatings = async () => {
        try {
          const response = await getratingdata(content_id);
          const found = response.data.filter((item) => item.subsr === subsr);
          if (found.length > 0) {
            setRating(found[found.length-1].rating);
            setReview(found[found.length-1].review);
            setRatingDate(found[found.length-1].ratingDate);
            setIsRated(true);
          } else{
            setRating(0);
            setReview();
            setIsRated(false);
          }
        } catch (error) {
          console.log(error);
        }
      };
      checkRatings();
    }, [subsr, content_id, modalIsOpen]);

  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setRating(0);
  }

  const handleChange = ((e)=> {
    setReview(e.target.value);
  })

    const rate = (rating)=>{
        setRating(rating);
        setRatingDate(new Date());
    }
    //POST Rating 
    // const handleRating = async() => {
    //   if(isRated){
    //     await putreview(content_id, subsr, rating, review, rating_date);
    //   }else{
    //     await postrating(content_id, subsr, rating, review, rating_date);
    //   }
    // };

    const clickSubmit = async(e) => {
      if(rating === 0){
        alert("평점을 메겨주세요");
        e.preventDefault();
      }else{
        if (isRated){
          await putrating(content_id, subsr, rating, review, rating_date);
        } else {
          await postrating(content_id, subsr, rating, review, rating_date);
        }
      }
    }


  return (
    <div>
      <button 
        onClick={openModal}>
          {isRated ? "리뷰수정":"리뷰작성"}
      </button>
      
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{content_id}</h2> */}
        <button onClick={closeModal}>×</button>
        <div>
        {<Rating
            fillColor="#A50034"
            size="35"
            initialValue={rating}
            onClick={rate}
            />}  
        </div>
        <form>
          <textarea
          maxLength={100}
          value={review}
          onChange={handleChange}
          placeholder='리뷰는 최대 100자까지 작성 가능합니다.'
          style={{width: '490px', height:'150px', border: '1px solid', tesxtAlign:'justify'}}
          />
          <button onClick={clickSubmit}>등록하기</button>
        </form>
      </Modal>
    </div>
  );
}

const customStyles = {
    content: {
      width: '500px',
      height: '500px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };