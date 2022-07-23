import styled from "styled-components";
import homeBg from "../public/assets/img/homeBg.jpg";

export const SectionOne = styled.section`
  h1 {
    padding-top: 3em;
    font-size: 5rem;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
    line-height: 32px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  padding-bottom: 1.5rem;
  background-image: url("assets/img/homeBg.jpg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 90px);
  opacity: 0.5;
  :hover {
    opacity: 1;
    transition: 1s;
  }
`;

export const SectionTwo = styled.section`
  padding: 1rem;
  h1 {
    font-size: 48px;
  }
  p {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 2px;
    text-align: left;
  }
  button {
    display: block;
    margin: 0 auto;
    padding: 1rem;
    cursor: pointer;
    :hover {
      transition: all 0.5s;
      transform: scale(1.2);
    }
  }
`;

export const SectionTree = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  .left {
    width: 50%;
    padding: 0 3rem;
  }
  .right {
    width: 50%;
    img {
      width: 100%;
    }
  }
`;
