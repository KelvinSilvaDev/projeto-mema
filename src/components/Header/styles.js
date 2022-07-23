import styled from "styled-components";

// const cabecalho = styled.div`
// background:
// `;

export const HeaderWrapp = styled.div`
  width: 100%;
  overflow-x: hide;
  position: sticky;
  top: 0;
`;

// const scroll = keyframes
//   from {
//     margin-right:0;
//   }
//   to {
//     margin-right:-100%;
//   }
// `;

//animation: ${scroll} 4s linear infinite;

export const LogoDesktop = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
export const HomeHeader = styled.div`
  background: #000000b9;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  @media (max-width: 800px) {
    padding: 24px 14px;
  }
`;

export const Desconto = styled.div`
  width: 18%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 600;
  padding-top: 12px;
  padding-left: 16px;
  padding-bottom: 9px;
  @media (max-width: 800px) {
    min-width: 100%;
  }
`;

export const ButtonHeader = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ButtonHeaderM = styled.div`
  margin-top: 0;
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
`;

export const MenuMobileTogler = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-between;
  justify-content: space-between;
  align-items: right;
  @media (min-width: 800px) {
    display: none !important;
  }
`;

export const GiftCard = styled.div`
  width: 32%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  font-weight: 600;
  padding-top: 12px;
  padding-left: 16px;
  padding-bottom: 9px;
  align-content: center;
  @media (max-width: 800px) {
    min-width: 100%;
  }
`;

export const FreteP = styled.p`
  color: #fff;
  margin-right: 16px;
  margin-left: 16px;
`;
export const Frete = styled.div`
  width: 32%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 800px) {
    min-width: 100%;
  }
`;

export const Button = styled.button`
  margin-left: 24px;
  padding: 16px;
  background-color: ${(props) => (props.dark ? "darkgray" : "gray")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  border: solid 1px;
  border-color: ${(props) => (props.primary ? "#fff" : "darkgray")};
  border-radius: 13px;
`;

export const MenuMButton = styled.button`
  margin-top: 120px;
  margin-left: 24px;
  padding: 16px;
  background-color: ${(props) => (props.primary ? "darkgray" : "gray")};
  color: ${(props) => (props.primary ? "#fff" : "#000")};
  border: ${(props) => (props.primary ? "none" : "solid 1px")};
  border-color: ${(props) => (props.primary ? "#fff" : "black")};
  border-radius: 13px;
`;

export const Menu = styled.nav`
  margin: 0 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-family: "ITC Avant Garde Gothic Std";
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const MenuLink = styled.a`
  margin: 0 16px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-family: "ITC Avant Garde Gothic Std";
  font-size: 16px;
  line-height: 24px;
`;
