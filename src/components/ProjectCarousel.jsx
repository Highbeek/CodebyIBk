import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ProjectCarousel = ({ projects }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const totalWidth = projects.length * 350;

    // Animation for continuous scrolling
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(carousel, {
      x: -totalWidth,
      duration: 35,
      ease: "linear",
    });

    const scaleImage = () => {
      const imageElements = carousel.querySelectorAll(".project img");

      imageElements.forEach((imageElement) => {
        const rect = imageElement.getBoundingClientRect();
        const isVisible =
          rect.left < window.innerWidth / 2 &&
          rect.right > window.innerWidth / 2;

        if (isVisible) {
          gsap.to(imageElement, {
            scale: 1.2,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              setTimeout(() => {
                gsap.to(imageElement, {
                  scale: 1,
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              }, 2000);
            },
          });
        } else {
          gsap.to(imageElement, {
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      });
    };

    tl.eventCallback("onUpdate", scaleImage);

    return () => {
      tl.kill();
    };
  }, [projects]);

  return (
    <div
      className="project-carousel flex"
      ref={carouselRef}
      style={{ display: "flex" }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project rounded-lg p-3 m-3 border-8 border-cyan-950 lg:w-1/4 overflow-hidden violet-gradient shadow-card`}
          style={{ minWidth: "350px" }}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto object-cover rounded-lg"
            style={{ minWidth: "350px" }}
          />
          <h3 className="text-white text-center">{project.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
