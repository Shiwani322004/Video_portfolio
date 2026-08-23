import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Existing images from About section
import CSS from '../assets/about/css.jpeg';
import GitHub from '../assets/about/github.png';
import HTML from '../assets/about/html.png';
import JavaScript from '../assets/about/javascript.webp';
import MongoDB from '../assets/about/mongodb.jpeg';
import Next from '../assets/about/next.png';
import Node from '../assets/about/node.png';
import ReactIcon from '../assets/about/react.png';
import Tailwind from '../assets/about/tailwind.png';

const skillsData = [
  {
    number: '01',
    category: 'Languages',
    description: 'The core languages and web technologies I use to build modern interfaces.',
    skills: [
      { name: 'HTML5', image: HTML },
      { name: 'CSS3', image: CSS },
      { name: 'JavaScript', image: JavaScript },
    ],
  },
  {
    number: '02',
    category: 'Technologies & Frameworks',
    description: 'Modern frameworks and technologies for building scalable applications.',
    skills: [
      { name: 'React.js', image: ReactIcon },
      { name: 'Next.js', image: Next },
      { name: 'Node.js', image: Node },
      { name: 'MongoDB', image: MongoDB },
      { name: 'Tailwind CSS', image: Tailwind },
    ],
  },
  {
    number: '03',
    category: 'Tools & Platforms',
    description: 'Tools I use to develop, collaborate, deploy and bring ideas to life.',
    skills: [
      { name: 'GitHub', image: GitHub },
      { name: 'Git', image: null },
      { name: 'VS Code', image: null },
      { name: 'Vercel', image: null },
      { name: 'Canva', image: null },
      { name: 'Gen AI', image: null },
    ],
  },
  {
    number: '04',
    category: 'Additional',
    description: 'Skills that help me communicate, collaborate and lead beyond code.',
    skills: [
      { name: 'Communication', image: null },
      { name: 'Content Writing', image: null },
      { name: 'Team Leadership', image: null },
      { name: 'Problem Solving', image: null },
    ],
  },
];

const TechnologyTrain = ({ skills }) => {
  // Duplicate the list so the marquee can loop seamlessly.
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="relative mt-10 w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.025]">

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#f8f8f8] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#f8f8f8] to-transparent" />

      {/* Moving technology train */}
      <motion.div
        className="flex w-max items-center gap-4 px-6 py-5"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex h-16 min-w-[130px] items-center gap-3 rounded-xl border border-black/10 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)]"
          >
            {skill.image ? (
              <img
                src={skill.image}
                alt={skill.name}
                className="h-9 w-9 rounded-lg object-contain"
              />
            ) : (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-[10px] font-bold text-white">
                {skill.name
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            )}

            <span className="whitespace-nowrap text-xs font-bold text-gray-800">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Manual scrollbar / horizontal interaction */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/5">
        <div className="h-full w-1/3 rounded-full bg-emerald-500/70" />
      </div>
    </div>
  );
};

const SkillCard = ({ skill, index, progress }) => {
  /*
    Each card receives a vertical/scale transform based on scroll progress.
    This creates a clean deck-reveal effect — no rotation, cards stay straight.
    Ranges are narrower than before so the deck responds a bit faster to scroll.
  */

  const start = index * 0.15;
  const end = start + 0.25;

  const y = useTransform(
    progress,
    [start, end],
    [index === 0 ? 0 : 110, 0]
  );

  const scale = useTransform(
    progress,
    [start, end],
    [index === 0 ? 1 : 0.94, 1]
  );

  const opacity = useTransform(
    progress,
    [Math.max(0, start - 0.06), end],
    [index === 0 ? 1 : 0.6, 1]
  );

  // Soft emerald glow that intensifies as the card comes into focus.
  const glowOpacity = useTransform(
    progress,
    [Math.max(0, start - 0.06), end],
    [0, 0.55]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
      }}
      className="sticky top-24"
    >
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[2rem] border border-black/10 bg-white p-2 shadow-[0_25px_80px_rgba(0,0,0,0.10)]">

        {/* Emerald active glow, scroll-linked */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.4rem] bg-emerald-500/20 blur-2xl"
        />

        {/* Emerald edge glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent transition-colors duration-500 hover:border-emerald-500/60" />

        <div className="relative overflow-hidden rounded-[1.6rem] bg-[#f8f8f8] p-7 md:p-12">

          {/* Decorative emerald glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative z-10">

            {/* Top information */}
            <div className="flex items-start justify-between gap-6">

              <div>
                <h3 className="text-3xl font-black tracking-tight text-black md:text-5xl">
                  {skill.category}
                </h3>

                <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-gray-500 md:text-base">
                  {skill.description}
                </p>
              </div>

              {/* Large decorative number — kept, subtle and low-opacity */}
              <div className="hidden select-none text-6xl font-black leading-none text-black/[0.04] md:block md:text-8xl">
                {skill.number}
              </div>
            </div>

            {/* Technology train */}
            <TechnologyTrain skills={skill.skills} />

            {/* Skill names */}
            <div className="mt-6 flex flex-wrap gap-2">
              {skill.skills.map((item) => (
                <span
                  key={item.name}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-600"
                >
                  {item.name}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white py-24 md:py-32"
    >

      {/* Subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.035) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Emerald background glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-24"
        >
          <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-500 shadow-sm">
            Technical Stack
          </div>

          <h2 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-black md:text-6xl">
            Technologies
            <span className="text-emerald-500"> I Work With</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm font-medium leading-relaxed text-gray-500 md:text-base">
            A combination of development technologies, modern frameworks,
            tools and creative skills that I use to build digital experiences.
          </p>
        </motion.div>

        {/* Deck of cards */}
        <div className="relative">

          {/* Cards */}
          <div className="flex flex-col gap-8 md:gap-0">

            {skillsData.map((skill, index) => (
              <div
                key={skill.category}
                className="min-h-[430px] md:min-h-[520px]"
              >
                <SkillCard
                  skill={skill}
                  index={index}
                  progress={scrollYProgress}
                />
              </div>
            ))}

          </div>

        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400"
        >
          <span className="h-px w-12 bg-emerald-500/40" />
          Scroll through my stack
          <span className="h-px w-12 bg-emerald-500/40" />
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;