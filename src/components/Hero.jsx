import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/video.mp4';
import heroPoster from '../assets/hero video/img2 (1).png';
import heroBg from '../assets/hero video/bg.png';

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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Typing effect logic
  useEffect(() => {
    let timer = setTimeout(() => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

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
    <section id="home" className="relative w-full min-h-screen flex items-center pt-28 md:pt-0 overflow-hidden">
      
      {/* Hero Background — BG.png with overlays stacked on top */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Light dark veil to keep text readable without hiding BG.png */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        {/* Subtle left-side fade so white text on left stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />
        {/* Bottom fade to blend into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />
      </div>

      {/* Content Container - SPLIT LAYOUT */}
      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-8 pb-16 md:pb-0">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full z-10 md:pt-[5%]">
          
          <h1 
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight leading-[1.1]"
          >
            Hi, I'm <span className="text-white">Shiwani</span> <br /> 
            <span className="text-emerald-500 min-h-[60px] inline-block pr-1 border-r-2 border-emerald-500 animate-[blink_1s_step-end_infinite]">
              {text}
            </span>
          </h1>

          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed"
          >
            A Computer Science Engineering student building fast, scalable web applications and exploring the future of Generative AI.
          </p>

          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full"
          >
            <a 
              href="#projects" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transform hover:-translate-y-0.5 inline-block text-center"
            >
              View My Work
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Beautiful Framed Video */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="300"
          className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[420px] aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-emerald-500/70 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] group bg-black/50 shrink-0 mt-8 md:mt-0 transition-all duration-500"
        >
          <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.6)] z-10" />
          
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

          <div 
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-20 flex flex-col items-center gap-1 cursor-pointer"
            onClick={toggleMute}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-emerald-500/30 bg-black/60 backdrop-blur-xl flex justify-center items-center hover:scale-105 hover:bg-emerald-500 hover:border-emerald-400 transition-all duration-300 shadow-xl text-emerald-400 hover:text-white group-hover/mute">
              {isMuted ? (
                 <svg className="w-4 h-4 md:w-5 md:h-5 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
                 </svg>
              ) : (
                 <svg className="w-4 h-4 md:w-5 md:h-5 transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                 </svg>
              )}
            </div>
            <span className="text-white text-[8px] md:text-[9px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-80 transition-opacity mt-1">
              {isMuted ? "Unmute" : "Mute"}
            </span>
          </div>
        </div>
      </div>

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
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}} />
    </section>
  );
};

export default Hero;