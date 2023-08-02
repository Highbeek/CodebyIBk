// Works.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { styles } from "../styles";
import { github } from "../assets";
import { chain } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import YouTubePlayer from "./Youtubeplayer";

const Works = () => {
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  const handleClick = () => {
    window.open("https://github.com/Highbeek", "_blank");
  };

  const handleVideoClick = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setShowYouTubeVideo(true);
  };

  const handleCloseVideo = () => {
    setShowYouTubeVideo(false);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-20 relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            onVideoClick={handleVideoClick}
            {...project}
          />
        ))}
      </div>

      <AnimatePresence>
        {showYouTubeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed top-1/2 left-1/2 flex justify-center items-center z-50 bg-black bg-opacity-50 "
          >
            <YouTubePlayer
              videoUrl={selectedVideoUrl}
              onClose={handleCloseVideo}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10 flex justify-center">
        <button
          onClick={handleClick}
          className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
        >
          View More
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
