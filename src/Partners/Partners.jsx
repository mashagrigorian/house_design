import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import partnerLogo from "../images/partner_logo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersSection = styled.div`
  text-align: center;
  padding: 20px;
<<<<<<< HEAD
  background-color: black;
=======
  background-color: #0F0F0F;
>>>>>>> 619310f (header,homepage updates)
  color: white;
`;

const PartnersTitle = styled.h2`
  color: white;
  text-transform: uppercase;
`;

const SliderContainer = styled(Slider)`
  margin-top: 20px;
`;

const PartnerItem = styled.div`
<<<<<<< HEAD
  outline: none; /* Remove focus border */
=======
  outline: none; 
>>>>>>> 619310f (header,homepage updates)
`;

const PartnerLogo = styled.img`
  max-width: 100%;
<<<<<<< HEAD
  max-height: 100px; /* Set maximum height for consistency */
=======
  max-height: 100px; 
>>>>>>> 619310f (header,homepage updates)
  margin: 0 auto;
`;

const Partners = () => {
  const partnersData = [
    { name: "Lorem Ipsum", logo: "partner1-logo.png" },
    { name: "Lorem Ipsum", logo: "partner2-logo.png" },
    { name: "Lorem Ipsum", logo: "partner3-logo.png" },
    { name: "Lorem Ipsum", logo: "partner3-logo.png" },
    { name: "Lorem Ipsum", logo: "partner3-logo.png" },
    { name: "Lorem Ipsum", logo: "partner3-logo.png" },
    // Add more partners as needed
  ];

  const settings = {
    infinite: true,
<<<<<<< HEAD
    slidesToShow: 3,
=======
    slidesToShow: 5,
>>>>>>> 619310f (header,homepage updates)
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <PartnersSection>
      <PartnersTitle>Our Partners</PartnersTitle>

      <SliderContainer {...settings}>
        {partnersData.map((partner, index) => (
          <PartnerItem key={index}>
            <PartnerLogo src={partnerLogo} alt="partner_logo" />
            <p>Lorem Ipsum</p>
          </PartnerItem>
        ))}
      </SliderContainer>
    </PartnersSection>
  );
};

export default Partners;
