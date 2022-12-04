import { Container, Grid, GridItem } from "@chakra-ui/react";
import ImageCollection from "./components/ImageCollection";
import { useRef, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import Head from "next/head";
// import ScrollReveal from 'scrollreveal'

export default function Home() {
  const myRef = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  console.log("myElementIsVisible", myElementIsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  }, []);
  return (
    <div className="font-sans">
      <Head>
        <title>Feta</title>
      </Head>
      <Container maxW="9xl">
        <div ref={myRef}>
          <ImageCollection />
        </div>
        <div ref={myRef}>
          <ImageCollection />
        </div>
      </Container>
    </div>
  );
}
