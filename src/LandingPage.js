import React from "react";
import SkillCard from "./SkillCard";
import ProjectCard from "./ProjectCard";

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

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#1c1c1f] py-4 px-6 md:px-8 flex justify-between items-center shadow-lg">
        <div className="font-bold text-xl md:text-2xl">knppkp</div>
        <div className="hidden md:flex space-x-6">
          <a href="#header" className="hover:text-[#5454D4]">
            Home
          </a>
          <a href="#experience" className="hover:text-[#5454D4]">
            Experience
          </a>
          <a href="#skill" className="hover:text-[#5454D4]">
            Skills
          </a>
          <a href="#project" className="hover:text-[#5454D4]">
            Projects
          </a>
        </div>
        <div className="hidden md:flex w-[160px] h-[40px] border-white border-2 justify-center items-center rounded-lg">
          <a
            className="text-white"
            href="https://www.linkedin.com/in/natavee-pecharat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </a>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden">
          <a href="#header" className="text-[#5454D4]">
            Menu
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-[120px] md:pt-[150px]">
        {/* Header */}
        <section id="header" className="px-6 md:ml-[120px]">
          <h1 className="font-bold text-4xl md:text-7xl">
            Hello! <br /> I'm Natavee!
          </h1>
          <p className="mt-6 text-white text-opacity-70 text-lg leading-relaxed">
            I am a 2nd-year Software Engineering student with expertise in
            full-stack development. Passionate about tackling real-world
            problems through projects, I am also exploring emerging fields like
            machine learning and cyber security.
          </p>
        </section>

        {/* Experience */}
        <section id="experience" className="px-6 md:ml-[120px] mt-[100px]">
          <h2 className="font-bold text-3xl md:text-6xl">Experience</h2>
          <div className="mt-8 space-y-10">
            <div className="p-6 border-l-4 border-[#5454D4]">
              <h3 className="font-semibold text-xl md:text-2xl">
                Intern Software Tester
              </h3>
              <p className="text-gray-400 text-sm">K TREE CORPORATION CO., LTD. · May 2024</p>
              <p className="mt-2 text-white text-opacity-70">
                Contributed to the Yak Software System, focusing on system
                stability and performance improvement.
              </p>
              <ul className="mt-4 list-disc list-inside text-white">
                <li>
                  Created requirement-based diagrams in LucidChart to streamline
                  and organize the testing workflow during the planning phase.
                </li>
                <li>
                  Utilized Jira for efficient bug tracking and reporting,
                  ensuring clear communication across software iterations.
                </li>
              </ul>
            </div>
            <div className="p-6 border-l-4 border-[#5454D4]">
              <h3 className="font-semibold text-xl md:text-2xl">Teaching Assistant</h3>
              <p className="text-gray-400 text-sm">
                King Mongkut's Institute of Technology Ladkrabang · July 2024 –
                November 2024
              </p>
              <p className="mt-2 text-white text-opacity-70">
                Supported students in learning Python programming and provided
                assistance in coursework and projects.
              </p>
              <ul className="mt-4 list-disc list-inside text-white">
                <li>
                  Guided students through Python programming concepts, helping
                  them debug code and understand best practices.
                </li>
                <li>
                  Encouraged a collaborative learning environment, enabling
                  students to achieve academic success in programming courses.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skill" className="px-6 md:px-[80px] mt-[100px]">
          <h2 className="font-bold text-3xl md:text-6xl">Skills</h2>
          <div className="mt-8">
            {/* Programming Languages */}
            <h3 className="text-2xl md:text-4xl">Programming Languages</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">
            <SkillCard 
                src="/portfolio/assets/python.png"
                text="Python"
              />
              <SkillCard 
                src="/portfolio/assets/html.png"
                text="HTML"
              />
              <SkillCard 
                src="/portfolio/assets/css.png"
                text="CSS"
              />
              <SkillCard 
                src="/portfolio/assets/js.webp"
                text="Javascript"
              />
              <SkillCard 
                src="/portfolio/assets/cpp.png"
                text="C++"
              />
              <SkillCard 
                src="/portfolio/assets/c.png"
                text="C"
              />
              <SkillCard 
                src="/portfolio/assets/rust.png"
                text="Rust"
              />
              <SkillCard 
                src="/portfolio/assets/java.png"
                text="Java"
              />
              <SkillCard 
                src="/portfolio/assets/go.png"
                text="Go"
              />
            </div>

            {/* Frameworks */}
            <h3 className="mt-12 text-2xl md:text-4xl">Frameworks & Tools</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">
            <SkillCard 
                src="/portfolio/assets/react.webp"
                color="#5454D4"
                text="ReactJS"
              />
              <SkillCard 
                src="/portfolio/assets/express.png"
                color="#F04037"
                text="ExpressJS"
              />
              <SkillCard 
                src="/portfolio/assets/fastapi.svg"
                color="#FEDC5A"
                text="FastAPI"
              />
              <SkillCard 
                src="/portfolio/assets/sqlalchemy.png"
                color="#FEDC5A"
                text="SQLAlchemy"
              />
              <SkillCard 
                src="/portfolio/assets/tailwind.png"
                color="#5454D4"
                text="TailwindCSS"
              />
            </div>

            {/* Other Tools */}
            <h3 className="mt-12 text-2xl md:text-4xl">Other Tools</h3>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-8">
            <SkillCard 
                src="/portfolio/assets/postgres.png"
                color="#5454D4"
                text="PostgreSQL"
              />
              <SkillCard 
                src="/portfolio/assets/render.jpg"
                color="#F04037"
                text="Render"
              />
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="project" className="px-6 md:px-[120px] mt-[100px]">
          <h2 className="font-bold text-3xl md:text-6xl">Projects</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 justify-items-center">
            <ProjectCard
              subject="COMPUTER PROGRAMMING"
              src="/portfolio/assets/python.png"
              clip="/portfolio/assets/makethegrade_clip.mp4"
              name="Make the Grade"
              description="A grade calculation tool for KMITL Software Engineering students."
              color="84, 84, 212"
            />
            <ProjectCard
              subject="OBJECT-ORIENTED PROGRAMMING"
              src="/portfolio/assets/kiddoquest.png"
              clip="/portfolio/assets/kiddoquest_clip.mp4"
              name="KiddoQuest"
              description="An educational game designed for middle school students."
              color="240, 64, 55"
              link="https://github.com/S-rita/KiddoQuest"
            />
            <ProjectCard
                subject="WEB PROGRAMMING"
                src="/portfolio/assets/coboard.svg" 
                name="Coboard"
                description="A forum for KMITL Software Engineering students, combining forums and chat for seamless communication and collaboration." 
                color="254, 220, 90" 
                link="https://knppkp.me"
              />
              <ProjectCard
                subject="COMPUTER ARCHITECTURE AND ORGANIZATION"
                src="/portfolio/assets/chubbycat.png" 
                clip="/portfolio/assets/chubbycat_clip.mp4"
                name="Chubby Cat"
                description="A Game for Raspberry Pi uses Pygame, GPIO, and an MPU-6050 to guide a cat through obstacles with button jumps and gyro movement" 
                color="55, 212, 164" 
                link="https://github.com/S-rita/Chubby_Cat"
              />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#1c1c1f] text-center py-4 text-sm mt-10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Natavee Pecharat. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default LandingPage;
