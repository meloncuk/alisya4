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
  const Blossom = ({ x, y, scale = 1, opacity = 1 }) => (
    <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
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
      {/* Sol ana dal */}
      <svg className="absolute -left-10 top-2 w-[300px] sm:w-[370px] md:w-[520px] lg:w-[650px] h-auto opacity-[0.62]"
           viewBox="0 0 650 470" fill="none">
        <path d="M-25 42 C80 66 123 116 183 166 C245 217 306 226 395 278 C467 320 520 355 667 420"
              stroke="#826957" strokeWidth="4" strokeLinecap="round"/>
        <path d="M130 121 C143 77 170 45 211 18 M243 213 C281 167 306 125 311 78 M394 278 C432 243 472 218 516 205 M487 334 C525 306 561 290 604 286"
              stroke="#826957" strokeWidth="2.4" strokeLinecap="round"/>
        <Blossom x={91} y={79} scale={1.05}/><Blossom x={145} y={111} scale={0.8}/>
        <Blossom x={210} y={20} scale={1}/><Blossom x={244} y={211} scale={1.08}/>
        <Blossom x={310} y={80} scale={0.85}/><Blossom x={395} y={278} scale={1}/>
        <Blossom x={516} y={205} scale={0.9}/><Blossom x={486} y={334} scale={0.82}/>
        <Blossom x={604} y={286} scale={0.9}/>
      </svg>

      {/* Sağ alt dal */}
      <svg className="absolute -right-8 -bottom-8 w-[270px] sm:w-[340px] md:w-[480px] lg:w-[590px] h-auto opacity-[0.56]"
           viewBox="0 0 590 430" fill="none">
        <path d="M615 405 C514 372 470 329 414 286 C354 240 298 219 216 171 C147 131 91 86 -20 47"
              stroke="#826957" strokeWidth="4" strokeLinecap="round"/>
        <path d="M469 329 C508 286 527 248 527 204 M344 236 C372 194 381 153 372 112 M216 171 C176 193 147 223 128 259 M109 96 C83 111 62 130 46 153"
              stroke="#826957" strokeWidth="2.4" strokeLinecap="round"/>
        <Blossom x={527} y={205} scale={0.95}/><Blossom x={469} y={329} scale={1.08}/>
        <Blossom x={372} y={113} scale={0.82}/><Blossom x={344} y={236} scale={1}/>
        <Blossom x={216} y={171} scale={0.9}/><Blossom x={128} y={259} scale={0.82}/>
        <Blossom x={109} y={96} scale={0.85}/><Blossom x={46} y={153} scale={0.72}/>
      </svg>

      {/* PC geniş ekran için orta boşluğu dolduran çok hafif iki ince dal */}
      <svg className="hidden md:block absolute left-[31%] -top-4 w-[310px] lg:w-[390px] h-auto opacity-[0.32]"
           viewBox="0 0 390 155" fill="none">
        <path d="M0 25 C78 39 130 65 194 75 C261 86 315 82 390 127"
              stroke="#927866" strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M126 61 C144 38 163 23 190 10 M291 92 C315 69 337 58 364 53"
              stroke="#927866" strokeWidth="1.5" strokeLinecap="round"/>
        <Blossom x={82} y={43} scale={0.68}/><Blossom x={190} y={11} scale={0.7}/>
        <Blossom x={260} y={84} scale={0.62}/><Blossom x={364} y={53} scale={0.7}/>
      </svg>

      <svg className="hidden lg:block absolute right-[27%] bottom-2 w-[300px] h-auto opacity-[0.24]"
           viewBox="0 0 330 130" fill="none">
        <path d="M330 112 C260 92 215 78 164 66 C108 52 65 33 0 18"
              stroke="#927866" strokeWidth="2" strokeLinecap="round"/>
        <Blossom x={268} y={94} scale={0.58}/><Blossom x={164} y={66} scale={0.64}/>
        <Blossom x={68} y={34} scale={0.58}/>
      </svg>

      <span className="absolute left-[25%] top-[31%] w-2 h-4 rounded-full bg-[#DFA08E]/35 rotate-[42deg]" />
      <span className="absolute right-[31%] top-[20%] w-2 h-4 rounded-full bg-[#E7B0A0]/30 -rotate-[30deg]" />
      <span className="hidden md:block absolute left-[47%] bottom-[16%] w-2 h-4 rounded-full bg-[#DFA08E]/25 rotate-[58deg]" />
      <span className="hidden md:block absolute right-[44%] top-[44%] w-1.5 h-3 rounded-full bg-[#E7B0A0]/25 -rotate-[48deg]" />
    </div>
  );
}

function NumberReveal({ num }) {
  return (
    <NumberReveal num={step.num} />
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