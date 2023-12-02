import React from "react";
import styled from "styled-components";
import instagram from "../icons/instagram.png";
import youtube from "../icons/youtube.png";
import facebook from "../icons/facebook.png";
import twitter from "../icons/twitter.png";
import logo from "../images/logo.png";
import shopVector from "../icons/shop_vector.png";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 40px 20px;
`;

const FooterSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoSection = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

const SocialIconsSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    margin-right: 20px;
  }
`;

const ServicesSection = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h4`
  margin-bottom: 10px;
  text-transform: uppercase;
`;


const HelpfulLinksSection = styled.div`
  flex: 1;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;  
`;

const HelpfulLink = styled.div`
  flex-basis: 60%;
  display: flex;
  flex-direction: row;   
  justify-content: space-between;
  margin-bottom: 20px;
  color: #CCCCCC;

  p {
    margin: 5px 0;
  }
`;

const ContactSection = styled.div`
  flex: 1;
  margin-bottom: 20px;
`;

const SubscribeSection = styled.div`
  flex: 1;
`;

const PrivacyTermsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const RightsReserved = styled.div`
  margin-top: 20px;
`;

const SendButton = styled.button`
  background-color: rgba(175, 75, 133, 1);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <LogoSection>
          <img src={logo} alt="logo" />
          <SocialIconsSection>
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </SocialIconsSection>
        </LogoSection>
        <ServicesSection>
          <ServiceTitle>Services</ServiceTitle>
          <p>Custom Furniture Production</p>
          <p>Interior Design</p>
          <p>
            Shop
            <img
              style={{ paddingLeft: "10px" }}
              src={shopVector}
              alt="shopVector"
            />
          </p>
        </ServicesSection>
        <HelpfulLinksSection>
          <p style={{  textTransform: "uppercase", fontWeight: "bold" }}>Helpful Links</p>
          <HelpfulLink>
            <div>
              <p>About Us</p>
              <p>Portfolio</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p>Blog</p>
              <p>Corner</p>
              <p>FAQs</p>
            </div>
          </HelpfulLink>
        </HelpfulLinksSection>

        <ContactSection>
          <p style={{  textTransform: "uppercase", fontWeight: "bold" }}>Contact</p>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </ContactSection>

        <SubscribeSection>
          <p style={{  textTransform: "uppercase", fontWeight: "bold" }}>Subscribe to our newsletters</p>
          <input type="email" placeholder="E-mail address" />
          <SendButton>Send</SendButton>
        </SubscribeSection>
      </FooterSection>

      {/* Privacy and Terms Section */}
      <PrivacyTermsSection>
        <div>Privacy Policy | Terms of Service</div>
        {/* Rights Reserved Section */}
        <RightsReserved>©2023. All rights reserved</RightsReserved>
      </PrivacyTermsSection>
    </FooterContainer>
  );
};

export default Footer;
