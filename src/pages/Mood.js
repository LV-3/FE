import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { moodList } from '../apis/main/getmood';
import { NavLink, useNavigate } from 'react-router-dom';
import { ImgLabel, PageTitle, Poster } from '../css/StyledComponents';
import '../css/Mood.css';

export default function Moodpage() {
    
    //url 파라미터("localhost:3000/mood/" 뒤에 붙는 파라미터)를 mood 변수로 저장
    let {mood}=useParams();

    const [moodVods,setMoodVods]=useState();
    console.log('moodVods', moodVods)
    const navigate = useNavigate();

    //각 mood 별 검색 목록 불러오기
    useEffect(() => {
        const getMoodList = async () => {
            try {
                const result = await moodList(mood);
                console.log(result);
                setMoodVods(result.data);
            } catch (error) {
                console.log('gettagsError : ', error);
                navigate("/noResponse");
                window.location.reload();
            }
        };
        getMoodList();
    }, []);


    return (
        <div className='MoodBackground'>
            <PageTitle>#{mood} 느낌의 VOD</PageTitle>
            <div className='MoodVodContainer'>
            {moodVods&&moodVods.map((image, index) => (
                <ImgLabel key={index} className='MoodLabel'>
                    <NavLink to={"/detail/"+image.content_id}>
                        <Poster src={image.posterurl} alt={image.title}/>
                    </NavLink>
                </ImgLabel>))}
            </div>
        </div> 
    );

}