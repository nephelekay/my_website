import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="bg-[#203B8F] min-h-screen relative p-6">
      <div className="flex flex-col items-center mb-110">
        <div className="w-full flex justify-end gap-4 p-6">
          <Link href="/projects" className="text-black font-normal" style={{ fontSize: '18px' }}>
            WORK
          </Link>
          <Link href="/about" className="text-black font-normal" style={{ fontSize: '18px' }}>
            ABOUT
          </Link>
          <Link href="/contact" className="text-black font-normal" style={{ fontSize: '18px' }}>
            CONTACT
          </Link>
        </div>
        <div className="flex justify-center w-full">
          <h1 className="text-black font-normal" style={{ fontSize: '16px' }}>
            NEPHELE KAY
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-start relative mb-52">
        <h1 className="text-black font-normal" style={{ fontSize: '13px' }}>
          JANUARY 2026
        </h1>

        <p className="text-black font-normal text-justify max-w-lg leading-relaxed ml-20" style={{ fontSize: '13px' }}>
          RULE-BASED GAME AI IN C++ (CONNECT FOUR): <br />
          - DEVELOPED A C++ GAME ENGINE WITH AN AI OPPONENT USING LAYERED OFFENSE. <br />
          - THE OPPONENT GRADUALLY BECOMES MORE ADEPT AT BLOCKING THE USER'S ATTEMPTS TO CONNECT FOUR TOKENS, AND SUCCESSFULLY CONNECTING FOUR HORIZONTALLY, VERTICALLY, AND DIAGONALLY. <br />
          - DESIGNED SEVERAL LEVELS WITH DIFFICULTY SCALING ACROSS 20 LEVELS. <br />
          TOOLS USED: C++, OOP, CONTROL STRUCTURES, ALGORITHM DESIGN
        </p>

        <img src="/prog1.jpg" alt="Project 1" width="400" className="relative" />
      </div>
      <div className="flex justify-between items-start relative">
        <h1 className="text-black font-normal" style={{ fontSize: '13px' }}>
          FEBRUARY 2026
        </h1>

        <p className="text-black font-normal text-justify max-w-lg leading-relaxed ml-20" style={{ fontSize: '13px' }}>
          PYTHON RUBIK'S CUBE ALGORITHM SIMULATOR: <br />
          - DEVELOPED A PYTHON PROGRAM THAT PRINTS A 3X3 RUBIK'S CUBE STATE IN THE CONSOLE AND ALLOWS USERS TO CONSTRUCT AND EXECUTE CUSTOM ALGORITHMS OF MOVES.<br />
          - DISPLAYS THE CUBE CONFIGURATION AFTER EACH MOVE, UPDATING THE STATE STEP-BY-STEP AS THE ALGORITHM RUNS.<br />
          - IMPLEMENTED FUNCTIONALITY TO CALCULATE THE ORDER OF A MOVE SEQUENCE, DETERMINING HOW MANY REPETITIONS FROM A SOLVED STATE ARE REQUIRED TO RETURN TO THE SOLVED CONFIGURATION.<br />
          - TOOLS USED: PYTHON, CONTROL STRUCTURES, ALGORITHM DESIGN, DATA STRUCTURES
        </p>

        <img src="/prog2.jpeg" alt="Project 2" width="400" className="relative" />
      </div>
    </div>
  );
};

export default Projects;