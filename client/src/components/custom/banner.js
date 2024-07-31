"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./banner.module.css";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleSlow, setIsVisibleSlow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const timerSlow = setTimeout(() => {
        setIsVisibleSlow(true);
      }, 500);
      return () => clearTimeout(timerSlow);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[75vh]">
      <Image
        src="/images/banner.png"
        alt="banner"
        fill
        className={styles.banner}
        quality={100}
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        <div className="relative">
          <span
            className={`uppercase text-5xl md:text-6xl lg:text-8xl font-bold ${
              styles.fadeIn
            } ${isVisible ? styles.fadeInVisible : ""}`}
          >
            Phong cách
          </span>
          <span
            className={`absolute text-2xl bottom-[-2.5rem] right-0 ${
              styles.fadeInSlow
            } ${isVisibleSlow ? styles.fadeInSlowVisible : ""}`}
          >
            | EST. 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
