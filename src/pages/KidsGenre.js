/* eslint-disable */
import React, { useEffect, useState } from "react";
import "../css/Genre.css";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { kidGenreList } from "../apis/genres/getKidGenreList";
import {
  ImgLabel,
  SearchTitle,
  Poster,
  BackButtonContainer,
  BackButton,
  BackImg,
} from "../css/StyledComponents";

import back from "../assets/back.png";
import altImg from "../assets/altImg.png";

export default function Mood() {
  //url 파라미터("localhost:3000/vods/" 뒤에 붙는 파라미터)를 mood 변수로 저장
  let { genre3 } = useParams();

  const [genreVods, setGenreVods] = useState();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  //각 genre 별 검색 목록 불러오기
  useEffect(() => {
    try {
      setLoading(true);
      const getgenreList = async () => {
        const result = await kidGenreList(genre3);
        setGenreVods(result.data);
        setLoading(false);
      };
      getgenreList();
    } catch (error) {
      console.log("getKidGenreList error: ", error);

      if (Object.keys(error).includes("response")) {
        setGenreVods(-1);
      } else {
        navigate("/noResponse");
      }
    }
  }, [genre3]);

  return (
    <div className="GenreBackground">
      <div className="SearchCategoryContainer">
        <BackButtonContainer>
          <BackButton>
            <BackImg
              src={back}
              onClick={() => {
                navigate(-1);
              }}
            />
          </BackButton>
        </BackButtonContainer>
        <div className="GenreTitleContainer">
          <SearchTitle>키즈/기타 &gt; {genre3.replace(":", "/")}</SearchTitle>
        </div>
        {loading ? (
          <p className="GenreText">
            VOD 목록을 불러오는 중입니다. 잠시만 기다려 주세요.
          </p>
        ) : (
          <div className="VodOuterContainer">
            {genreVods && genreVods.length !== 0 ? (
              genreVods === -1 ? (
                <p className="GenreText">
                  VOD 목록을 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.
                </p>
              ) : (
                <div className="GenreVodContainer">
                  {genreVods.map((image, index) => (
                    <ImgLabel key={index} className="GenreLabel">
                      <div className="GenreVodBox">
                        <NavLink
                          to={"/detail/" + image.content_id}
                          className="GenreLink"
                        >
                          <Poster
                            src={image.posterurl ? image.posterurl : altImg}
                            alt={image.title}
                            referrerPolicy="no-referrer"
                          />
                          <div className="GenreVodTitle">{image.title}</div>
                        </NavLink>
                      </div>
                    </ImgLabel>
                  ))}
                </div>
              )
            ) : (
              <p className="NoGenreText">VOD 목록이 없습니다.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
