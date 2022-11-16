import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Imaged2(props) {
  return (
    <Box boxSize={[300, 400, 500]}>
      <motion.div
        initial={{ opacity: 0, rotate: -2, scale: 1 }}
        animate={{ opacity: 1, rotate: -2, scale: 0.9 }}
        whileHover={{ rotate: 0, scale: 1 }}
        whileTap={{ rotate: -2, scale: 0.9 }}
      >
        <Image src={props.image} alt="Dan Abramov"  objectFit="cover" w="500px" h="500px" />
      </motion.div>
    </Box>
  );
}
