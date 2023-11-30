<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import instagram from "../icons/instagram.png";
import youtube from "../icons/youtube.png";
import facebook from "../icons/facebook.png";
import phone from "../icons/phone.png";
import line from "../icons/line.png";
import call from "../icons/call.png";
import vector from "../icons/vector.png";
import like from "../icons/like.png";
import bag from "../icons/bag.png";

const PinkLine = styled.div`
  background-color: rgba(175, 75, 133, 1);
  padding: 10px 70px;
  justify-content: space-between;
`;

const HeaderContainer = styled.header`
  background-color: black;
  color: white;
  padding: 10px 70px;
>>>>>>> 619310f (header,homepage updates)
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

<<<<<<< HEAD
const OrderButton = styled.div`
  background-color: white;
  color: #ff69b4;
  padding: 4px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
=======
const LanguageSelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LanguageButton = styled.button`
  background-color: Transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const ENText = styled.span`
  color: white;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 40px;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1;
`;

// const ShopDropdown = styled.div`
//   display: ${(props) => (props.isOpen ? "block" : "none")};
//   position: absolute;
//   background-color: white;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   border-radius: 5px;
//   z-index: 1;
// `;

const LanguageItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const OrderButton = styled.div`
  display: flex;
  background-color: white;
  color: rgba(175, 75, 133, 1);
  padding: 4px 5px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  gap: 12px;
  margin-left: auto;
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 12px;
>>>>>>> 619310f (header,homepage updates)
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

<<<<<<< HEAD
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
=======
const LogoH1 = styled.h1``;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const NavMenu = styled.ul`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 24px;
  }

  li {
    margin-right: 20px;
    color: #ffffff;
  }
`;

const RegisterButton = styled.button`
  background-color: #af4b85;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  border-radius: 12px;
  border: none;
  padding: 13px 32px;
  gap: 10px;
  font-weight: 600;
  line-height: 21.78px;
  font-size: 18px;
>>>>>>> 619310f (header,homepage updates)
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
<<<<<<< HEAD

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
=======
  gap: 8px;
  img {
    padding: 2px;
  }
`;

const LanguageIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5); /* Transparent white background */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 8px 16px;
  gap: 6px;
  font-family: Poppins;
>>>>>>> 619310f (header,homepage updates)
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 10px;
    color: white;
  }
`;
<<<<<<< HEAD
const Header = () => {
=======

const ShopButton = styled.div`
  cursor: pointer;
  position: relative;
`;

const ClickableArea = styled.div`
  display: flex;
  align-items: center;
`;

const ShopDropdown = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 50%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1;
  color: black;
`;

const ShopItem = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopOpen(!isShopOpen);
  };

>>>>>>> 619310f (header,homepage updates)
  return (
    <>
      <PinkLine>
        <SocialIcons>
<<<<<<< HEAD
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
=======
          <img src={instagram} alt="instagram" />
          <img src={youtube} alt="youtube" />
          <img src={facebook} alt="facebook" />
          <img src={line} alt="line" />
          <ContactInfo>
            <img src={phone} alt="phone" />
            <p>000-00-00-00</p>
          </ContactInfo>
          <OrderButton>
            <img src={call} alt="call" />
            Order a call
          </OrderButton>
          <LanguageSelector>
            <LanguageButton onClick={toggleDropdown}>
              <ClickableArea>
                <LanguageIcon>
                  <ENText>EN</ENText>
                  <img src={vector} alt="vector" />
                </LanguageIcon>
              </ClickableArea>
            </LanguageButton>
            <DropdownContent isOpen={isOpen}>
              <LanguageItem>English</LanguageItem>
              <LanguageItem>Français</LanguageItem>
              <LanguageItem>Español</LanguageItem>
            </DropdownContent>
          </LanguageSelector>
>>>>>>> 619310f (header,homepage updates)
        </SocialIcons>
      </PinkLine>
      <HeaderContainer>
        <LogoContainer>
<<<<<<< HEAD
          <LogoH1>House Design</LogoH1>
=======
          <LogoH1>
            <img src={logo} arc="logo" />
          </LogoH1>
>>>>>>> 619310f (header,homepage updates)
        </LogoContainer>
        <NavMenu>
          <ul>
            <li>Custom furniture production</li>
<<<<<<< HEAD
            <li>Interior design</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Portfolio</li>
            <li>Contact us</li>
=======
            <li>Interior Design</li>
            <li style={{ opacity: "70%" }}>
              <ShopButton onClick={toggleShopDropdown}>
                <ClickableArea>
                  Shop{" "}
                  <img
                    src={vector}
                    style={{ paddingLeft: "7px" }}
                    alt="vector"
                  />
                </ClickableArea>
                <ShopDropdown isOpen={isShopOpen} onClick={toggleShopDropdown}>
                  <ShopItem>1</ShopItem>
                  <ShopItem>2</ShopItem>
                </ShopDropdown>
              </ShopButton>
            </li>
            <li>Portfolio</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <IconsContainer>
              <img src={like} alt="like" />
              <img src={bag} alt="bag" />
            </IconsContainer>
            <li>Sign in</li>
            <RegisterButton>Register</RegisterButton>{" "}
>>>>>>> 619310f (header,homepage updates)
          </ul>
        </NavMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
