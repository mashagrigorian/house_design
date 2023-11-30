import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.div`
  background-color: black;
  padding: 40px 20px;
  text-align: center;
`;

const FAQSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  color: white;
`;

const Question = styled.div`
  background-color: #101010;
  padding: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.open ? "1px solid rgba(175, 75, 133, 0.5)" : "none"};
  border-radius: 10px;
  position: relative;
  color: white;
  text-align: left;
`;

const ArrowIcon = styled.span`
  padding: 10px 20px;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%)
    ${(props) => (props.open ? "rotate(180deg)" : "rotate(0deg)")};
  width: 10px;
  height: 24px;
  background-color: #212121;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 12px;
`;

const Answer = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: #101010;
  padding-top: 15px;
  border-radius: 10px;
  color: white;
  text-align: left;
`;

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQSection>
        <h2>FAQ</h2>
        <Question onClick={() => toggleQuestion(1)} open={openQuestion === 1}>
          Question 1 <ArrowIcon open={openQuestion === 1}>↓</ArrowIcon>
          <Answer open={openQuestion === 1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Answer>
        </Question>

        <Question onClick={() => toggleQuestion(2)} open={openQuestion === 2}>
          Question 2 <ArrowIcon open={openQuestion === 2}>↓</ArrowIcon>
          <Answer open={openQuestion === 2}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </Answer>
        </Question>

        <Question onClick={() => toggleQuestion(3)} open={openQuestion === 3}>
          Question 3<ArrowIcon open={openQuestion === 3}>↓</ArrowIcon>
          <Answer open={openQuestion === 3}>
            It is a long established fact that a reader will be distracted by
            the readable content.
          </Answer>
        </Question>

        <Question onClick={() => toggleQuestion(4)} open={openQuestion === 4}>
          {" "}
          Question 4 <ArrowIcon open={openQuestion === 4}>↓</ArrowIcon>
          <Answer open={openQuestion === 4}>
            There are many variations of passages of Lorem Ipsum available.
          </Answer>
        </Question>

        <Question onClick={() => toggleQuestion(5)} open={openQuestion === 5}>
          Question 5 <ArrowIcon open={openQuestion === 5}>↓</ArrowIcon>
          <Answer open={openQuestion === 5}>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature.
          </Answer>
        </Question>
      </FAQSection>
    </FAQContainer>
  );
};

export default FAQ;
