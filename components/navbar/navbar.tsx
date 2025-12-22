"use client";
import Link from "next/link";
import Container from "../container";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];
function Navbar() {
  const [hovered, setHovered] = useState<null | number>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-aceternity)" : "none",
          width: scrolled ? "70%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={`fixed top-0 inset-x-0 max-w-4xl mx-auto flex items-center justify-between bg-white dark:bg-neutral-800/30 dark:backdrop-blur-md py-2 px-3 z-50 ${
          scrolled && "rounded-full"
        }`}
      >
        <Image
          src="/images/shefat.png"
          height={50}
          width={50}
          alt="shefat"
          className="rounded-full aspect-square object-cover object-top sm:w-10 sm:h-10 w-8 h-8"
        />

        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-sm font-medium text-neutral-800 dark:text-neutral-200 relative px-2 py-1"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 rounded-md bg-neutral-100 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}

export default Navbar;
