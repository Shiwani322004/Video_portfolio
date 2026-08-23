import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

import IITLogo from '../assets/about/IIT1.jpg';
import CompanyLogo from '../assets/about/company.jpeg';

const TagCard = ({
  number,
  title,
  text,
  logo,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef
}) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useMotionValueEvent(pathLength, "change", (latest) => {
    if (!ref.current || !containerRef.current) return;

    const cardRect = ref.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const cardTopRelativeToContainer =
      cardRect.top - containerRect.top;

    const containerHeight = containerRect.height;

    // Trigger when the line tip is 50px into the card
    const triggerY = cardTopRelativeToContainer + 50;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= triggerY && !isActive) {
      setIsActive(true);
    } else if (lineTipY < triggerY && isActive) {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={ref}
      data-aos={aosType || "fade-up"}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative flex flex-col items-center hover:scale-[1.02] transition-all duration-700 z-10 ${
        className
      } ${
        isActive
          ? 'bg-emerald-500 border-emerald-400 shadow-[0_20px_50px_rgba(16,185,129,0.4)]'
          : 'bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
      }`}
    >

      {/* The hole punch */}
      <div className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] absolute top-4 border border-gray-300 z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-gray-800 rounded-full opacity-20"></div>
      </div>

      {/* Inner container */}
      <div
        className={`w-full h-full rounded-[1.5rem] mt-8 p-8 flex flex-col min-h-[220px] transition-colors duration-700 ${
          isActive ? 'bg-emerald-700/50' : 'bg-[#f4f4f4]'
        }`}
      >

        {/* Date */}
        <span
          className={`text-xl font-bold mb-4 font-serif italic transition-colors duration-700 ${
            isActive ? 'text-emerald-200' : 'text-gray-400'
          }`}
        >
          {number}
        </span>

        {/* Organization Logo + Heading */}
        <div className="flex items-start gap-3 mb-3">

          {/* Logo */}
          <div
            className={`w-11 h-11 min-w-[44px] rounded-lg overflow-hidden border flex items-center justify-center shadow-sm transition-all duration-700 ${
              isActive
                ? 'border-emerald-300 bg-white'
                : 'border-gray-200 bg-white'
            }`}
          >
            <img
              src={logo}
              alt="Organization logo"
              className="w-full h-full object-contain p-1"
            />
          </div>

          {/* Heading */}
          <h3
            className={`text-xl sm:text-2xl font-black tracking-tight leading-tight transition-colors duration-700 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>

        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed font-medium transition-colors duration-700 ${
            isActive ? 'text-emerald-100' : 'text-gray-500'
          }`}
        >
          {text}
        </p>

      </div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >

      <div className="max-w-6xl mx-auto relative md:h-[1350px]">

        {/* Header Content */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-16 md:mb-0"
        >
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            My Experience
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight relative">
            Internships & Professional Work

            {/* Hand-drawn arrow */}
            <svg
              className="absolute -bottom-10 right-10 w-12 h-12 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                className="hidden"
              />

              <path
                d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </h2>

          <p className="text-gray-500 text-base md:text-lg max-w-sm font-medium leading-relaxed">
            Gaining hands-on experience by collaborating with teams and developing real-world web applications.
          </p>
        </div>

        {/* Desktop SVG Animated Dashed Line */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
        >
          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="2"
            strokeDasharray="8 10"
          />

          <mask id="path-mask">
            <motion.path
              d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
              fill="none"
              stroke="white"
              strokeWidth="20"
              style={{ pathLength }}
            />
          </mask>

          <path
            d="M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8 10"
            mask="url(#path-mask)"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Mobile Animated Vertical Dashed Line */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="4"
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />

          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth="4"
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>

          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth="4"
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 w-full pt-4 md:pt-0 pb-12 md:pb-0">

          {/* Quore B2B Marketing */}
          <TagCard
            number="Sep '25 - Nov '25"
            title="Frontend Web Developer Intern | Quore B2B Marketing LLC"
            text="Collaborated on company projects, handling both group and independent tasks, and creating interactive UIs to enhance user experience using React.js, Next.js and Tailwind CSS."
            logo={CompanyLogo}
            className="md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6"
            aosType="fade-left"
            aosDelay="100"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* IIT Kanpur */}
          <TagCard
            number="Jun '25 - Jul '25"
            title="Student Research Associate | IIT Kanpur"
            text="Worked as a VLAB Intern, developing virtual laboratory experiment simulators using HTML, CSS and Javascript to enable interactive and remote learning for students."
            logo={IITLogo}
            className="md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6"
            aosType="fade-right"
            aosDelay="200"
            pathLength={pathLength}
            containerRef={containerRef}
          />

          {/* Hand-drawn end text */}
          <div
            data-aos="fade-in"
            data-aos-delay="600"
            className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6"
          >
            Turning ideas into reality!
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;