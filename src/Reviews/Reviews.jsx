import React from "react";
import styled from "styled-components";

const ReviewsSection = styled.div`
  text-align: center;
  padding: 20px;
  background-color: black;
  color: white;
`;

const ReviewTitle = styled.h2`
  color: white;
  text-transform: uppercase;
`;

const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const SingleReview = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ReviewName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StarRating = styled.div`
  color: #ffcc00; /* Gold color for stars */
  margin-bottom: 5px;
`;

const ReviewComment = styled.p`
  color: white;
`;

const Reviews = () => {
  return (
    <ReviewsSection>
      <ReviewTitle>Reviews</ReviewTitle>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>

      <ReviewContainer>
        <SingleReview>
          <ReviewName>John Doe</ReviewName>
          <StarRating>★★★</StarRating>
          <ReviewComment>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
          </ReviewComment>
        </SingleReview>

        <SingleReview>
          <ReviewName>Jane Smith</ReviewName>
          <StarRating>★★★</StarRating>
          <ReviewComment>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
          </ReviewComment>
        </SingleReview>

        <SingleReview>
          <ReviewName>Sam Johnson</ReviewName>
          <StarRating>★★★</StarRating>
          <ReviewComment>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
          </ReviewComment>
        </SingleReview>
      </ReviewContainer>
    </ReviewsSection>
  );
};

export default Reviews;
