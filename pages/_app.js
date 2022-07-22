import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
