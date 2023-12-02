import React from "react";
import styled from "styled-components";
import blogImage1 from "../images/blogImage1.png";
import blogImage2 from "../images/blogImage2.png";
import blogImage3 from "../images/blogImage3.png";
import blogImage4 from "../images/blogImage4.png";

const BlogContainer = styled.div`
  background-color: black;
  padding: 40px 20px;
  text-align: center;
`;

const BlogSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  p {
    color: #BFBFBF;
  }
`;

const BlogHeader = styled.h2`
  color: white;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const BlogFrames = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const BlogFrame = styled.div`
  width: 48%;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 23%;
  }
`;

const FrameImage = styled.img`
  width: 100%;
`;

const FrameTitle = styled.h3`
  color: white;
  text-transform: uppercase;
  font-size: 18px;
  text-align: left;
`;

const FrameDescription = styled.p`
  margin-bottom: 10px;
  text-align: left;
`;

const ReadMoreLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

const ArrowIcon = styled.span`
  color: white;
  margin-left: 5px;
`;

const Blog = () => {
  return (
    <BlogContainer>
      <BlogSection>
        <BlogHeader>Our Blog</BlogHeader>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <BlogFrames>
          <BlogFrame>
            <FrameImage src={blogImage1} alt="Blog Image 1" />
            <FrameTitle>How to Reach the Top and Stay There</FrameTitle>
            <FrameDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </FrameDescription>
            <ReadMoreLink href="#">
              Read more <ArrowIcon>→</ArrowIcon>
            </ReadMoreLink>
          </BlogFrame>

          <BlogFrame>
            <FrameImage src={blogImage2} alt="Blog Image 2" />
            <FrameTitle>How to Reach the Top and Stay There</FrameTitle>
            <FrameDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </FrameDescription>
            <ReadMoreLink href="#">
              Read more <ArrowIcon>→</ArrowIcon>
            </ReadMoreLink>
          </BlogFrame>

          <BlogFrame>
            <FrameImage src={blogImage3} alt="Blog Image 3" />
            <FrameTitle>How to Reach the Top and Stay There</FrameTitle>
            <FrameDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </FrameDescription>
            <ReadMoreLink href="#">
              Read more <ArrowIcon>→</ArrowIcon>
            </ReadMoreLink>
          </BlogFrame>

          <BlogFrame>
            <FrameImage src={blogImage4} alt="Blog Image 4" />
            <FrameTitle>How to Reach the Top and Stay There</FrameTitle>
            <FrameDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </FrameDescription>
            <ReadMoreLink href="#">
              Read more <ArrowIcon>→</ArrowIcon>
            </ReadMoreLink>
          </BlogFrame>
        </BlogFrames>
      </BlogSection>
    </BlogContainer>
  );
};

export default Blog;
