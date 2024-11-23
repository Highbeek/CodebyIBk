import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectCarousel = ({ projects }) => {
  const carouselRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const carousel = carouselRef.current;
    const wrapper = wrapperRef.current;

    const originalItems = Array.from(carousel.children);
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });

    const itemWidth = 432;
    const totalWidth = projects.length * itemWidth;

    gsap.set(carousel, { x: 0 });

    const createInfiniteLoop = () => {
      const tl = gsap.timeline({ repeat: -1 });

      tl.to(carousel, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        modifiers: {
          x: gsap.utils.unitize((x) => {
            if (parseFloat(x) <= -totalWidth) {
              return 0;
            }
            return x;
          }),
        },
      });

      return tl;
    };

    const mainTimeline = createInfiniteLoop();

    wrapper.addEventListener("mouseenter", () => mainTimeline.pause());
    wrapper.addEventListener("mouseleave", () => mainTimeline.play());

    return () => {
      mainTimeline.kill();
      wrapper.removeEventListener("mouseenter", () => mainTimeline.pause());
      wrapper.removeEventListener("mouseleave", () => mainTimeline.play());
    };
  }, [projects]);

  return (
    <div className="relative w-full">
      <div
        ref={wrapperRef}
        className="relative w-screen mx-auto overflow-hidden"
        style={{
          maxWidth: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <div
          ref={carouselRef}
          className="flex gap-8 py-8 pl-8"
          style={{
            width: "max-content",
          }}
        >
          {projects.map((project, index) => {
            const projectId = project.name.replace(/\s+/g, "-").toLowerCase();

            return (
              <div
                key={`${projectId}-${index}`}
                id={projectId}
                className="project-card w-[400px] p-4 transform transition-all duration-300 flex-shrink-0 hover:scale-110"
              >
                <a
                  href={`#${projectId}`}
                  className="block group relative rounded-xl overflow-hidden bg-tertiary"
                >
                  <div className="relative overflow-hidden border-4 border-cyan-950 rounded-xl shadow-lg">
                    <div className="relative w-full h-[225px]">
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
    </div>
  );
};

export default ProjectCarousel;
