import React from 'react'
import {Wrapper, Title, Form, Inputs} from "../css/StyledComponents";
//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { login } from '../apis/login/getlogin_post';
//import background from "../assets/background.png"
import logo2 from "../assets/logo2.png"
import playgif from "../assets/video_play-icon.gif"

// 로그인 화면

const Login = () => {
    //회원 정보 입력
    const [subsr, setId] = useState("");
    //const [password, setPw] = useState("");
    
    const [button, setButton] = useState(true);


    function changeButton(subsr) {
        subsr.length > 7 ? setButton(false) :setButton(true);
    }

    const navigate = useNavigate();
    
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    // const onChangePw = (e) => {
    //     setPw(e.target.value);
    //     changeButton();
    // };
    useEffect(()=> {
        changeButton(subsr);
    }, [subsr])

    //토큰 없이 json-server 이용 로그인
    const onClick = async() => {
        //토큰 없이 json-server 이용 로그인
        try{
            const response = await login(subsr)
                if (response.data===Number(subsr)&&response.status===200){
                    
                    localStorage.setItem('subsr', response.data);
                    console.log("getlogin_post: ",response)
                    navigate("/main");

                }else{
                    console.log("getlogin_post: ",response)
                    alert('셋탑박스 회원 정보가 틀렸습니다.\n정보 확인을 부탁드립니다.');
                };
        }catch(error){
            //에러 코드 잡기
            console.log("getlogin_post error: ",error);

            //에러 처리
            if (Object.keys(error).includes("response")){
                if (error.response.request.status===401){
                    alert('셋탑박스 회원 정보가 틀렸습니다.\n정보 확인을 부탁드립니다.\n에러코드 :'+error.response.request.status);
                }
                else{
                    alert('예상치 못한 에러입니다!\n에러코드: '+error.response.request.status);
                }
            }else{
                navigate("/noResponse");
            }
        }}
            

    const keyPress=e=>{
        if (e.key==='Enter'){
            onClick();
        }
    }

    //login.js에서 post 요청한 데이터 가져오기
    //const onClick = async() => {
        //로그인 api
        //token X const result = await login(id, pw);
        //token X console.log(result); //localstorage에 token 잘 들어감
        //구조분해할당으로 data.data에서 accessToken, refreshToken을 꺼냄
        //token X const {accessToken, refreshToken} = result;
        //localstorage에 저장 setItem(key, value)
        //token X localStorage.setItem('access', accessToken);
        //token X localStorage.setItem('refresh', refreshToken);
        //localStorage.setItem('id', id);
        //마이페이지로 이동
        //navigate("/mypage")
    //};


  return (
    <div className = 'LoginBackground' >
        <img src={logo2} className='LoginLogo' alt='logo2'></img>
     {/* <div className = 'LoginBackground' style={{background:`url(${background})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
        */}
        <Wrapper>
            <Form>
                <Inputs>
                    <Title>GPT에게 VOD 추천받으러 가기</Title>
                    {/* <div className='arrow'></div> */}
                  <img className='playgif'src={playgif} alt='playgif'></img>
                    <input className="LoginInput" placeholder="       셋탑박스 번호 입력" value={subsr} onChange={onChangeId}
                    onKeyDown={keyPress} />
                    {/*<Input placeholder="비밀번호" type="password" value={password} onChange={onChangePw}/>*/}
                    <button className="LoginButton" onClick={onClick} disabled={button}><strong>셋탑박스 인증</strong></button>
                </Inputs>
            </Form>
            {/* 주석 처리 <CustomLink to='/signup'>회원가입하기</CustomLink> */}
        </Wrapper>
    </div>
  )
}


export default Login;



//링크 css 수정
// const CustomLink = styled(Link)`
//     margin-top: 20px;
//     color: black;
//     text-decoration: none;
//     &:visitied {
//         color: black;
//         text-decoration: none;
//     }
// `;