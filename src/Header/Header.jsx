import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/fontawesome-free";


const PinkLine = styled.div`
  background-color: rgba(175, 75, 133, 1);
  height: 15px;
  padding: 20px 50px 20px 50px;
  justify-content: space-between;
`;
const HeaderContainer = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderButton = styled.div`
  background-color: white;
  color: #ff69b4;
  padding: 4px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoH1 = styled.h1`
  margin: 0;
`;

const NavMenu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 10px 20px;
    padding: 0;
  }

  li {
    margin-right: 20px;    
  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
  }

  a:hover {
    border-bottom: 2px solid white;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 18px;
    margin-right: 10px;
    color: white;
    cursor: pointer;
  }

  .vertical-line {
    height: 20px;
    width: 1px;
    background-color: white;
    margin: 0 10px;
    color: white;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 10px;
    color: white;
  }
`;
const Header = () => {
  return (
    <>
      <PinkLine>
        <SocialIcons>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <div className="vertical-line"></div>
          <ContactInfo>
            <FontAwesomeIcon icon="fa-solid fa-phone" />
            <p>000-00-00-00</p>
          </ContactInfo>
          <OrderButton>Order a call</OrderButton>
        </SocialIcons>
      </PinkLine>
      <HeaderContainer>
        <LogoContainer>
          <LogoH1>House Design</LogoH1>
        </LogoContainer>
        <NavMenu>
          <ul>
            <li>Custom furniture production</li>
            <li>Interior design</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Portfolio</li>
            <li>Contact us</li>
          </ul>
        </NavMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
