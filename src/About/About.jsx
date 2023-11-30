import React from "react";
import styled from "styled-components";
import about from "../images/about.png";
<<<<<<< HEAD
=======
import backgroundImage from "../images/background_image.png"
>>>>>>> 619310f (header,homepage updates)

const AboutContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  padding: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
=======
`;

const TextContainer = styled.div`
  flex: 3;
>>>>>>> 619310f (header,homepage updates)
  color: white;
  max-width: 600px;
`;

const PhotoContainer = styled.div`
<<<<<<< HEAD
  flex: 1;
  text-align: center;
  position: relative;
=======
  flex: 3;
  text-align: center;
  max-width: 700px;
>>>>>>> 619310f (header,homepage updates)
`;

const ReadMoreButton = styled.button`
  background-color: rgba(175, 75, 133, 1);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

<<<<<<< HEAD
=======
const BackgroundContainer = styled.div`
  //position: relative;
  
`;


>>>>>>> 619310f (header,homepage updates)
const About = () => {
  return (
    <AboutContainer>
      <TextContainer>
<<<<<<< HEAD
        <h2 style={{ textTransform: "uppercase" }}>About out company</h2>
=======
        <h2 style={{ textTransform: "uppercase", marginBottom: "20px" }}>
          About out company
        </h2>
>>>>>>> 619310f (header,homepage updates)
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <ReadMoreButton>Read more</ReadMoreButton>
      </TextContainer>
      <PhotoContainer>
        <img src={about} alt="about" />
      </PhotoContainer>
<<<<<<< HEAD
=======
      {/*<BackgroundContainer>*/}
      {/*  <img src={backgroundImage} alt="background_image"/>*/}
      {/*</BackgroundContainer>*/}
>>>>>>> 619310f (header,homepage updates)
    </AboutContainer>
  );
};

export default About;
