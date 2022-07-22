import styled from "styled-components";

export const Wrapp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  height: 90px;
  position: sticky;
  background: #000;
  top: 0;
  z-index: 9999999;
  nav {
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    a {
      font-size: 1rem;
      width: 100%;
      height: 100%;
      padding: 1rem;
      display: flex;
      align-items: center;
      :hover {
        align-items: center;
        padding: 0.7rem;
        transition: all 0.3s;
        color: red;
        font-size: 1.3rem;
        background: #fff;
        height: 90px;
      }
    }
  }
`;
