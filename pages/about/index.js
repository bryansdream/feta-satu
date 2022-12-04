import { Box, Container, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"

export default function AboutPage() {
  return (
    <div>
      <Container maxW="7xl">
      <p className="font-semibold text-2xl">Hit Me Up @</p>
      <Box boxSize="fit-content" bg="purple.300" rounded="base" padding="2">
        <Link href="https://instagram.com/tellmewhenitsready" target="_blank">
          <Icon as={AiFillInstagram} w="6" h="6" color="white" />
        </Link>
      </Box>
      <Box boxSize="fit-content" bg="blue.300" rounded="base" padding="2">
        <Link href="https://instagram.com/tellmewhenitsready" target="_blank">
          <Icon as={AiFillTwitterSquare} w="6" h="6" color="white" />
        </Link>
      </Box>
      </Container>
    </div>
  );
}
    