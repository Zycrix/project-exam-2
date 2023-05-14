import styled from "styled-components";
import * as common from "../common";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  font-family: ${common.fonts.text};
`;
export const Label = styled.label``;
export const TextArea = styled.textarea`
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid black;
  font-family: ${common.fonts.text};
`;
export const DropdownContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  background-color: white;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0 0 1rem 1rem;
`;
export const DropdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 0.5rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: ${(props) => (props.open ? "1rem 1rem 0 0" : "1rem")};
  box-sizing: border-box;
`;
export const Margin = styled.div`
  margin: 1rem 0;
`;
export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .image-gallery {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .image-container {
      width: 30% !important;
      margin: 0.5rem 0.2rem;
      position: relative;
      .image-overlay {
        position: absolute;
        color: black;
        display: flex;
        background-color: red;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        height: auto;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        top: 5px;
        right: 5px;
        p {
          padding: 0;
          margin: 0;
        }
      }
    }
    img {
      width: 100% !important;
      object-fit: cover;
      height: 20vh !important;
    }
  }
`;
