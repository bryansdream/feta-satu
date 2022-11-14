import { Box, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function Imaged(props) {
  return (
    <Box w="fit-content">
    <motion.div
    initial={{ opacity: 0, rotate: 2, scale: 1 }}
    animate={{ opacity: 1, rotate: 2, scale: 0.9 }}
    whileHover={{ rotate: 0, scale: 1 }}
    whileTap={{ rotate: 2 }}>
      <Box boxSize="fit-content" maxW="unset">
        <Image src={props.image} alt="Dan Abramov" />
      </Box>
    </motion.div>
    </Box>
  );
}
