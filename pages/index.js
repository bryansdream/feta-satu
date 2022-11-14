import { Container, Grid, GridItem } from "@chakra-ui/react";
import ImageCollection from "./components/ImageCollection";
import Imaged from "./components/Imaged";
import Imaged2 from "./components/Imaged2";

export default function Home() {
  return (
    <Container maxW="container.2xl">
      <ImageCollection/>
    </Container>
  );
}
