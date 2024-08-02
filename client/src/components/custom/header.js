import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./mode-toggle";
import SearchBar from "./search-bar";

const links = [
  { href: "/women", label: "Thời trang nữ" },
  { href: "/men", label: "Thời trang nam" },
];

const MenuLinks = ({ isSheet = false }) => (
  <div className={isSheet ? "flex flex-col" : "hidden xl:flex z-10"}>
    {links.map(({ href, label }) => (
      <Link key={href} href={href}>
        <Button className="uppercase" variant="ghost">
          {label}
        </Button>
      </Link>
    ))}
  </div>
);

const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-black z-10">
      <div className="xl:w-[98%] m-auto relative flex justify-between items-center py-3 xl:py-7">
        <MenuLinks />
        <Link
          href="/"
          className="ml-3 xl:ml-0 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:flex xl:justify-center xl:items-center"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={500}
            height={300}
            className="w-[90%] xs:w-[60%] sm:w-[45%]"
            priority
          />
        </Link>
        <div className="flex items-center">
          <SearchBar />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="px-3" variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.6em"
                  height="1.6em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M10.5 5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m.514 2.63a4 4 0 1 0-6.028 0A4 4 0 0 0 2 11.5V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5a4 4 0 0 0-2.986-3.87M8 9H6a2.5 2.5 0 0 0-2.5 2.5V13a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-1.5A2.5 2.5 0 0 0 10 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link className="uppercase" href={"/login"}>
                  <p className="text-lg">Đăng nhập</p>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link className="uppercase" href={"/register"}>
                  <p className="text-lg">Đăng ký</p>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="px-3" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"
              />
            </svg>
          </Button>
          <Button className="px-3" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.6em"
              height="1.6em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2z"
              />
            </svg>
          </Button>
          <ModeToggle />
          <Sheet>
            <SheetTrigger className="px-3 xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.6em"
                height="1.6em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="hidden">Nav</SheetTitle>
              <SheetDescription className="hidden">Navbar</SheetDescription>
              <MenuLinks isSheet />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
