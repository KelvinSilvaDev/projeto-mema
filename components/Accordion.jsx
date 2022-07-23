import React, { useEffect, useState } from "react";
import * as Style from "./styles";

export default function Accordion() {
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

  const [clicked, setClicked] = useState(false);

  const toggle = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }

    setClicked(id);
  };

  return (
    <Style.Container>
      <Style.CenterH2>Perguntas frequentes</Style.CenterH2>
      {/* {faq.map(({ answer, question }) => {
        return (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        );
      })} */}
      {faq.map(({ question, answer, id }) => {
        return (
          <>
            <Style.Wrapp onClick={() => toggle(id)} key={id}>
              <h3>{question}</h3>
              <span>
                {clicked === id ? <a href="#">^</a> : <a href="#">V</a>}
              </span>
            </Style.Wrapp>
            {clicked === id ? (
              <Style.Dropdown>
                <p>{answer}</p>
              </Style.Dropdown>
            ) : null}
          </>
        );
      })}
    </Style.Container>
  );
}
