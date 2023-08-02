// ProjectCard.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { chain } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import YouTubePlayer from "./Youtubeplayer";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  livepage_link,
  onVideoClick, 
}) => {
  const [showYouTubeVideo, setShowYouTubeVideo] = useState(false);

  const handleClick = () => {
    window.open(source_code_link, "_blank");
  };

  const handleLinkClick = () => {
    const isYouTubeLink = livepage_link.includes("youtu.be/");

    if (isYouTubeLink) {
      onVideoClick(livepage_link); 
    } else {
      window.open(livepage_link);
    }
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={handleClick}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
          <div className="cursor-pointer" onClick={handleLinkClick}>
            <img
              src={chain}
              alt="source code"
              className="w-5 h-5 object-contain"
            />
          </div>
        </div>
      </div>

      {showYouTubeVideo && (
        <YouTubePlayer
          videoUrl={livepage_link}
          onClose={() => setShowYouTubeVideo(false)}
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;
