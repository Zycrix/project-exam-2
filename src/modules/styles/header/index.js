import styled, { keyframes } from "styled-components";
import * as common from "../common";

export const Header = styled.header`
  background-color: #282c34;
  z-index: 100;
  position: sticky;
`;
export const Nav = styled.nav`
  display: flex;
  background-color: white;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.15);
  padding: 1rem 0.5rem;
  justify-content: space-between;
  a {
    color: black;
    text-decoration: none;
  }
`;
export const LogoContainer = styled.div`
  max-width: 40vw;
  display: flex;
  align-items: center;
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
  z-index: 1;
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
`;
export const Text = styled.p`
  font-size: 1.2rem;
  font-family: ${common.fonts.text};
`;
