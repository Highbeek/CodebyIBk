import React, { useState, useRef, useEffect } from "react";
import { github } from "../assets";
import { chain } from "../assets";
import { fadeIn } from "../utils/motion";
import YouTubePlayer from "./YoutubePlayer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  const cardRef = useRef(null);

  useGSAP(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: index * 0.5,
        ease: "power3.out",
      }
    );
  }, [index]);

  const handleClick = () => {
    window.open(source_code_link, "_blank");
  };

  const handleLinkClick = () => {
    const isYouTubeLink = livepage_link.includes("youtu");

    if (isYouTubeLink) {
      onVideoClick(livepage_link);
    } else {
      window.open(livepage_link);
    }
  };

  return (
    <div
      ref={cardRef}
      className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] relative"
    >
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
        <h3 className="text-white font-bold text-lg sm:text-xl">{name}</h3>
        <p className="mt-2 text-secondary text-sm sm:text-base">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-sm sm:text-base ${tag.color}`}
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

      {showYouTubeVideo && (
        <YouTubePlayer
          videoUrl={livepage_link}
          onClose={() => setShowYouTubeVideo(false)}
        />
      )}
    </div>
  );
};

export default ProjectCard;
