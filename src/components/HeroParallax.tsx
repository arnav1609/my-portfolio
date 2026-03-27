"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const projects = [
  {
    title: "NeuroFin: Agentic AI Co-Pilot",
    link: "#",
    thumbnail: "/Neurofin.png",
  },
  {
    title: "Kanda Krates App",
    link: "#",
    thumbnail: "/Kandakrates.png",
  },
  {
    title: "Smart Parking System",
    link: "#",
    thumbnail: "/Screenshot 2025-06-26 113339.png",
  },
  {
    title: "Smart Bus Stop",
    link: "#",
    thumbnail: "/Screenshot 2025-06-26 113414.png",
  },
  {
    title: "Mentor-Mentee Platform",
    link: "#",
    thumbnail: "/Screenshot 2025-06-26 113612.png",
  },
  {
    title: "Shakti Kavach Wearable",
    link: "#",
    thumbnail: "/WhatsApp Image 2025-06-26 at 11.39.20 AM.jpeg",
  },
  {
    title: "AI Intrusion Detection",
    link: "#",
    thumbnail: "/WhatsApp Image 2025-06-26 at 11.37.32 AM.jpeg",
  },
  {
    title: "Newspodify",
    link: "#",
    thumbnail: "/nsp_logo.png",
  },
  {
    title: "NeuroFin OS",
    link: "#",
    thumbnail: "/Neurofin.png", // Duplicating some to fill the grid for dramatic effect
  },
  {
    title: "Kanda Krates Dash",
    link: "#",
    thumbnail: "/Kandakrates.png",
  },
];

export const HeroParallax = () => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[200vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> Development Arsenal
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        From Agentic AI co-pilots like NeuroFin to heavy WebGL and IoT integrations.
        Scroll to explore the cutting edge of modern software engineering.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: { title: string; link: string; thumbnail: string };
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl"
          alt={product.title}
        />
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300 rounded-xl" />
        <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl transition-all duration-300">
          {product.title}
        </h2>
      </Link>
    </motion.div>
  );
};
