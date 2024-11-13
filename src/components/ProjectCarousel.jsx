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
      const projectElements = carousel.querySelectorAll(".project-card");

      projectElements.forEach((projectElement) => {
        const rect = projectElement.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const isVisible = rect.left < centerX && rect.right > centerX;

        gsap.to(projectElement, {
          zIndex: isVisible ? 1 : 0,
          scale: isVisible ? 1.2 : 1,
          duration: 1,
          ease: "power2.inOut",
          ...(isVisible && {
            onComplete: () => {
              setTimeout(() => {
                gsap.to(projectElement, {
                  scale: 1,
                  duration: 1.5,
                  ease: "power2.inOut",
                });
              }, 2000);
            },
          }),
        });
      });
    };

    tl.eventCallback("onUpdate", scaleProject);

    return () => tl.kill();
  }, [projects]);

  return (
    <div className="relative w-full overflow-hidden">
      <div ref={carouselRef} className="flex gap-6 py-8">
        {projects.map((project, index) => {
          const projectId = project.name.replace(/\s+/g, "-").toLowerCase();

          return (
            <div
              key={`${projectId}-${index}`}
              id={projectId}
              className="project-card min-w-[350px] transform transition-all duration-300"
            >
              <a
                href={`#${projectId}`}
                className="block group relative rounded-xl overflow-hidden"
              >
                <div className="relative overflow-hidden border-4 border-cyan-950 rounded-xl shadow-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white text-center mb-2">
                      {project.name}
                    </h3>
                    {project.tags && (
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={`${tag.name || tag}-${tagIndex}`}
                            className="inline-block px-3 py-1 text-sm text-white/90 bg-cyan-950/80 rounded-full"
                          >
                            {typeof tag === "string" ? tag : tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCarousel;
