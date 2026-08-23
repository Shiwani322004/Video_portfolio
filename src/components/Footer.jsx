import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] text-[#d4d4d4] w-full overflow-hidden font-mono">

      {/* Subtle emerald glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 pt-16 md:pt-20">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-16 border-b border-white/10">

          {/* About / Role */}
          <div className="flex flex-col gap-2">
            <span className="text-[9px] uppercase tracking-[0.3em] text-emerald-400 mb-2">
              What I do
            </span>

            <p className="text-xs md:text-sm text-white font-medium">
              Frontend Web Development
            </p>

            <p className="text-xs md:text-sm text-white/60">
              React.js & Next.js
            </p>

            <p className="text-xs md:text-sm text-white/60">
              UI/UX Implementation
            </p>

            <p className="text-xs md:text-sm text-white/60">
              Exploring Gen AI
            </p>
          </div>


          {/* Social Links */}
          <div className="flex flex-col md:items-center gap-4">

            <span className="text-[9px] uppercase tracking-[0.3em] text-emerald-400">
              Connect
            </span>

            <div className="flex items-center gap-3">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shiwani-d-3594a7273/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-400 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4 text-white/70 group-hover:text-black transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V8.99H3.56v11.46z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Shiwani322004"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-white/70 group-hover:text-black transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .5z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:shiwanid078@gmail.com"
                aria-label="Email"
                className="group w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-400 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 text-white/70 group-hover:text-black transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>

            </div>
          </div>


          {/* Availability */}
          <div className="flex flex-col md:items-end gap-2">

            <span className="text-[9px] uppercase tracking-[0.3em] text-emerald-400 mb-2">
              Availability
            </span>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>

              <span className="text-xs md:text-sm text-white">
                Open to opportunities
              </span>
            </div>

            <p className="text-xs text-white/50">
              Worldwide · {currentYear}
            </p>

          </div>

        </div>


        {/* ================= HUGE NAME ================= */}
        <div className="relative py-20 md:py-28 overflow-hidden">

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[60%] h-[1px] bg-emerald-400/10" />
          </div>

          <h2
            className="relative text-[21vw] md:text-[17vw] lg:text-[15vw] leading-[0.75] font-sans font-black tracking-[-0.06em] text-center select-none text-[#f4f4f4]"
          >
            SHIWANI
          </h2>

          <p className="relative text-center mt-8 text-[9px] md:text-xs uppercase tracking-[0.35em] text-white/40">
            Build · Create · Explore
          </p>

        </div>


        {/* ================= BOTTOM SECTION ================= */}
        <div className="border-t border-white/10 py-8">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">

            {/* Copyright */}
            <div className="flex flex-col gap-2">

              <p className="text-[9px] md:text-[10px] text-white/50 tracking-wider">
                © {currentYear} Shiwani Devi
              </p>

              <p className="text-[9px] md:text-[10px] text-white/30 tracking-wider">
                Built with React · Crafted with curiosity
              </p>

            </div>


            {/* Quick Links */}
            <div className="flex items-center gap-6 text-[9px] md:text-[10px] uppercase tracking-widest">

              <a
                href="#home"
                className="text-white/50 hover:text-emerald-400 transition-colors duration-300"
              >
                Home
              </a>

              <a
                href="#projects"
                className="text-white/50 hover:text-emerald-400 transition-colors duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-white/50 hover:text-emerald-400 transition-colors duration-300"
              >
                Contact
              </a>

            </div>


            {/* Email */}
            <a
              href="mailto:shiwanid078@gmail.com"
              className="group flex items-center gap-2 text-[9px] md:text-[10px] tracking-wider text-white/50 hover:text-emerald-400 transition-colors duration-300"
            >

              <svg
                className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>

              shiwanid078@gmail.com

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;