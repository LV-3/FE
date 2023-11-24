import React,{useEffect, useState} from 'react'

import { useParams } from 'react-router-dom';
import { moodList } from '../apis/main/getmood';
import { NavLink } from 'react-router-dom';

export default function Moodpage() {
    
    //url 파라미터("localhost:3000/mood/" 뒤에 붙는 파라미터)를 mood 변수로 저장
    let {mood}=useParams();

    const [moodVods,setMoodVods]=useState();

    //각 mood 별 검색 목록 불러오기
    useEffect(()=>{
    const getmoodList = async()=>{
            const result =await moodList(mood);
            console.log(result)
            setMoodVods(result.data)}
            getmoodList()
            
    },[]);


    return (
        <div>
        <h3>{mood} VOD 목록 </h3>
         {moodVods&&moodVods.map((image, index) => (
            <label key={index}>
              <NavLink to={"/detail/"+image.content_id}>
              <img src={image.posterurl} alt={image.alt}/>
              </NavLink></label>))}
              </div> 
    );

}