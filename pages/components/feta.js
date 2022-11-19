import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function FetaHero() {
    return(
        <div className="flex justify-center">
            <Box mb={[10, 20, 30]}>
            <Link href="/">
            <Text fontSize="4xl" as="b">Tell Me When Its Ready</Text>
            </Link>
            </Box>
        </div>
    )
}