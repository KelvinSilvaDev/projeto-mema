import styled from "styled-components";

export const AllWrapp = styled.div`
  display: block;
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* position: relative; */
  /* height: 110vh; */
  height: auto;
  background: #fff;
`;
export const Container = styled.div`
  width: 85%;
  display: block;
  margin: 0 auto;
`;

export const CenterH2 = styled.h2`
  text-align: center;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  background: none !important;
  box-shadow: none;
  margin-bottom: 32px;
`;

export const Wrapp = styled.div`
  background: grey;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  margin: 5px 0;
  max-height: 80px;
  > h3 {
    padding: 2rem;
    font-size: 20px;
  }
  > span {
    padding-right: 20px;
  }
`;

export const Dropdown = styled.div`
  margin-top: -10px;
  padding: 24px;
  padding-left: 32px;
  background: white;
  color: red;
  line-height: 24px;
  font-size: 17px;
`;

export const CenterLink = styled.a`
  text-align: center;
  color: red;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin: 80px auto 70px;
  display: block;
`;
