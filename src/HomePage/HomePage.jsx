import React, { useRef } from "react";
import styled from "styled-components";
import leftSide from "../images/left_side.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../icons/left_arrow.png";
import rightArrow from "../icons/right_arrow.png";
import rightBanner from "../images/rightBanner.png";
import line from "../images/line.png";
import search from "../icons/search.png";
import leftSideMobile from "../images/leftSideMobile.png";

const ApplyButton = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 80%;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #999;
  }

  button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const PageContainer = styled.div`
  background-color: black;

  min-height: 100vh;
  padding: 20px;
`;

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 20px;
    background-image: url(${require("../images/leftSideMobile.png")});
  }

  .side-banner {
    ${"" /* background-image: url(${require("../images/left_side.png")}); */}
    padding: 20px;
    margin-left: 20px;
    position: relative;
    border-radius: 5px;
    max-width: 100%;

    .slider-content {
      margin-bottom: 20px;
    }

    .arrows {
      position: absolute;
      top: 63%;
      left: 7.5%;
      font-family: Poppins;
      font-weight: 700;
    }

    h2 {
      position: absolute;
      top: 63%;
      left: 4%;
      transform: 70%;
      color: #ffffff;
      font-size: 54px;
      text-transform: uppercase;
      font-family: Poppins;
      font-weight: 700;
    }

    p {
      font-size: 18px;
      position: absolute;
      top: 77%;
      left: 4%;
      color: #ffffff;
      font-family: Poppins;
    }

    ${ApplyButton} {
      position: absolute;
      bottom: 20px;
      top: 77%;
      left: 4.2%;

      button {
        color: #af4b85;
        background-color: white;
        font-weight: 600;
        border-radius: 8px;
        padding: 12px 24px;
        gap: 10px;
      }
    }
  }
`;

const RightBannerContainer = styled.div`
  position: relative;

  @media (max-width: 768px) {
    flex: 0 0 100%;
  }

  img {
    border-radius: 24px;
  }

  .side-banner {
    margin-left: 20px;
    position: relative;
    padding: 20px 0px;

    h4 {
      position: absolute;
      top: 60%;
      left: 7%;
      transform: 70%;
      color: #ffffff;
      font-size: 36px;
      text-transform: uppercase;
      font-family: Poppins;
      font-weight: 700;
    }

    p {
      font-size: 14px;
      line-height: 21px;
      position: absolute;
      top: 75%;
      left: 7.5%;
      color: #ffffff;
      font-family: "Poppins";
      font-weight: 400;
      display: flex;
      align-items: center;

      .line {
        width: 80px;
        margin-left: 20px;
      }
    }
  }
`;

const Arrow = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  font-family: Poppins;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;

  &:first-child {
    left: 10px;
  }

  &:last-child {
    right: 0px;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  justify: space-between;
  align-items: center;
  background-color: #af4b85;
  padding: 17px 30px;
  border-radius: 8px;
  margin-left: 14px;

  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  input {
    width: 400px;
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #000000;
    background: #ffffff url(${require("../icons/search.png")}) no-repeat right;
    background-size: 20px;
    background-position: calc(100% - 10px) center;
  }

  p {
    font-size: 20px;
    color: #ffffff;
    font-family: "Poppins";
    font-weight: 500;
  }
`;

const HomePageSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef();

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <PageContainer>
      <HomePageContainer>
        <div className="side-banner">
          <div className="slider-container">
            <Slider {...sliderSettings}></Slider>
          </div>
          <img
            src={leftSide}
            alt="left_banner"
            style={{ borderRadius: "24px" }}
          />
          <div className="arrows">
            <Arrow onClick={prevSlide}>
              <img src={leftArrow} alt="left-arrow" />
            </Arrow>
            <Arrow onClick={nextSlide}>
              <img src={rightArrow} alt="right-arrow" />
            </Arrow>
          </div>
          <h2>House design & furnishing</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <ApplyButton>
            <button>Apply</button>
          </ApplyButton>
        </div>
        <RightBannerContainer>
          <div className="side-banner">
            <img src={rightBanner} alt="rightBanner" />
            <h4>Go Shopping</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <div className="line">
                <img src={line} alt="line" />
              </div>
            </p>
          </div>
          <SearchContainer>
            <p>Search for any product</p>
            <input type="text" placeholder="Search" />
          </SearchContainer>
        </RightBannerContainer>
      </HomePageContainer>
    </PageContainer>
  );
};

export default HomePageSection;
