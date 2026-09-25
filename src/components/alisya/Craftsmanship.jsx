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
  const Blossom = ({ x, y, scale = 1 }) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="-8" rx="5.5" ry="8" fill="#E7B0A0" />
      <ellipse cx="7.5" cy="-2" rx="5.5" ry="8" transform="rotate(72 7.5 -2)" fill="#DFA08E" />
      <ellipse cx="4.5" cy="7" rx="5.5" ry="8" transform="rotate(144 4.5 7)" fill="#EDB9AA" />
      <ellipse cx="-4.5" cy="7" rx="5.5" ry="8" transform="rotate(216 -4.5 7)" fill="#E3A694" />
      <ellipse cx="-7.5" cy="-2" rx="5.5" ry="8" transform="rotate(288 -7.5 -2)" fill="#F0C1B4" />
      <circle r="2.6" fill="#A96F5A" />
    </g>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <svg className="absolute -left-8 -top-6 w-[270px] sm:w-[330px] md:w-[500px] lg:w-[570px] h-auto opacity-[0.58]"
           viewBox="0 0 430 390" fill="none">
        <path d="M-20 42 C70 58 104 94 153 139 C202 184 251 192 331 239 C363 258 389 282 432 306"
              stroke="#8D725F" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M111 105 C119 69 143 43 177 21 M201 176 C229 142 250 111 252 76 M314 230 C342 207 365 188 395 177"
              stroke="#8D725F" strokeWidth="2" strokeLinecap="round"/>
        <Blossom x={76} y={72} scale={1.0} />
        <Blossom x={139} y={78} scale={0.82} />
        <Blossom x={176} y={22} scale={0.9} />
        <Blossom x={207} y={175} scale={1.05} />
        <Blossom x={253} y={78} scale={0.76} />
        <Blossom x={315} y={230} scale={0.92} />
        <Blossom x={396} y={178} scale={0.78} />
        <circle cx="159" cy="132" r="3.2" fill="#C88B78"/>
        <circle cx="346" cy="248" r="2.8" fill="#C88B78"/>
      </svg>

      <svg className="absolute -right-5 -bottom-8 w-[220px] sm:w-[280px] md:w-[440px] lg:w-[510px] h-auto opacity-[0.50]"
           viewBox="0 0 380 330" fill="none">
        <path d="M390 294 C320 270 292 236 252 205 C214 175 176 158 111 121 C74 100 41 72 -12 52"
              stroke="#8D725F" strokeWidth="3" strokeLinecap="round"/>
        <path d="M276 224 C302 193 317 166 317 135 M181 161 C197 132 202 104 196 78 M103 117 C76 131 57 151 45 174"
              stroke="#8D725F" strokeWidth="1.9" strokeLinecap="round"/>
        <Blossom x={318} y={137} scale={0.82} />
        <Blossom x={274} y={222} scale={0.96} />
        <Blossom x={198} y={79} scale={0.72} />
        <Blossom x={181} y={160} scale={0.9} />
        <Blossom x={103} y={117} scale={0.8} />
        <Blossom x={45} y={174} scale={0.68} />
      </svg>

      <span className="absolute left-[28%] top-[24%] w-2 h-3.5 rounded-full bg-[#DFA08E]/30 rotate-[38deg]" />
      <span className="absolute right-[30%] bottom-[22%] w-2 h-3.5 rounded-full bg-[#E7B0A0]/25 -rotate-[28deg]" />

      {/* PC'de geniş alanı zarifçe dolduran küçük üst dal */}
      <svg className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-2 w-[340px] h-auto opacity-[0.25]"
           viewBox="0 0 360 125" fill="none">
        <path d="M18 18 C91 37 130 54 181 65 C235 77 286 74 343 103"
              stroke="#8D725F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M121 51 C139 32 154 19 176 10 M254 78 C275 60 292 49 314 44"
              stroke="#8D725F" strokeWidth="1.5" strokeLinecap="round"/>
        <Blossom x={74} y={35} scale={0.62} />
        <Blossom x={176} y={11} scale={0.66} />
        <Blossom x={224} y={73} scale={0.58} />
        <Blossom x={314} y={44} scale={0.62} />
      </svg>
      <span className="hidden lg:block absolute left-[43%] top-[18%] w-2 h-3.5 rounded-full bg-[#DFA08E]/25 rotate-[52deg]" />
      <span className="hidden lg:block absolute right-[40%] top-[30%] w-2 h-3.5 rounded-full bg-[#E7B0A0]/22 -rotate-[38deg]" />

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