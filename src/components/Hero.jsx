import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { styles } from "../styles";
import { ProjectCarousel } from ".";
import { projects } from "../constants";
import { chain } from "../assets";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const handRef = useRef(null);

  useGSAP(() => {
    const hand = handRef.current;

    gsap.fromTo(
      hand,
      { y: 0 },
      {
        y: -20,
        duration: 0.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      }
    );

    return () => {
      gsap.killTweensOf(hand);
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
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Ibukun</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in turning stunning designs into functional and
            interactive web and mobile experiences. With meticulous attention to
            detail, I bring designs to life, creating captivating digital
            solutions.
          </p>
          <div
            className="cursor-pointer flex items-center gap-4 py-4"
            onClick={() => handleLinkClick("https://linktr.ee/ibukunagboola")}
          >
            <p>Click the icon to connect on social media 👉</p>
            <img
              src={chain}
              alt="source code"
              className="w-10 h-10 object-contain"
              ref={handRef}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row z-10 top-[55%] absolute justify-around items-center ">
        <ProjectCarousel projects={projects} />
      </div>
      <div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center ">
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
