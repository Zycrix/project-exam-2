import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  .info {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  }
  hr {
    width: 80%;
    background-color: black;
    opacity: 1;
    border: none;
    height: 1px;
  }
`;
export const OwnerContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: 1.5rem auto;
  .owner-img-container {
    width: 40%;
    margin: 0 auto;
    img {
      max-width: 100%;
      object-fit: cover;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }
  }
  h3 {
    text-align: center;
  }
  button {
    width: 60%;
    margin: 0 auto;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  max-height: 60vh;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    aspect-ratio: 16/9;
  }
`;
export const BookContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const Description = styled.div`
  width: 80%;
  margin: 0 auto;
`;
export const DetailsContainer = styled.section`
  width: 80%;
  margin: 0.5rem auto 2rem;
`;
export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  div {
    border-bottom: 1px solid black;
    box-sizing: border-box;
    padding: 0.5rem 0;
  }
`;
export const BookingModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "block" : "none")};
`;
export const BookingModalContent = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const BookingForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  input {
    border-radius: 1rem;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid black;
  }
  button {
    margin-top: 1rem;
  }
`;
export const BookingModalClose = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const modalFade = keyframes`
  0% {opacity: 1;}
  25% {opacity: 0.75;}
  50% {opacity: 0.50;}
  75% {opacity: 0.25;}
  100% {opacity: 0;}
`;

export const SuccessModal = styled.div`
  position: fixed;
  display: ${(props) => (props.show ? "block" : "none")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  background-color: rgb(89, 255, 133);
  animation: ${modalFade} 2s;
  animation-timing-function: linear;
  span {
    font-size: 4rem;
  }
`;
