import React from "react";

function SkillCard({text, src}) {
    return (
      <div className="w-[200px] h-[150px] bg-[#1E1E20] rounded-3xl flex flex-col items-center justify-center hover:w-[225px] hover:h-[175px] transition-all duration-300 ease-in-out">
        <div className="rounded-full h-[80px] w-[80px] overflow-hidden relative">
            <img
              src={src}
              alt={text}
              className="h-full w-full object-cover rounded-full"
            />
        </div>
        <p className="text-3xl text-white">{text}</p>
      </div>
    );
  }
  
  export default SkillCard;