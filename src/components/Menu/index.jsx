import { PrismicLink } from "@prismicio/react";
import * as Style from "./styles";

export default function Menu() {
  return (
    <Style.Wrapp>
      <nav>
        <PrismicLink href="/">Teste</PrismicLink>
        <PrismicLink href="/teste">Teste</PrismicLink>
      </nav>
    </Style.Wrapp>
  );
}
