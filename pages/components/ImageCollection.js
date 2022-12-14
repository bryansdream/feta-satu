import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Imaged from "./Imaged";
import Imaged2 from "./Imaged2";
import { animationControls, motion, useViewportScroll } from "framer-motion";
import { useAnimation } from "framer-motion";
import Head from "next/head";
import { Zoom, Fade, Slide } from "react-reveal";
import config from 'react-reveal/globals';

config({ ssrFadeout: true });


export default function ImageCollection() {
  return (
    <Slide bottom ssrFadeout>
      <SimpleGrid columns={[2, 3, 4]}>
        <Imaged
          image="https://i.ibb.co/HDv9Q5k/277317699-858686354855755-8963026574499317009-n.jpg"
          hover="apa"
        />
        <Imaged2
          image="https://i.ibb.co/64xVPQw/274833111-519568269610480-1888972364534261432-n.jpg"
          hover="apa"
        />
        <Imaged2
          image="https://i.ibb.co/VNDpXmD/274772598-497235915259580-2833016214001972593-n.jpg"
          hover="apa"
        />
        <Imaged
          image="https://i.ibb.co/zNCjtz3/272972246-529798071690061-6103680218309505855-n.jpg"
          hover="apa"
        />
        <Imaged
          image="https://i.ibb.co/b7wWjsd/274182658-412754183942704-7348495299691721582-n.jpg"
          hover="apa"
        />
        <Imaged2
          image="https://i.ibb.co/gJjzr80/274319740-1734674310212175-3611442684736990365-n.jpg"
          hover="apa"
        />
        <Imaged2
          image="https://i.ibb.co/GPYV0Yw/268593438-625183908931981-9209380790821994144-n.jpg"
          hover="apa"
        />
        <Imaged
          image="https://i.ibb.co/0fTdLLm/267956282-434437958327370-1551720664197714667-n.jpg"
          hover="Ini Hover"
        />
      </SimpleGrid>
    </Slide>
  );
}
