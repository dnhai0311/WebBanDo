"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const LandingPage = () => {
  const ProductBox = ({ img, alt, text }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <div
        ref={!alt ? ref : null}
        className={`w-[100%] h-[100vh] relative overflow-hidden mt-1 md:mt-0 ${
          alt && "md:w-[48%]"
        }`}
      >
        <motion.div
          className={`absolute w-full h-full ${!alt && "lg:w-[48%]"}`}
          initial={{ scale: 1.2 }}
          animate={{ scale: isInView ? 1 : 1.2 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={
              !alt
                ? "lg:object-contain object-cover object-[center_top]"
                : "object-cover object-[center_top]"
            }
          />
        </motion.div>
        {alt ? (
          <>
            <motion.span
              ref={ref}
              className="absolute text-3xl text-white uppercase font-bold bottom-40 left-1/2 w-full text-center"
              initial={{ opacity: 0, x: -200 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? "-50%" : -200,
              }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
            >
              {`Thời trang ${text}`}
            </motion.span>
            <motion.div
              className="absolute bottom-40 left-1/2"
              initial={{ opacity: 0, x: "-50%", y: 100 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 50 : 100,
              }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
            >
              <Link href={`/${alt}`}>
                <Button
                  className="text-xl font-light uppercase bg-gray-800 bg-opacity-60 text-white"
                  variant="outline"
                >
                  Khám phá
                </Button>
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="flex items-center justify-center lg:justify-around relative "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
          >
            <div className="h-[100vh]"></div>
            <div className="text-center text-black dark:lg:text-white ">
              <div className="uppercase text-2xl font-semibold">Phong cách</div>
              <div className="text-xl lg:font-light">
                Khám phá phong cách của bạn
              </div>
              <div className="text-xl lg:font-light">
                thể hiện style riêng biệt
              </div>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:mt-6 justify-evenly">
        <ProductBox img="/images/banner-girl-1.jpg" alt="women" text={"nữ"} />
        <ProductBox img="/images/banner-men.jpg" alt="men" text={"nam"} />
      </div>
      <div>
        <span className="flex justify-center items-center m-20 uppercase font-bold text-3xl">
          Đặc sắc
        </span>
        <ProductBox img="/images/banner-girl-2.jpg" alt={""} />
      </div>
    </>
  );
};

export default LandingPage;
