import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import Imaged from "./Imaged"
import Imaged2 from "./Imaged2"

export default function ImageCollection() {
    return(
        <div>
        <SimpleGrid minChildWidth="400px" columns={4} spacing="100px">
            <Imaged image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75"/>
            <Imaged2 image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75" />
            <Imaged2 image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75" />
            <Imaged image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75" />
            <Imaged image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75"/>
            <Imaged2 image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75" />
            <Imaged2 image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75" />
            <Imaged image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75" />
        </SimpleGrid>
      </div>
    )
}