import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai"

export default function AboutPage() {
  return (
    <div>
      <p className="font-semibold text-2xl">Hit Me Up @</p>
      <Box boxSize="fit-content" bg="grey" rounded="base" padding="2">
        <Link href="https://instagram.com/tellmewhenitsready" target="_blank">
          <Icon as={AiFillInstagram} w="6" h="6" />
        </Link>
      </Box>
    </div>
  );
}
    