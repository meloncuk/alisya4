import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Voorbereiding",
    desc: "Elk meesterwerk begint met een leeg doek. Wij ontstaan reinigen, schuren en gronden — de basis voor een afwerking die jaren meegaat.",
  },
  {
    num: "02",
    title: "Precisie",
    desc: "Strakke lijnen, naadloze overgangen. Onze vakmensen werken met uiterste concentratie en het fijnste gereedschap om elk detail recht te doen.",
  },
  {
    num: "03",
    title: "Perfectie",
    desc: "Duurzame, milieubewuste verf met diepe pigmenten. Het resultaat: een oppervlak dat niet alleen mooi is, maar ook blijft.",
  },
];


function SakuraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Left branch */}
      <svg className="absolute -left-8 top-8 w-[310px] sm:w-[390px] md:w-[500px] h-auto opacity-70"
           viewBox="0 0 500 720" fill="none">
        <path d="M-15 75 C90 120, 98 230, 185 278 C255 316, 242 410, 342 472 C390 502, 428 575, 505 625"
              stroke="#806754" strokeWidth="5" strokeLinecap="round"/>
        <path d="M177 274 C145 222, 145 170, 174 112 M247 399 C303 360, 330 305, 337 246 M342 472 C306 516, 298 565, 314 617"
              stroke="#806754" strokeWidth="3" strokeLinecap="round"/>
        {[[77,150],[111,204],[171,119],[185,278],[225,330],[285,371],[335,251],[342,472],[315,614],[405,539],[458,589]].map(([x,y],i)=>(
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="14" fill="#d58b73"/>
            <circle cx="-12" cy="-4" r="11" fill="#e7aa94"/>
            <circle cx="11" cy="-6" r="11" fill="#efb8a4"/>
            <circle cx="-6" cy="11" r="10" fill="#e9a38c"/>
            <circle cx="7" cy="10" r="10" fill="#f0b7a2"/>
            <circle r="3.5" fill="#9c634f"/>
          </g>
        ))}
      </svg>

      {/* Right branch */}
      <svg className="absolute -right-10 bottom-0 w-[280px] sm:w-[360px] md:w-[470px] h-auto opacity-60"
           viewBox="0 0 500 720" fill="none">
        <path d="M520 690 C422 642, 418 550, 342 502 C272 458, 294 373, 202 316 C145 280, 105 191, 5 130"
              stroke="#806754" strokeWidth="5" strokeLinecap="round"/>
        <path d="M344 503 C390 466, 406 412, 395 354 M202 316 C242 276, 256 226, 242 176 M120 241 C81 261, 55 298, 43 341"
              stroke="#806754" strokeWidth="3" strokeLinecap="round"/>
        {[[432,608],[390,552],[345,502],[394,358],[291,405],[204,316],[242,179],[151,267],[103,207],[53,157],[44,339]].map(([x,y],i)=>(
          <g key={i} transform={`translate(${x} ${y})`}>
            <circle r="14" fill="#d58b73"/>
            <circle cx="-12" cy="-4" r="11" fill="#e7aa94"/>
            <circle cx="11" cy="-6" r="11" fill="#efb8a4"/>
            <circle cx="-6" cy="11" r="10" fill="#e9a38c"/>
            <circle cx="7" cy="10" r="10" fill="#f0b7a2"/>
            <circle r="3.5" fill="#9c634f"/>
          </g>
        ))}
      </svg>

      {/* a few petals toward the center */}
      <span className="absolute left-[25%] top-[22%] w-3 h-5 rounded-full bg-[#d58b73]/40 rotate-[35deg]" />
      <span className="absolute right-[28%] top-[43%] w-3 h-5 rounded-full bg-[#e7aa94]/45 -rotate-[30deg]" />
      <span className="absolute left-[31%] bottom-[18%] w-2.5 h-4 rounded-full bg-[#d58b73]/35 rotate-[55deg]" />
    </div>
  );
}

export default function Craftsmanship() {
  return (
    <section id="vakmanschap" className="relative py-24 md:py-32 bg-muted grain overflow-hidden">
      <SakuraBackground />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Vakmanschap</span>
          <h2 className="font-heading text-4xl md:text-6xl mt-4 max-w-2xl text-balance">
            Waarom Alisya anders is
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start"
            >
              <div className="md:col-span-5 relative">
                <span className="font-heading text-7xl md:text-9xl leading-none relative inline-block">
                  <span className="relative z-10 text-foreground/15">{step.num}</span>
                  <motion.span
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 overflow-hidden"
                  >
                    <span
                      className="font-heading text-7xl md:text-9xl leading-none block"
                      style={{ color: "hsl(18 49% 51%)" }}
                    >
                      {step.num}
                    </span>
                  </motion.span>
                </span>
              </div>
              <div className="md:col-span-7 md:pt-4">
                <h3 className="font-heading text-3xl md:text-5xl mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}