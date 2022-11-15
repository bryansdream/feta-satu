import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import FetaHero from "./components/feta";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <FetaHero />
      <Component {...pageProps} />
      <Navbar />
    </ChakraProvider>
  );
}

export default MyApp;
