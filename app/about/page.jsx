import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="bg-black min-h-screen p-6">
      <div className="flex flex-row gap-4 justify-end p-6">
        <Link href="/" className="text-white">HOME</Link>
        <Link href="/projects" className="text-white">WORK</Link>
        <Link href="/about" className="text-white">ABOUT</Link>
        <Link href="/contact" className="text-white">CONTACT</Link>
      </div>

      <div className="flex justify-center w-full">
        <h1 className="text-white font-normal" style={{ fontSize: '16px' }}>
          NEPHELE KAY
        </h1>
      </div>

      <div className="flex justify-between items-start mt-10">
        <img
          src="/profile2.jpg"
          alt="Profile 2"
          width="300"
          className="relative"
        />

        <p
          className="text-white font-normal text-justify max-w-lg leading-relaxed ml-20"
          style={{ fontSize: '13px' }}
        >
          I'M A COMPUTER SCIENCE STUDENT AT UIC WHO ENJOYS LEARNING ABOUT TECHNOLOGY 
          AND BECOMING A BETTER PROGRAMMER. I'VE TAKEN CLASSES IN PYTHON, C, C++, 
          AND DATA STRUCTURES, WHERE I BUILT A STRONG FOUNDATION IN CODING AND ALGORITHMS. 
          I LIKE WORKING ON PROJECTS THAT CHALLENGE ME TO THINK LOGICALLY AND IMPROVE MY 
          PROBLEM-SOLVING SKILLS. ONE OF MY STRENGTHS IS BEING ABLE TO COME UP WITH MULTIPLE
          SOLUTIONS WHEN FACED WITH A PROBLEM. RIGHT NOW, I'M LOOKING FOR OPPORTUNITIES
          WHERE I CAN GAIN HANDS-ON EXPERIENCE AND CONTINUE GROWING AS A DEVELOPER. 
          OUTSIDE OF SCHOOL AND CODING, I LOVE ANIMALS, ESPECIALLY CATS, AND TRAVELLING 
          TO DIFFERENT PLACES.
        </p>
      </div>
    </div>
  );
};

export default About;