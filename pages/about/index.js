import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      <p className="font-semibold text-2xl">Contact @</p>
      <Box boxSize="fit-content" bg="grey" rounded="base" padding="2">
        <Link href="https://instagram.com/tellmewhenitsready" target="_blank">
          insta
        </Link>
      </Box>
    </div>
  );
}
    