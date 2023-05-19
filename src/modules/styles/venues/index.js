import styled from "styled-components";

export const VenueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FilterContainer = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 90%;
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
`;
export const FilterDropdown = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
`;
