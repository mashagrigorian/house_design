<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import homepage from "../images/homepage.png";
import wideBanner from "../images/wide_banner.png";
import sideBanner from "../images/side_banner.png";
=======
import React, { useRef } from "react";
import styled from "styled-components";
import leftSide from "../images/left_side.png";
import wideBanner from "../images/wide_banner.png";
import sideBanner from "../images/side_banner.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../icons/left_arrow.png";
import rightArrow from "../icons/right_arrow.png";
>>>>>>> 619310f (header,homepage updates)

const SearchContainer = styled.div`
  display: flex;
  align-items: center;

<<<<<<< HEAD
  input {
    width: 80%;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #999;
  }

=======
>>>>>>> 619310f (header,homepage updates)
  button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const WideBanner = styled.div`
<<<<<<< HEAD
  ${
    "" /* flex: 1;
  background-color: #bbb;
  padding: 20px; */
  }
=======
  // Your styles for WideBanner
>>>>>>> 619310f (header,homepage updates)
`;

const PageContainer = styled.div`
  background-color: black;
<<<<<<< HEAD
  min-height: 100vh;
  padding: 20px;
`;


const HomePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;

  .main-banner {
    flex: 1;
    background-color: #ddd;
  }

  .side-banner {
    flex: 0 0 30%;
    background-color: #ccc;
    padding: 20px;
    margin-left: 20px;
  }

  .wide-banner {
    ${
      "" /* flex: 1;
    background-color: #bbb;
    padding: 5px; */
=======
  padding: 20px;
`;

const HomePageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;

  .side-banner {
    ${"" /* flex: 0 0 30%; */}
    padding: 20px;
    margin-left: 20px;
    position: relative;
    border-radius: 5px;

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

    ${SearchContainer} {
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
>>>>>>> 619310f (header,homepage updates)
    }
  }
`;

<<<<<<< HEAD
const HomePageSection = () => {
  return (
      <>
          <PageContainer>
              <HomePageContainer>
                  <img src={homepage} alt="homepage"></img>
                  <div className="side-banner">
                      <img src={sideBanner} alt="side_banner" />
                      <WideBanner>
                          <img src={wideBanner} alt="wide_banner" />
                      </WideBanner>
                  </div>
              </HomePageContainer>
          </PageContainer>
      </>
  );
};

// const HomePageSection = () => {
//   return (
//     <HomePageContainer>
//       <div className="main-banner">
//         <h2>House design & furnishing</h2>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry.
//         </p>
//       </div>

//       <div className="side-banner">
//         <h2>Go shopping</h2>
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry.
//         </p>

//         <WideBanner>
//           <h2>Search for any product</h2>
//           <SearchContainer>
//             <input type="text" placeholder="Search..." />
//             <button>Search</button>
//           </SearchContainer>
//         </WideBanner>
//       </div>
//     </HomePageContainer>
//   );
// };

=======
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
          <SearchContainer>
            <button>Apply</button>
          </SearchContainer>
        </div>
      </HomePageContainer>
    </PageContainer>
  );
};

>>>>>>> 619310f (header,homepage updates)
export default HomePageSection;
