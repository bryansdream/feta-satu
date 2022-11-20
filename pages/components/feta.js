import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Tada from 'react-reveal/Tada';


export default function FetaHero() {
    return(
        <div className="flex justify-center">
            <Tada>
            <Box mb={[10, 20, 30]}>
            <Link href="/">
            <Text fontSize="4xl" as="b">Tell Me When Its Ready</Text>
            </Link>
            </Box>
            </Tada>
        </div>
    )
}