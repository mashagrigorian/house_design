import React from "react";
import styled from "styled-components";
import portfolio from "../images/portfolio.png";

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background-color: black;
`;

const PortfolioItem = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin-bottom: 20px;
  text-align: center;
`;

const PortfolioText = styled.p`
  flex: 1;
  text-align: left;
  padding: 20px;
  color: white;
  max-width: 600px;
  text-align: left;
  margin-left: 95px;
  color: white;
`;

const ViewMoreButton = styled.button`
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 10px;
  cursor: pointer;
  display: flex;
  margin-left: auto;
  border-radius: 5px;
  margin-right: 95px;
`;

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer>
        <PortfolioText>
          <h2 style={{ textTransform: "uppercase" }}>Our Portfolio</h2>

          <h2 style={{ textTransform: "uppercase" }}>
            Our Portfolio
            <ViewMoreButton>View more</ViewMoreButton>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </PortfolioText>
        <PortfolioItem>
          <img src={portfolio} alt="portfolio" />
        </PortfolioItem>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
