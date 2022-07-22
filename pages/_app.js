import Menu from "../src/components/Menu";
import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
