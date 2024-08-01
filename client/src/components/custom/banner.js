"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <Image
          src="/images/banner.png"
          alt="banner"
          fill
          className={"object-cover"}
          quality={100}
          priority
        />
      </motion.div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="relative">
          <motion.span
            className="uppercase text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            Phong cách
          </motion.span>
          <motion.span
            className="absolute text-2xl bottom-[-2.5rem] right-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            | EST. 2024
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
