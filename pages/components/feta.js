import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Tada from 'react-reveal/Tada';


export default function FetaHero() {
    return(
        <div className="flex justify-center font-sans">
            <Tada>
            <Box mb={[10, 20, 30]}>
            <Link href="/">
            <p className="font-bold text-2xl md:text-3xl lg:text-4xl">Tell Me When Its Ready</p>
            </Link>
            </Box>
            </Tada>
        </div>
    )
}