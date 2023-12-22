/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { getSearch } from "../apis/search/getsearch";
import {
  ImgLabel,
  SearchTitle,
  Poster,
  BackButtonContainer,
  BackButton,
  BackImg,
} from "../css/StyledComponents";
import "../css/Search.css";
import back from "../assets/back.png";
import altImg from "../assets/altImg.png";

export default function Search() {
  const location = useLocation();

  const input = new URLSearchParams(location.search).get("input");

  const [search, setSearch] = useState();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLoading(true);
      const search = async () => {
        const result = await getSearch(input);
        setSearch(result.data);
        setLoading(false);
      };
      search();
    } catch (error) {
      console.log("getSearch error: ", error);

      if (Object.keys(error).includes("response")) {
        setSearch(-1);
      } else {
        navigate("/noResponse");
      }
    }
  }, [input]);

  return (
    <div className="SearchBackground">
      <div className="SearchPageContainer">
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
        <div className='SearchTitle'>
          <SearchTitle>"{input}"의 검색 결과</SearchTitle>
        </div>
        {loading ? (
          <text className="GenreText">로딩중입니다.</text>
        ) : (
          <div className='SearchOuterContainer'>
            {search && search.length !== 0 ? (
              search === -1 ? (
                <text className="SearchText">
                  VOD 목록을 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.
                </text>
              ) : (
                <div className="SearchVodContainer">
                  {search &&
                    search.map((image, index) => (
                      <ImgLabel key={index} className="SearchLabel">
                        <div className="SearchVodbox">
                          <NavLink
                            to={"/detail/" + image.content_id}
                            className="SearchLink"
                          >
                            <Poster
                              src={image.posterurl ? image.posterurl : altImg}
                              alt={image.title}
                            />
                            <div className="SearchVodTitle">{image.title}</div>
                          </NavLink>
                        </div>
                      </ImgLabel>
                    ))}
                </div>
              )
            ) : (
              <text className="SearchText">검색 결과가 없습니다. </text>
            )}
            :
          </div>
        )}
      </div>
    </div>
  );
}
