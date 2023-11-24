import React from 'react'
import { styled } from 'styled-components';
import {Wrapper, Title, Form, Inputs, Input} from "../components/Common";
//import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../apis/login/getlogin_post';


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
       await login(subsr)
        .then((Response)=>{
            if (Response.data.length>0 && Response.data[0].subsr=== subsr ){
                localStorage.setItem('subsr', Response.data[0].subsr);
                navigate("/main");
            }else{
                alert('셋탑박스 회원 정보가 틀렸습니다.\n정보 확인을 부탁드립니다.');
            }});
    };

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
    <Wrapper>
        <Title>로그인하기</Title>
        <Form>
            <Inputs>
                <Input placeholder="셋탑박스" value={subsr} onChange={onChangeId}
                onKeyDown={keyPress} />
                {/*<Input placeholder="비밀번호" type="password" value={password} onChange={onChangePw}/>*/}
            </Inputs>
            <Button onClick={onClick} disabled={button}>Login</Button>
        </Form>
        {/* 주석 처리 <CustomLink to='/signup'>회원가입하기</CustomLink> */}
    </Wrapper>
  )
}

export default Login;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 10px;
    &:disabled {
        background-color: rgba(0, 0, 0, 0.25);
      }
}
`;

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