import styled from "styled-components";
import * as common from "../common";
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  position: relative;
  .img-container {
    width: 60%;
    overflow: hidden;
    margin: 1.5rem auto;
    position: relative;
    img {
      max-width: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
  }
  h1 {
    text-transform: capitalize;
  }
  p {
    margin: 0.5rem 0;
  }
`;
export const Overlay = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 109;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const OverlayContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  z-index: 110;
  position: absolute;
  width: 90%;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  max-height: 90vh;
  overflow-y: scroll;
  transform: translate(-50%, -50%);
  form {
    width: 100%;
    box-sizing: border-box;
  }
`;
export const PreviewContainer = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 1.5rem auto;
`;
export const ImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    max-width: 100%;
  }
`;
export const CloseContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const EditContainer = styled.div`
  display: ${(props) => (props.show ? "flex" : "none")};
  width: 2rem;
  aspect-ratio: 1/1 !important;
  background-color: ${common.colors.primary};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 20px;
`;
export const VenueSection = styled.section`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
`;
export const BookingSection = styled.section`
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
`;
export const VenueCard = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  margin: 1rem 0;
  min-height: 15vh;
  max-height: 20vh;
  position: relative;
  .venue-img-container {
    width: 80%;
    overflow: hidden;
    min-height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h3 {
    margin: 0.5rem;
  }
  p {
    margin: 0.5rem;
  }
  .info {
    padding: 0.5rem;
    width: 100%;
    .options {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: white;
      z-index: 99;
      .show {
        display: block;
      }
    }
  }
`;
export const BookingCard = styled(VenueCard)`
  p {
    font-size: 0.8rem !important;
    margin: 0 0.5rem;
  }
`;
export const OptionsOverlay = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  top: 25px;
  border: 1px solid lightgray;
  border-radius: 1rem 0 1rem 1rem;
  right: 0;
  background-color: ${common.colors.primary};
  padding: 0.5rem;
  width: 7rem;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
    }
  }
`;
