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
import hamburgerIcon from "../icons/hamburger.png";
import user from "../icons/user.png";

const PinkLine = styled.div`
  background-color: rgba(175, 75, 133, 1);
  padding: 10px 70px;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

const HeaderContainer = styled.header`
  background-color: black;
  color: white;
  padding: 10px 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 10px 20px;
  }
`;

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
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    align-item: left;
    width: 92px;
    height: 32px;
  }
`;

const LogoImageContainer = styled.img`
  @media (max-width: 768px) {
    width: 92px;
    height: 32px;
    padding: 5px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
  }
`;

const MobileIconsContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavMenu = styled.ul`
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 24px;

    @media (max-width: 768px) {
      list-style: none;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      color: #ffffff;
      display: ${(props) => (props.isOpen ? "flex" : "none")};
    }
  }

  li {
    margin-right: 20px;
    color: #ffffff;
  }
`;

const HamburgerIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: 24px;
  opacity: 80%;
  margin-bottom: 10px;

  @media (min-width: 769px) {
    cursor: pointer;
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: none;
  gap: 10px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    padding: 2px;
  }
`;

const LanguageIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 8px 16px;
  gap: 6px;
  font-family: Poppins;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0 10px;
    color: white;
  }
`;

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
  left: 0;
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
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopOpen(!isShopOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <PinkLine>
        <SocialIcons>
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
        </SocialIcons>
      </PinkLine>
      <HeaderContainer>
        <HamburgerIcon src={hamburgerIcon} alt="Menu" onClick={toggleMenu} />
        <LogoContainer>
          <LogoImageContainer src={logo} arc="logo" />
        </LogoContainer>
        <MobileIconsContainer>
          <img src={like} alt="like" />
          <img src={bag} alt="bag" />
          <img src={user} alt="user" />
        </MobileIconsContainer>
        <NavMenu isOpen={isMenuOpen}>
          <ul>
            <li>Custom furniture production</li>
            <li>Interior Design</li>
            <li style={{ opacity: "70%" }}>
              <ShopButton onClick={toggleShopDropdown}>
                <ClickableArea>
                  Shop
                  <img src={vector} alt="vector" style={{ padding: "5px" }} />
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
            <RegisterButton>Register</RegisterButton>
          </ul>
        </NavMenu>
      </HeaderContainer>
    </>
  );
};

export default Header;
