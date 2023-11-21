import React from "react";
import styled from "styled-components";

const PortfolioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
`;

const PortfolioItem = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin-bottom: 20px;
  text-align: center;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  color: white;
  max-width: 600px;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const PortfolioText = styled.p`
  margin-top: 10px;
  color: #333;
`;

const Portfolio = () => {
    return (
        <>
            <PortfolioContainer>
                <PortfolioItem>
                    <PortfolioImage></PortfolioImage>
                </PortfolioItem>
            </PortfolioContainer>

            <PortfolioContainer>
                <PortfolioItem>
                    <PortfolioImage></PortfolioImage>
                </PortfolioItem>
            </PortfolioContainer>

            <PortfolioContainer>
                <PortfolioItem>
                    <PortfolioImage></PortfolioImage>
                </PortfolioItem>
            </PortfolioContainer>
        </>
    )
}

export default Portfolio;