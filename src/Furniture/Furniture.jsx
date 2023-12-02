import React from "react";
import styled from "styled-components";
import furniture1 from "../images/furniture1.png";
import furniture2 from "../images/furniture2.png";
import furniture3 from "../images/furniture3.png";
import furniture4 from "../images/furniture4.png";

const BurningSuggestionsSection = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #0F0F0F;
`;

const SuggestionsTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  text-align: left;
`;

const FramesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Frame = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const FrameImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const BlackOverlay = styled.div`
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
`;

const FrameText = styled.p`
  margin-top: 10px;
  color: white;
`;

const FramePrice = styled.p`
  margin-top: 5px;
  font-weight: bold;
  color: #ff69b4;
`;

const Furniture = () => {
    const suggestionsData = [
        { image: furniture1, text: "Bronze faucet", price: "$99.00" },
        { image: furniture2, text: "Bronze faucet", price: "$99.00" },
        { image: furniture3, text: "Bronze faucet", price: "$99.00" },
        { image: furniture4, text: "Bronze faucet", price: "$99.00" }
    ]

    return (
        <BurningSuggestionsSection>
            <SuggestionsTitle>Furniture</SuggestionsTitle>
            <p style={{color: "white", textAlign: "left"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

            <FramesContainer>
                {suggestionsData.map((suggestion, index) => (
                    <Frame key={index}>
                        <FrameImage src={suggestion.image} alt={suggestion.text}/>
                        <BlackOverlay>
                            <FrameText>{suggestion.text}</FrameText>
                            <FramePrice>{suggestion.price}</FramePrice>
                        </BlackOverlay>
                    </Frame>
                ))}
            </FramesContainer>
        </BurningSuggestionsSection>
    )
};

export default Furniture;