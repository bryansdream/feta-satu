import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import FetaHero from "./components/feta";
import Navbar from "./components/Navbar";
import ThemeToggleButton from "./components/themeToggleButton";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className="flex justify-between p-4">
      <FetaHero />
      <Navbar />
      </div>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
