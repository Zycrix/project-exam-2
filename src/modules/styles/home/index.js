import styled from "styled-components";
import * as common from "../common";

export const HomeContainer = styled.div`
  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }
`;
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
      margin: 0.3rem 0;
      /* border: 1px solid black; */
      padding: 0.5rem;
      box-shadow: 0 10px 10px 1px rgba(0, 0, 0, 0.3);
      border: 1px solid lightgray;
      ::placeholder {
        color: rgba(0, 0, 0, 0.4);
      }
    }
  }
  @media (min-width: 800px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    width: 60%;
  }
`;

export const TopRatedContainer = styled.section``;
export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: ${common.colors.primary};
  height: 50vh;
  display: flex;
  overflow: hidden;
  @media (min-width: 1200px) {
    background-color: unset;
    button.prev,
    button.next {
      background-color: ${common.colors.primary};
      opacity: 0.6;
      height: 20%;
    }
    button.prev:hover,
    button.next:hover {
      opacity: 1;
    }
  }
`;
export const SliderCard = styled.div`
  width: 60%;
  border-radius: 0.5rem;
  height: auto;
  background-color: white;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 1rem;
  box-sizing: border-box;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  display: none;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  &[data-state="active"] {
    display: flex;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    z-index: 3;
  }
  &[data-state="prev"] {
    display: flex;
    left: -45%;
    opacity: 1;
  }
  &[data-state="next"] {
    display: flex;
    left: 85%;
    opacity: 1;
  }
  h2 {
    text-align: center;
    margin: 0;
    font-size: 1.2rem;
  }
  .venue-info {
    display: flex;
    justify-content: space-between;
    margin: 1rem 2rem;
    p {
      margin: 0.5rem 0;
    }
  }
  .btn-container {
    width: 90%;
    margin: 0 auto;
  }
  @media (min-width: 450px) {
    box-sizing: border-box;
    padding-bottom: 1rem;
  }
  @media (min-width: 600px) {
    width: 40%;
    &[data-state="prev"] {
      left: -15%;
    }
    &[data-state="next"] {
      left: 75%;
    }
  }
  @media (min-width: 800px) {
    width: 35%;
    &[data-state="prev"] {
      left: -10%;
    }
    &[data-state="next"] {
      left: 75%;
    }
  }
  @media (min-width: 1100px) {
    width: 30%;
    &[data-state="prev"] {
      left: 0%;
    }
    &[data-state="next"] {
      left: 70%;
    }
  }
`;
export const SliderCardImage = styled.div`
  width: 100%;
  position: relative;
  min-height: 20vh;
  img {
    width: 100%;
    height: 20vh;
    object-fit: cover;
  }
  .perks {
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 0.7rem;
    display: flex;
    position: absolute;
    max-width: 60%;
    flex-wrap: wrap;
    div {
      padding: 0.2rem 0.5rem;
      border-radius: 0.5rem;
      background-color: red;
      margin: 0.2rem;
    }
    .wifi {
      background-color: ${common.colors.primary};
    }
    .parking {
      background-color: ${common.colors.secondary};
    }
    .breakfast {
      background-color: ${common.colors.third};
    }
    .pets {
      background-color: ${common.colors.fourth};
    }
  }
`;
export const SliderButton = styled.button`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  height: 100%;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 10;
  &.next {
    right: 0;
  }
  &.prev {
    left: 0;
  }
`;
export const RecentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 1rem auto 3rem;
`;
export const StandardCard = styled.div`
  width: 80%;
  border-radius: 0.5rem;
  background-color: white;
  margin: 1rem 0;
  overflow: hidden;
  padding-bottom: 1rem;
  h2 {
    text-align: center;
    margin: 0;
    font-size: 1.2rem;
  }
  .venue-info {
    display: flex;
    justify-content: space-between;
    margin: 1rem 2rem;
    p {
      margin: 0.5rem 0;
    }
  }
  .btn-container {
    width: 90%;
    margin: 0 auto;
    button {
      background-color: ${common.colors.primary};
    }
  }
  @media (min-width: 450px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-bottom: 1rem;
  }
  @media (min-width: 600px) {
    width: 45%;
  }
  @media (min-width: 800px) {
    width: 40%;
  }
  @media (min-width: 1100px) {
    width: 30%;
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
  }
`;
