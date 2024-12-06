import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectCard from "./ProjectCard";
import YouTubePlayer from "./YoutubePlayer";

const Works = () => {
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleClick = () => {
    window.open("https://github.com/Highbeek?tab=repositories", "_blank");
  };

  const handleVideoClick = (videoUrl) => {
    setSelectedVideoUrl(videoUrl);
    setShowYouTubeVideo(true);
  };

  const handleCloseVideo = () => {
    setShowYouTubeVideo(false);
  };

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div id="works">
      <div>
        <p className={`${styles.sectionSubText} `} data-aos="fade-up">
          My work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        <div className="w-full flex">
          <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Following projects showcase my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-20 relative max-w-full">
        {projects
          .slice(0, showAllProjects ? projects.length : 9)
          .map((project, index) => (
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
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black bg-opacity-50"
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
          onClick={toggleShowAllProjects}
          className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-300"
        >
          {showAllProjects ? "See Less" : "See More"}{" "}
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
