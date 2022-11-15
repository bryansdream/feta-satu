import { Text } from "@chakra-ui/react";
import Link from "next/link";

export default function FetaHero() {
    return(
        <div>
            <Link href="/">
            <Text fontSize="4xl" as="b">Absurd</Text>
            </Link>
        </div>
    )
}