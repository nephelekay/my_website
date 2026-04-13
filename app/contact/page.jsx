import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="bg-[#737373] min-h-screen relative p-6 text-white">
      <div className="flex justify-end gap-4 p-6">
        <Link href="/">HOME</Link>
        <Link href="/projects">WORK</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </div>
      <div className="absolute top-25 left-0 w-full text-[13px]">
        <div className="relative w-full">
          <span className="absolute left-1/4 -translate-x-1/2 text-[16px] font-normal">
            NEPHELE KAY
          </span>
          <span className="absolute left-1/2 -translate-x-1/2">
            COMPUTER SCIENCE STUDENT
          </span>
          <span className="absolute left-3/4 -translate-x-1/2">
            CHICAGO, IL
          </span>
        </div>
      </div>
      <div className="absolute top-30 left-0 w-full text-[13px]">
        <div className="relative w-full">
          <span className="absolute left-1/2 -translate-x-1/2">
            AT UNIVERSITY OF ILLINOIS CHICAGO
          </span>
        </div>
      </div>
      <div className="absolute top-65 left-0 w-full text-[13px]">
        <div className="relative w-full">
          <a
            href="mailto:nephelekay1@gmail.com"
            className="absolute left-1/4 -translate-x-1/2"
          >
            EMAIL
          </a>

          <a
            href="https://linkedin.com/in/nephele-kay-6379403a4"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-1/2 -translate-x-1/2"
          >
            LINKEDIN
          </a>

          <a
            href="https://github.com/nephelekay"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-3/4 -translate-x-1/2"
          >
            GITHUB
          </a>
        </div>
      </div>
      <div className="absolute bottom-85 left-0 w-full text-[300px]">
        <div className="relative w-full">
          <span className="absolute left-1/4 -translate-x-1/2">N</span>
          <span className="absolute left-1/2 -translate-x-1/2">.</span>
          <span className="absolute left-3/4 -translate-x-1/2">K</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;