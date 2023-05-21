import styled, { keyframes } from "styled-components";
import * as common from "../common";

export const Header = styled.header`
  background-color: white;
  z-index: 100;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1500px) {
    width: 70%;
    margin: 0 auto;
  }
`;
export const Nav = styled.nav`
  display: flex;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  background-color: white;
  padding: 1rem 0.5rem;
  justify-content: space-between;
  position: relative;
  z-index: 100;
  a {
    color: black;
    text-decoration: none;
  }
`;
export const LogoContainer = styled.div`
  max-width: 40vw;
  display: flex;
  align-items: center;
  @media (min-width: 800px) {
    max-width: 30vw;
  }
  @media (min-width: 1100px) {
    max-width: 20vw;
  }
  @media (min-width: 1500px) {
    max-width: 15vw;
  }
`;
export const Logo = styled.img`
  max-width: 100%;
`;
export const IconContainer = styled.div`
  display: flex;
`;
export const Icon = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  span {
    font-size: 2rem;
  }
  * {
    color: black;
  }
  cursor: pointer;
`;

const fadeInAnimation = keyframes`
  0%{border-bottom: 2px solid rgba(255,255,255, 0);}
  25%{border-bottom: 2px solid rgba(255,255,255, 0.25);}
  50%{border-bottom: 2px solid rgba(255,255,255, 0.50);}
  75%{border-bottom: 2px solid rgba(255,255,255, 0.75);}
  100%{border-bottom: 2px solid rgba(255,255,255, 1);}
`;
const slideDownAnimation = keyframes`
  0%{transform: translateY(-200px); }
  25%{transform: translateY(-150px); }
  50%{transform: translateY(-100px); }
  75%{transform: translateY(-50px); }
  100%{transform: translateY(0px); }
`;

export const Dropdown = styled.div`
  position: absolute;
  background-color: ${common.colors.primary};
  color: white;
  width: 100%;
  display: ${(props) => (props.open ? "block" : "none")};
  animation: ${slideDownAnimation} 0.3s ease-in;
  animation-timing-function: linear;
  z-index: 99;
  font-family: ${common.fonts.text};
  ul {
    padding: 0;
    margin-left: 1rem;
  }
  li {
    list-style: none;
    padding: 0.25rem;
    font-size: 1.2rem;
  }
  a {
    color: black;
    text-decoration: none;
    :hover {
      border-bottom: 2px solid white;
      animation: ${fadeInAnimation} 0.3s ease-in;
    }
  }
  .active {
    border-bottom: 2px solid black;
    font-family: ${common.fonts.strong};
  }
  @media (min-width: 1500px) {
    padding-inline: 15%;
    ul {
      margin-inline: 0;
    }
  }
`;
export const Text = styled.p`
  font-size: 1.2rem;
  font-family: ${common.fonts.text};
`;
export const DesktopList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    padding: 0;
    margin: 0;
    li {
      display: inline-block;
      margin-inline: 1rem;
      font-size: 1.5rem;
      font-family: ${common.fonts.regular};
    }
  }
  .active {
    border-bottom: 2px solid black;
    font-family: ${common.fonts.strong};
  }
`;
export const IconDesktop = styled(IconContainer)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
