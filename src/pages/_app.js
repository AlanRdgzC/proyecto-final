import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu";
//import "@/styles/index.module.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}
