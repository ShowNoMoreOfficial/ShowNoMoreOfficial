"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './components/motion/Reveal';
import SplitReveal from './components/motion/SplitReveal';
import Magnetic from './components/motion/Magnetic';

const accordionItems = [
  { id: '01', title: 'MORE EFFICIENT PERFORMANCE MARKETING', description: 'We Combine Data-Driven Targeting With Bold Creative Strategy To Cut Through The Noise. Every Campaign Is Built To Perform, Not Just Exist.' },
  { id: '02', title: 'ABLE TO SCALE YOUR SPEND DUE TO MORE CREATIVES', description: 'More Creative Variants Means More Testing, Better Optimization, And Higher Returns. We Produce At Volume Without Compromising On Quality.' },
  { id: '03', title: 'UNDERSTANDING YOUR CONTENT WHAT WORKS AND WHAT DOESN\'T', description: 'We Analyze Every Piece Of Content Against Real Performance Data. What Resonates Gets Amplified. What Doesn\'t Gets Replaced. No Guesswork.' },
  { id: '04', title: 'MORE CONTENT, MORE ENGAGEMENT, MORE SALES', description: 'Consistent, High-Quality Content Keeps Your Audience Engaged And Your Pipeline Full. We Build Systems That Turn Attention Into Revenue.' },
  { id: '05', title: 'WHAT MAKES SHOWNOMORE DIFFERENT FROM OTHER AGENCIES', description: 'We\'re Not Your Typical Agency. We\'re A Creative Company. We Don\'t Follow Trends Or Recycle Templates. Every Project Gets Original Thinking, Hands-On Execution, And A Team That Actually Cares About The Outcome.' },
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
          <SplitReveal
            as="h1"
            mode="rise"
            type="chars"
            onScroll={false}
            className="text-5xl sm:text-[10rem] md:text-[12rem] lg:text-[16rem] p-0 leading-none font-extrabold text-[#cc0906] tracking-tighter"
          >
            SHOWNOMORE
            <sup className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl align-super ml-2">&reg;</sup>
          </SplitReveal>

          <Reveal stagger delay={0.5} y={20} className="flex flex-col items-center">
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed max-w-lg mt-4">
              Discover Our <span className='underline underline-offset-8 hover:text-[#cc0906] cursor-pointer'><a href="/capabilities">Creative & Artistic Company.</a></span> And Our Commitment To Exceptional Work.
            </p>

            <div className='mt-8'>
              <Magnetic strength={0.2}>
                <a href="/about" className="flex justify-between items-center gap-6 text-lg md:text-2xl text-white font-bold leading-relaxed max-w-sm cursor-pointer hover:border-[#cc0906] border-2 border-white py-2 px-4 rounded-full transition-colors hover:bg-transparent hover:text-[#cc0906]">
                  More About Us <span className='border-2 rounded-full p-2'><ArrowUpRight /></span>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===== WHO WE ARE ===== */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden">
        <div className="flex items-center justify-between mb-12">
          <Reveal as="p" className="text-sm text-gray-500">(Who We Are)</Reveal>
          <Reveal as="p" className="text-sm text-gray-500">Est. 2024 — Delhi &amp; Goa</Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Statement */}
          <div className="lg:col-span-7">
            <SplitReveal
              as="h2"
              type="lines"
              className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-[1.08] text-[#1a1a1a]"
            >
              We&apos;re A <span className="italic font-bold text-[#cc0906]">Creative &amp; Artistic Company</span> That Builds Brands Through Content, Strategy, And Performance. No Fluff. No Filler. Just Work That Moves The Needle.
            </SplitReveal>

            <div className="mt-10">
              <Magnetic strength={0.2}>
                <a href="/about" className="inline-flex items-center gap-4 text-lg md:text-xl font-bold text-[#1a1a1a] border-2 border-[#1a1a1a] py-2.5 px-5 rounded-full transition-colors hover:bg-[#1a1a1a] hover:text-[#F5F0E6] group">
                  More About Us
                  <span className="border-2 border-current rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45"><ArrowUpRight className="w-4 h-4" /></span>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Editorial image with scroll parallax */}
          <div className="lg:col-span-5">
            <Reveal className="relative">
              <div className="group relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/About.jpg"
                  alt="ShowNoMore at work"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                <span>The Studio</span>
                <span>[ 01 ]</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <div id="about-us" className="w-full flex flex-col-reverse md:flex-row items-center justify-center py-24 md:py-32 px-6">
        <div className="min-h-[50vh] flex flex-col items-center justify-center w-full md:w-1/2">
          <Reveal stagger={0.08} y={20} className="w-full max-w-full mx-auto">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-gray-300">
                  <button
                    aria-expanded={isOpen}
                    className="flex justify-start items-center w-full py-4 text-left text-base font-normal text-gray-800 focus:outline-none group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className={`mr-4 text-2xl transition-colors duration-300 ${isOpen ? 'text-[#cc0906]' : 'text-gray-500'}`}>{`[${item.id}]`}</span>
                    <span className='text-xl transition-colors duration-300 group-hover:text-[#cc0906]'>{item.title}</span>
                  </button>
                  {/* Always in the DOM; height animates via grid-template-rows. */}
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <div className={`pb-4 pl-12 pr-4 text-gray-700 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
        <div className="min-h-[30vh] md:min-h-[50vh] w-full md:w-1/2 flex items-start justify-end md:mt-0">
          <SplitReveal as="div" type="lines" className='text-5xl md:text-7xl font-bold text-gray-800 mt-16 md:mt-30 text-right'>
            FREQUENTLY ASKED <br />
            (QUESTIONS)
          </SplitReveal>
        </div>
      </div>

      {/* ===== RECENT WORK + CONTACT ===== */}
      <div className="w-full py-16 my-0 flex flex-col md:flex-row justify-start items-start px-6">
        <Reveal stagger={0.12} y={28} className="w-full md:w-1/2 flex flex-col items-start pr-8">
          <p className="text-2xl text-gray-700 font-medium mb-4">CURRENTLY MAKING <br /> SUMMER PLANS.</p>
          <div className="w-full max-w-md overflow-hidden">
            <Image
              src="/images/Summer.jpg"
              alt="Summer Plans"
              width={448}
              height={560}
              className="w-full h-auto object-cover"
            />
          </div>
        </Reveal>
        <Reveal stagger={0.12} y={28} className="w-full md:w-1/2 flex flex-col md:flex-row justify-around items-start mt-12 md:mt-0">
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

            <div className="mt-8">
              <Magnetic strength={0.2}>
                <a
                  href="mailto:dev@shownomore.com?subject=Book%20A%20Call"
                  className="inline-flex items-center gap-4 text-lg md:text-xl font-bold text-[#F5F0E6] bg-[#cc0906] py-3 px-6 rounded-full transition-colors duration-300 hover:bg-[#1a1a1a] group"
                >
                  Book A Call
                  <span className="border-2 border-current rounded-full p-1.5 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
