"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const accordionItems = [
  { id: '01', title: 'MORE EFFICIENT PERFORMANCE MARKETING', description: 'We Combine Data-Driven Targeting With Bold Creative Strategy To Cut Through The Noise. Every Campaign Is Built To Perform, Not Just Exist.' },
  { id: '02', title: 'ABLE TO SCALE YOUR SPEND DUE TO MORE CREATIVES', description: 'More Creative Variants Means More Testing, Better Optimization, And Higher Returns. We Produce At Volume Without Compromising On Quality.' },
  { id: '03', title: 'UNDERSTANDING YOUR CONTENT WHAT WORKS AND WHAT DOESN\'T', description: 'We Analyze Every Piece Of Content Against Real Performance Data. What Resonates Gets Amplified. What Doesn\'t Gets Replaced. No Guesswork.' },
  { id: '04', title: 'MORE CONTENT, MORE ENGAGEMENT, MORE SALES', description: 'Consistent, High-Quality Content Keeps Your Audience Engaged And Your Pipeline Full. We Build Systems That Turn Attention Into Revenue.' },
  { id: '05', title: 'WHAT MAKES SHOWNOMORE DIFFERENT FROM OTHER AGENCIES', description: 'We\'re Not An Agency. We\'re A Creative Cult. We Don\'t Follow Trends Or Recycle Templates. Every Project Gets Original Thinking, Hands-On Execution, And A Team That Actually Cares About The Outcome.' },
  { id: '06', title: 'HOW DOES THE PARTNERSHIP PROCESS WORK', description: 'It Starts With A Conversation. We Learn Your Brand, Your Goals, And Your Pain Points. From There We Build A Tailored Strategy, Execute Relentlessly, And Iterate Based On Real Data. No Long Onboarding Decks.' },
  { id: '07', title: 'DO YOU WORK WITH STARTUPS OR ONLY ESTABLISHED BRANDS', description: 'Both. We\'ve Built Brands From Zero And Scaled Existing Ones. What Matters Isn\'t Your Size \u2014 It\'s Your Ambition And Willingness To Do Work That Actually Stands Out.' },
  { id: '08', title: 'WHAT IS YOUR APPROACH TO AI AND AUTOMATION', description: 'We Use AI As A Force Multiplier, Not A Replacement For Creativity. From Workflow Automation To Intelligent Content Recommendations, We Integrate AI Where It Saves Time And Amplifies Output Without Losing The Human Touch.' },
];

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start justify-start">

      {/* ===== HERO ===== */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/images/Train.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-between text-center p-4">
          <h1 className="text-5xl sm:text-[10rem] md:text-[12rem] lg:text-[16rem] p-0 leading-none font-extrabold text-[#cc0906] tracking-tighter">
            SHOWNOMORE
            <sup className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl align-super ml-2">&reg;</sup>
          </h1>

          <p className="text-lg md:text-2xl text-white font-medium leading-relaxed max-w-lg mt-4">
            Discover Our <span className='underline underline-offset-8 hover:text-[#cc0906] cursor-pointer'><a href="/capabilities">Creative & Artistic Cult.</a></span> And Our Commitment To No Mediocrity.
          </p>

          <div className='mt-8'>
            <a href="/about" className="flex justify-between items-center gap-6 text-lg md:text-2xl text-white font-bold leading-relaxed max-w-sm cursor-pointer hover:border-[#cc0906] border-2 border-white py-2 px-4 rounded-full transition-colors hover:bg-transparent hover:text-[#cc0906]">
              More About Us <span className='border-2 rounded-full p-2'><ArrowUpRight /></span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== MANIFESTO STATEMENT ===== */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-24 md:py-32">
        <div className="max-w-6xl">
          <p className="text-sm text-gray-500 mb-6">(Who We Are)</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-tight text-[#1a1a1a]">
            We&apos;re A <span className="italic font-bold text-[#cc0906]">Creative &amp; Artistic Cult</span> That
            Builds Brands Through Content, Strategy, And Performance. No Fluff. No Filler.
            Just Work That Moves The Needle.
          </h2>
        </div>
      </section>


      {/* ===== FAQ ACCORDION ===== */}
      <div id="about-us" className="w-full flex flex-col-reverse md:flex-row items-center justify-center py-24 md:py-32 px-6">
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
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-[30vh] md:min-h-[50vh] w-full md:w-1/2 flex items-start justify-end md:mt-0">
          <div className='text-5xl md:text-7xl font-bold text-gray-800 mt-16 md:mt-30 text-right'>
            FREQUENTLY ASKED <br />
            (QUESTIONS)
          </div>
        </div>
      </div>

      {/* ===== RECENT WORK + CONTACT ===== */}
      <div className="w-full py-16 my-0 flex flex-col md:flex-row justify-start items-start px-6">
        <div className="w-full md:w-1/2 flex flex-col items-start pr-8">
          <p className="text-2xl text-gray-700 font-medium mb-4">CURRENTLY MAKING <br /> SUMMER PLANS.</p>
          <Image
            src="/images/Summer.jpg"
            alt="Summer Plans"
            width={448}
            height={560}
            className="w-full h-auto object-cover max-w-md"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around items-start mt-12 md:mt-0">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <h3 className="text-5xl font-bold text-gray-800 mb-4">(Recently)</h3>
            <p className="text-2xl text-gray-700 leading-relaxed mb-4">
              We&apos;re Officially Establishing Our First <br />
              Development Team In Delhi.<br />
              Through This, We Expand Our <br />
              Capabilities, Opportunities, And <br />
              Talent. <a href="https://www.linkedin.com/company/shownomore/jobs/" className="text-[#cc0906] hover:underline underline-offset-8 cursor-pointer">View Open Roles &rarr;</a>
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              Recent Work : TheSquirrelsTV&apos;s X <br />
              (Formerly Twitter) Management,<br />
              And Automation, w/ Video Optimization <br />
              And Content Creation.
            </p>
          </div>
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
