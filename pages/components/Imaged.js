import { Box, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Imaged(props) {
  return (
    <Box boxSize="fit-content">
    <motion.div
    initial={{ opacity: 0, rotate: 2, scale: 1 }}
    animate={{ opacity: 1, rotate: 2, scale: 0.9 }}
    whileHover={{ rotate: 0, scale: 1, }}
    >
      <Image src={props.image} alt="" objectFit="cover" w={[200, 300, 400, 500]} h={[300, 350, 400, 600]}/>
    </motion.div>
    </Box>
  );
}
