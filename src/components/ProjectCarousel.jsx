import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectCarousel = ({ projects }) => {
  const carouselRef = useRef(null);

  useGSAP(() => {
    const carousel = carouselRef.current;
    const totalWidth = projects.length * 350;

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(carousel, {
      x: -totalWidth,
      duration: 30,
      ease: "linear",
      onComplete: () => {
        gsap.set(carousel, { x: 0 });
      },
    });
    const scaleProject = () => {
      const projectElements = carousel.querySelectorAll(".project");

      projectElements.forEach((projectElement, index) => {
        const rect = projectElement.getBoundingClientRect();
        const isVisible =
          rect.left < window.innerWidth / 2 &&
          rect.right > window.innerWidth / 2;

        const zIndex = isVisible ? 1 : 0;

        gsap.to(projectElement, {
          zIndex,
        });

        if (isVisible) {
          gsap.to(projectElement, {
            scale: 1.2,
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
              setTimeout(() => {
                gsap.to(projectElement, {
                  scale: 1,
                  duration: 1.5,
                  ease: "power2.inOut",
                });
              }, 2000);
            },
          });
        } else {
          gsap.to(projectElement, {
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
          });
        }
      });
    };

    tl.eventCallback("onUpdate", scaleProject);

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
          id={project.name.replace(/\s+/g, "-").toLowerCase()}
          className={`project rounded-lg p-3 m-3 border-8 border-cyan-950 lg:w-1/4 overflow-hidden violet-gradient shadow-card cursor-pointer`}
          style={{ minWidth: "350px" }}
        >
          <a href={`#${project.name.replace(/\s+/g, "-").toLowerCase()}`}>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-auto object-cover rounded-lg"
              style={{ minWidth: "350px" }}
            />
            <h3 className="text-white text-center mt-6">{project.name}</h3>{" "}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
