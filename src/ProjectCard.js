import React, { useState } from "react";
import ProjectPage from "./ProjectPage";

function ProjectCard({ subject, src, clip, name, description, color, link }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isProjectVisible, setProjectVisible] = useState(false);

  const handleClose = () => {
    setProjectVisible(false);
  };

  return (
    <>
      <div
        className={`rounded-3xl flex flex-col items-center justify-center transition-all duration-300 ease-in-out cursor-pointer`}
        style={{
          backgroundColor: `rgba(${color}, 0.15)`,
          width: isHovered ? "250px" : "400px",
          height: isHovered ? "200px" : "350px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setProjectVisible(true)}
      >
        {!isHovered && <p className="text-xl text-white text-center">{subject}</p>}
        <div className="rounded-full h-[80px] w-[80px] overflow-hidden relative mt-10">
          <img
            src={src}
            alt={name}
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <p className="text-3xl text-white font-bold mt-6 mb-2 text-center">{name}</p>
        {!isHovered && (
          <p className="text-white mt-4 mx-3 text-center">
            {description}
          </p>
        )}
      </div>
      {isProjectVisible && (
        <ProjectPage
          isOpen={isProjectVisible}
          onClose={handleClose}
          src={src}
          clip={clip}
          name={name}
          description={description}
          link={link}
        />
      )}
    </>
  );
}

export default ProjectCard;