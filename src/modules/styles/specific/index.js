import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  .info {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  max-height: 70vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
