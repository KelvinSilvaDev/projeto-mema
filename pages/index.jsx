// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import * as Style from "../styles/homeStyles";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Style.SectionOne>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc
          pellentesque, cursus eros et, facilisis dui. Maecenas vel porta justo.
          Maecenas convallis elementum augue, id vulputate arcu venenatis quis.
          Praesent lorem odio, condimentum eu consectetur in, tempus sit amet
          risus.
        </p>
      </Style.SectionOne>
      <Style.SectionTwo>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc
          pellentesque, cursus eros et, facilisis dui. Maecenas vel porta justo.
          Maecenas convallis elementum augue, id vulputate arcu venenatis quis.
          Praesent lorem odio, condimentum eu consectetur in, tempus sit amet
          risus. Nunc a porta erat, at maximus metus. Fusce a massa orci. Duis
          sit amet volutpat magna. Donec posuere justo sit amet pulvinar
          tincidunt. Integer suscipit at mauris eget elementum. Vivamus ac
          tincidunt felis, et accumsan tortor. Donec fringilla aliquam volutpat.
          In a elementum lorem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in nunc
          pellentesque, cursus eros et, facilisis dui. Maecenas vel porta justo.
          Maecenas convallis elementum augue, id vulputate arcu venenatis quis.
          Praesent lorem odio, condimentum eu consectetur in, tempus sit amet
          risus.
        </p>
        <Link href="sobre-nos">
          <button>Conheça</button>
        </Link>
      </Style.SectionTwo>
    </>
  );
}
