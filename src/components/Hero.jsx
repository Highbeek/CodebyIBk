import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import ResumeIcon from "./ResumeIcon";
import TwitterIcon from "./Twitter";
import LinkedInIcon from "./LinkedInIcon";
import { links } from "../constants";
import { slideIn } from "../utils/motion";

const Hero = () => {
  const handleClick = (url) => {
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
        </div>
      </div>

      <div className="flex flex-row z-10 top-[65%] absolute justify-around items-center w-full ">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          animate="hidden"
        >
          <LinkedInIcon
            link={links.find((item) => item.platform === "linkedin").url}
            handleClick={() =>
              handleClick(
                links.find((item) => item.platform === "linkedin").url
              )
            }
          />
        </motion.div>

        <ResumeIcon
          link={links.find((item) => item.platform === "resume").url}
          handleClick={() =>
            handleClick(links.find((item) => item.platform === "resume").url)
          }
        />

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          animate="hidden"
        >
          <TwitterIcon
            link={links.find((item) => item.platform === "twitter").url}
            handleClick={() =>
              handleClick(links.find((item) => item.platform === "twitter").url)
            }
          />
        </motion.div>
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
