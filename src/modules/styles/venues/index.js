import styled from "styled-components";
import * as common from "../common";

export const VenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 600px) {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
  @media (min-width: 1500px) {
    width: 80%;
  }
`;
export const FilterContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => (props.expanded ? "white" : "transparent")};
  padding: 0.5rem;
  box-sizing: border-box;
  .expand-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  p {
    font-size: 1rem;
  }
  @media (min-width: 1100px) {
    width: 75%;
  }
`;
export const FilterDropdown = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
`;
export const ScrollTopContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${common.colors.primary};
  aspect-ratio: 1/1;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
`;
