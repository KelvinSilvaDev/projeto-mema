import { useEffect } from "react";
import { Container, NavMobile, NavLink } from "./styles";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <a onClick={() => setMenuIsVisible(false)}>a</a>
      {/* <a href="#" onClick={() => setMenuIsVisible(false)}>X</a> */}
      <NavMobile>
        <NavLink href="#">Notícias</NavLink>
        <NavLink href="#">Tratamentos</NavLink>
        <NavLink href="#">Produtos</NavLink>
        <NavLink href="#">Soluções Cannect</NavLink>
      </NavMobile>
    </Container>
  );
}
