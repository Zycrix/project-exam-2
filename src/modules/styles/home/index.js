import styled from "styled-components";
import * as common from "../common";

export const VenueSearchContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  form {
    width: 80%;
    margin: 0 auto;
    padding: 0.2rem;
    input {
      border-radius: 2rem;
      box-sizing: border-box;
      width: 100%;
      padding: 0.5rem 0.5rem;
      margin: 0.3rem 0;
      border: 1px solid black;
      ::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
`;
