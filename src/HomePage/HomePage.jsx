import React from "react";
import styled from "styled-components";
import homepage from "../images/homepage.png";
import wideBanner from "../images/wide_banner.png";
import sideBanner from "../images/side_banner.png";

const SearchContainer = styled.div`
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

const WideBanner = styled.div`
  ${
    "" /* flex: 1;
  background-color: #bbb;
  padding: 20px; */
  }
`;

const PageContainer = styled.div`
  background-color: black;
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
    }
  }
`;

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

export default HomePageSection;
