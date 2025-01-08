import React from "react";

function LandingPage() {
  return (
    <div className="relative bg-[#19191b] min-h-screen text-white overflow-x-hidden">
      {/* Gradient Decorations */}
      <div>
        <div className="absolute w-[350px] h-[1200px] -left-[300px] -mt-[500px]">
          <div
            className="absolute inset-0 rounded-[200px] bg-gradient-to-b from-[#5454D4] to-[#5454D4]/[0.42] blur-2xl
            opacity-20 rotate-[-54deg] scale-[1.3]"
          ></div>
        </div>
        <div className="absolute w-[400px] h-[1200px] -right-[300px] top-[150px]">
          <div
            className="absolute inset-0 rounded-[200px] bg-gradient-to-b from-[#FBA81C]/[0.26] to-[#E05688]/[0.15] blur-3xl
            opacity-30 rotate-[65deg] scale-[1.3]"
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="mt-[150px] ml-[120px]">
          <p className="font-bold text-7xl">Hello!</p>
          <p className="font-bold text-7xl">I'm Khawpun!</p>
        </div> 
        
      </div>
    </div>
  );
}

export default LandingPage;
