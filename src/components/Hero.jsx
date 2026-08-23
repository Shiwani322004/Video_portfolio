import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import heroVideo from '../assets/hero video/video.mp4';
import heroPoster from '../assets/hero video/img2 (1).png';
import heroBg from '../assets/hero video/bg.png';
import resume from '../assets/hero video/resume.pdf';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // Typing effect state
  const phrases = [
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Aspiring Full-Stack Developer",
    "Building Modern Web Applications",
    "Exploring Gen AI",
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  // Typing effect logic
  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (isDeleting) {
        setTypingSpeed(40);
      } else {
        setTypingSpeed(75);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(400);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  // Toggle video mute/unmute
  const toggleMute = (e) => {
    e.stopPropagation();

    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;

      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);

      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center pt-28 md:pt-0 overflow-hidden"
    >
      {/* =====================================================
          HERO BACKGROUND
      ====================================================== */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Light dark veil to keep text readable */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Left-side fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-8 pb-16 md:pb-0">

        {/* =================================================
            LEFT SIDE — TEXT & BUTTONS
        ================================================== */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full z-10 md:pt-[5%]">

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-[1.1]"
          >
            Hi, I'm <span className="text-white">Shiwani</span>
            <br />

            <span className="text-emerald-500 min-h-[60px] inline-block pr-1 border-r-2 border-emerald-500 animate-[blink_1s_step-end_infinite]">
              {text}
            </span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed"
          >
            A Computer Science Engineering student building fast, scalable web applications and exploring the future of Generative AI.
          </p>

          {/* Hero Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* View My Work */}
            <a
              href="#projects"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5 inline-block text-center"
            >
              View My Work
            </a>

            {/* Contact Me */}
            <a
              href="#contact"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE — VIDEO + RESUME
        ================================================== */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="relative flex flex-col items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[420px] shrink-0 mt-8 md:mt-0"
        >
          {/* ================= VIDEO CARD ================= */}
          <div className="relative w-full aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-emerald-500/70 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] group bg-black/50 transition-all duration-500">

            {/* Inner shadow */}
            <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] z-10" />

            {/* Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              poster={heroPoster}
              className="w-full h-full object-cover z-0 transition-transform duration-1000 group-hover:scale-[1.03]"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* ================= MUTE / UNMUTE SYMBOL ================= */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="absolute bottom-5 right-5 md:bottom-7 md:right-7 z-20 text-white/80 hover:text-emerald-400 transition-all duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] hover:scale-110 focus:outline-none"
            >
              {isMuted ? (
                /* Muted */
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z"
                  />
                </svg>
              ) : (
                /* Unmuted */
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* =================================================
              DOWNLOAD RESUME
          ================================================== */}
          <a
            href={resume}
            download="Shiwani-Devi-Resume.pdf"
            className="mt-6 px-7 py-3 rounded-full bg-emerald-500 text-white text-sm font-bold inline-flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5"
          >
            {/* Download Icon */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
              />
            </svg>

            Download Resume
          </a>
        </div>
      </div>

      {/* =====================================================
          SCROLL DOWN INDICATOR
      ====================================================== */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-emerald-500/50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* =====================================================
          TYPING CURSOR ANIMATION
      ====================================================== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes blink {
              50% {
                border-color: transparent;
              }
            }
          `,
        }}
      />
    </section>
  );
};

export default Hero;