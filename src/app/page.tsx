"use client";
import React from 'react';
import { useState } from 'react';

// Main App component
export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  interface accordionItems {
    id: string;
    title: string;
  }

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    { id: '01', title: 'MORE EFFICIENT PERFORMANCE MARKETING', description: 'We Help You Scale Your Performance Marketing With More Creatives, Better Targeting, And Data-Driven Strategies.' },
    { id: '02', title: 'ABLE TO SCALE YOUR SPEND DUE TO MORE CREATIVES', description: 'We Help You Scale Your Performance Marketing With More Creatives, Better Targeting, And Data-Driven Strategies.' },
    { id: '03', title: 'UNDERSTANDING YOUR CONTENT WHAT WORKS AND WHAT DOESN\'T', description: 'We Help You Scale Your Performance Marketing With More Creatives, Better Targeting, And Data-Driven Strategies.' },
    { id: '04', title: 'MORE CONTENT, MORE ENGAGEMENT, MORE SALES', description: 'We Help You Scale Your Performance Marketing With More Creatives, Better Targeting, And Data-Driven Strategies.' },
  ];

  return (
    // Set a container for the whole page
    <div className="flex flex-col items-start justify-start">

      {/* ============================================================
        START: MODIFIED HERO SECTION
        ============================================================
      */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for iOS devices
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          {/* IMPORTANT: Place your video file in the `public` directory.
            For example: `public/videos/your-video.mp4`
          */}
          <source src="/images/Train.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for Content */}
        <div className="relative z-10 flex flex-col items-center justify-between text-center p-4">
          {/* Main Heading: SHOWNOMORE */}
          <div className="text-5xl sm:text-[10rem] md:text-[12rem] lg:text-[16rem] p-0 leading-none font-extrabold text-[#cc0906] tracking-tighter">
            SHOWNOMORE
            <sup className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl align-super ml-2">&reg;</sup>
          </div>

          {/* Descriptive Text */}
          <p className="text-lg md:text-2xl text-white font-medium leading-relaxed max-w-lg mt-4">
            Discover Our <span className='underline underline-offset-8 hover:text-[#cc0906] cursor-pointer'><a href="/capabilities">Creative & Artistic Cult.</a></span> And Our Commitment To No Mediocrity.
          </p>

          {/* Clear Call to Action (CTA) */}
          <div className='mt-8'>
            <a href="/about" className="text-lg md:text-2xl text-white font-bold leading-relaxed max-w-sm cursor-pointer hover:underline hover:border-[#cc0906] underline-offset-8 border-2 border-white py-3 px-6 rounded-full transition-colors hover:bg-transparent hover:text-[#cc0906]">
              More (About) Us &rarr;
            </a>
          </div>
        </div>
      </div>

      <div id="about-us" className="w-full flex flex-col-reverse md:flex-row items-center justify-center mt-20 md:mt-25 px-6">
        <div className="min-h-[50vh] flex flex-col items-center justify-center w-full md:w-1/2">
          <div className="w-full max-w-full mx-auto">
            {accordionItems.map((item, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="flex justify-start items-center w-full py-4 text-left text-base font-normal text-gray-800 focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="mr-4 text-gray-500 text-2xl">{`[${item.id}]`}</span>
                  <span className='text-xl'>{item.title}</span>
                </button>
                {openIndex === index && (
                  <div className="pb-4 pl-12 pr-4 text-gray-700">
                    <p>{item.description}</p> {/* Added placeholder content */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-[50vh] w-full md:w-1/2 flex items-start justify-end md:mt-0">
          <div className='text-5xl md:text-7xl font-bold text-gray-800 mt-40 md:mt-30 text-right'>
            FREQUENTLY ASKED <br />
            (QUESTIONS)
          </div>
        </div>
      </div>


      {/* SUMMER PLANS */}
      <div className="w-full py-16 my-0 flex flex-col md:flex-row justify-start items-start px-6">
        {/* Left Column: Text and Image */}
        <div className="w-full md:w-1/2 flex flex-col items-start pr-8">
          <p className="text-2xl text-gray-700 font-medium mb-4">CURRENTLY MAKING <br /> SUMMER PLANS.</p>
          <img
            src="/images/Summer.jpg"
            alt="Summer Plans"
            className="w-full h-auto object-cover max-w-md"
          />
        </div>
        {/* Right Column: Recently and Contact */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around items-start mt-12 md:mt-0">
          {/* Recently Section */}
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">(Recently)</h3>
            <p className="text-2xl text-gray-700 leading-relaxed mb-4">
              We're Officially Establishing Our First <br />
              Development Team In Delhi.<br />
              Through This, We Expand Our <br />
              Capabilities, Opportunities, And <br />
              Talent. <a href="https://www.linkedin.com/company/shownomore/jobs/" className="text-[#cc0906] hover:underline underline-offset-8 cursor-pointer">View Open Roles &rarr;</a>
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Recent Work : TheSquirrelsTV's X <br />
              (Formerly Twitter) Management,<br />
              And Automation, w/ Video Optimization <br />
              And Content Creation.
            </p>
          </div>
          {/* Contact Section */}
          <div className="flex flex-col items-start">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">(Contact)</h3>
            <p className="text-2xl text-gray-700 leading-relaxed mb-4">
              New Business:<br />
              <a href="mailto:dev@shownomore.com" className="text-[#cc0906] hover:underline underline-offset-8 cursor-pointer text-md">dev@shownomore.com</a>
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-4">
              Address:<br />
              Karkardooma, DL 110092<br />
              Siolim, GA  403517
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Phone:<br />
              +91 96507 01275
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
