import React, { useState, useRef } from "react";
import { github } from "../assets";
import { chain } from "../assets";
import YouTubePlayer from "./YoutubePlayer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const chainRef = useRef(null);

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

  const handleMouseEnter = () => {
    // Scale up the card
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.out",
    });

    // Only animate the chain when hovering
    gsap.to(chainRef.current, {
      y: "-10px",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "ease.inOut",
    });
  };

  const handleMouseLeave = () => {
    // Scale back to normal
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power1.in",
    });

    // Stop chain animation and return to original position
    gsap.to(chainRef.current, {
      y: "0px",
      repeat: 0,
      duration: 0.3,
    });

    // Immediately kill any ongoing chain animations
    gsap.killTweensOf(chainRef.current);
  };

  const handleClick = () => {
    if (!source_code_link || source_code_link === "") {
      toast.info(
        "This GitHub link is restricted. Feel free to explore the video or check out the live page instead!",
        {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          type: "warning",
        }
      );
    } else {
      window.open(source_code_link, "_blank");
    }
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            ref={chainRef}
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
