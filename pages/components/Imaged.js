import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Imaged(props) {
  return (
    <div className="group">
    <Box boxSize="fit-content">
      <motion.div
        initial={{ opacity: 0, rotate: 2, scale: 1 }}
        animate={{ opacity: 1, rotate: 2, scale: 0.9 }}
        whileHover={{ rotate: 0, scale: 1 }}
      >
        <p className="absolute flex z-10 opacity-0 group-hover:opacity-100 bg-black text-lg text-white bg-opacity-50 p-2 m-2">
          {props.hover}
        </p>

        <Image
          src={props.image}
          alt=""
          objectFit="cover"
          w={[150, 200, 300, 500]}
          h={[200, 250, 350, 550]}
        />
      </motion.div>
    </Box>
    </div>
);
}
