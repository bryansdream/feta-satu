import { Grid, GridItem } from "@chakra-ui/react"
import Imaged from "./Imaged"
import Imaged2 from "./Imaged2"

export default function ImageCollection() {
    return(
        <div>
        <Grid templateColumns="repeat(4, 1fr)" gap={40}>
          <GridItem w="100%" h="10">
            <Imaged image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2F1.jpg&w=1920&q=75" />
          </GridItem>
          <GridItem w="100%" h="10">
            <Imaged2 image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fslide-3.jpg&w=1920&q=75" />
          </GridItem>
          <GridItem w="100%" h="10">
            <Imaged2 image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2Fblacktab.png&w=1920&q=75" />
          </GridItem>
          <GridItem w="100%" h="10">
            <Imaged image="https://www.outdated.site/_next/image?url=https%3A%2F%2Fxoutdated.s3.ap-south-1.amazonaws.com%2Foutdated%2Fassets%2FE5IKOMdVUAMSO8F.jfif&w=1920&q=75" />
          </GridItem>
        </Grid>
      </div>
    )
}