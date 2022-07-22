import Menu from "../Menu";
import * as Style from "./styles";
import logo from "../../../public/vercel.svg";
import { MenuMobile } from "./MenuMobile";
import { useState } from "react";

export default function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState();

  return (
    <Style.HeaderWrapp>
      <Style.HomeHeader>
        <Menu />
        <Style.MenuMobileTogler menuIsVisible={menuIsVisible}>
          <a href="#" onClick={() => setMenuIsVisible(true)}>
            a
          </a>
          <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </Style.MenuMobileTogler>
      </Style.HomeHeader>
    </Style.HeaderWrapp>
  );
}
