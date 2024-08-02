"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const menuItems1 = [
    "Liên hệ với chúng tôi",
    "Cách đặt hàng",
    "Chích sách bảo hành",
    "Câu hỏi thường gặp",
  ];
  const menuItems2 = ["Về chúng tôi", "Danh sách cửa hàng"];

  return (
    <footer className="bg-black mt-20 text-white py-20 px-3 md:px-8 flex flex-col md:flex-row justify-between gap-10">
      <Link className="md:w-[20%] order-3 md:order-1" href={"/"}>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={1000}
          height={500}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </Link>
      <div className="md:w-[30%] order-1 md:order-2">
        <div className="uppercase text-slate-400 font-bold pb-3 ">
          Bạn cần trợ giúp?
        </div>
        <div className="space-y-4 font-semibold">
          {menuItems1.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={"/"}>{item}</Link>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="md:w-[30%] order-2 md:order-3">
        <div className="uppercase text-slate-400 font-bold pb-3 ">
          Thông tin cửa hàng
        </div>
        <div className="space-y-4 font-semibold">
          {menuItems2.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={"/"}>{item}</Link>
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
