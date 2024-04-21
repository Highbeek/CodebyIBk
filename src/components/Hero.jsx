import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap, Power3 } from "gsap";
import { styles } from "../styles";
import { ProjectCarousel } from ".";
import { projects } from "../constants";
import { chain } from "../assets";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const handRef = useRef(null);
  const textRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    const hand = handRef.current;
    const text = textRef.current;

    gsap.fromTo(
      hand,
      { x: 0 },
      {
        x: -20,
        duration: 0.5,
        ease: Power3.easeInOut,
        repeat: -1,
        yoyo: true,
        delay: 2,
      }
    );

    gsap.fromTo(
      text.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        ease: Power3.easeOut,
        stagger: 0.8,
      }
    );

    gsap.fromTo(
      text.querySelector(".flip-text"),
      { rotationY: 0 },
      {
        rotationY: 360,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      }
    );

    gsap.to(
      ".heroHeadText",
      { x: 0 },
      {
        x: -20,
        duration: 0.5,
        ease: Power3.easeInOut,
        repeat: -1,
        yoyo: true,
        delay: 3,
        rotationX: 360,
      }
    );

    return () => {
      gsap.killTweensOf(hand);
      gsap.killTweensOf(text.children);
      gsap.killTweensOf(text.querySelector(".flip-text"));
    };
  }, []);

  const handleLinkClick = (url) => {
    console.log("Clicked link:", url);
    window.open(url, "_blank");
  };

  return (
    <section className="relative w-full h-screen max-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div ref={textRef}>
          <h1 className={`${styles.heroHeadText} opacity-0`}>
            Hi, I'm <span className="text-[#915eff] flip-text">Ibukun</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100 opacity-0`}>
            I specialize in turning stunning designs into functional and
            interactive web and mobile experiences. With meticulous attention to
            detail, I bring designs to life, creating captivating digital
            solutions.
          </p>
          <div
            className="cursor-pointer flex items-center gap-4 py-4 opacity-0"
            onClick={() => handleLinkClick("https://linktr.ee/ibukunagboola")}
          >
            <p ref={handRef}>Click the icon to connect on social media 👉</p>
            <img
              src={chain}
              alt="source code"
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>
      </div>

      <motion.div
        className="z-10 top-[55%] absolute w-full justify-center items-center lg:block hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
      >
        <ProjectCarousel projects={projects} />
      </motion.div>

      <div className="absolute xs:bottom-0 bottom-10 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
