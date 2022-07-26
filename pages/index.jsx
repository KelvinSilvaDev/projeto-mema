// import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import homeBg from "../public/assets/img/homeBg.jpg";
import Accordion from "../components/Accordion";
import styled from "styled-components";
import faq from "./api/faq.json";
import * as Style from "../styles/homeStyles";

export default function Home() {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    const FAQ_API_URL = "http://localhost:3000/api/faq";
    const FAQ_API_URL_PROD = "https://projeto-mema.vercel.app/api/faq";
    const FAQ_API_URL_ALURA =
      "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    fetch(FAQ_API_URL)
      .then((serverResponse) => {
        return serverResponse.json();
      })
      .then((response) => {
        setFaq(response);
        console.log(response);
      });
  }, []);

  // const [clicked, setClicked] = useState(false);

  // const toggle = (index) => {
  //   if (clicked === index) {
  //     return setClicked(null);
  //   }

  //   setClicked(index);
  // };

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

        {/* <ul>
          {faq.map(({ answer, question }) => {
            return (
              <li key={question}>
                <article>
                  <h2>{question}</h2>
                  <p>{answer}</p>
                </article>
              </li>
            );
          })}
        </ul> */}
      </Style.SectionTwo>
      <Style.SectionTree>
        <div className="left">
          <h1>oajsdjasodasd</h1>
          <p>
            Maecenas convallis elementum augue, id vulputate arcu venenatis
            quis. Praesent lorem odio, condimentum eu consectetur in, tempus sit
            amet risus.
          </p>
        </div>
        <div className="right">
          {/* <img src="./assets/img/HomeBg.jpg" alt="" /> */}
          <Image
            src={homeBg}
            layout="responsive"
            objectFit="none"
            quality={100}
            alt=""
          />
        </div>
      </Style.SectionTree>
      {/* <Accordion /> */}
    </>
  );
}
