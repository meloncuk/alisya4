import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  { num: "01", title: "Voorbereiding", desc: "Elk meesterwerk begint met een leeg doek. Wij ontstaan reinigen, schuren en gronden — de basis voor een afwerking die jaren meegaat." },
  { num: "02", title: "Precisie", desc: "Strakke lijnen, naadloze overgangen. Onze vakmensen werken met uiterste concentratie en het fijnste gereedschap om elk detail recht te doen." },
  { num: "03", title: "Perfectie", desc: "Duurzame, milieubewuste verf met diepe pigmenten. Het resultaat: een oppervlak dat niet alleen mooi is, maar ook blijft." },
];

function Blossom({ x, y, scale = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${scale})`}>
    <ellipse cy="-8" rx="5.5" ry="8" fill="#E7B0A0"/><ellipse cx="7.5" cy="-2" rx="5.5" ry="8" transform="rotate(72 7.5 -2)" fill="#DFA08E"/><ellipse cx="4.5" cy="7" rx="5.5" ry="8" transform="rotate(144 4.5 7)" fill="#EDB9AA"/><ellipse cx="-4.5" cy="7" rx="5.5" ry="8" transform="rotate(216 -4.5 7)" fill="#E3A694"/><ellipse cx="-7.5" cy="-2" rx="5.5" ry="8" transform="rotate(288 -7.5 -2)" fill="#F0C1B4"/><circle r="2.6" fill="#A96F5A"/>
  </g>;
}

function SakuraBackground() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    <svg className="absolute -left-10 top-2 w-[300px] sm:w-[370px] md:w-[520px] lg:w-[650px] h-auto opacity-[0.62]" viewBox="0 0 650 470" fill="none">
      <path d="M-25 42 C80 66 123 116 183 166 C245 217 306 226 395 278 C467 320 520 355 667 420" stroke="#826957" strokeWidth="4" strokeLinecap="round"/><path d="M130 121 C143 77 170 45 211 18 M243 213 C281 167 306 125 311 78 M394 278 C432 243 472 218 516 205 M487 334 C525 306 561 290 604 286" stroke="#826957" strokeWidth="2.4" strokeLinecap="round"/>
      <Blossom x={91} y={79}/><Blossom x={145} y={111} scale={.8}/><Blossom x={210} y={20}/><Blossom x={244} y={211}/><Blossom x={310} y={80} scale={.85}/><Blossom x={395} y={278}/><Blossom x={516} y={205} scale={.9}/><Blossom x={604} y={286} scale={.9}/>
    </svg>
    <svg className="absolute -right-8 -bottom-8 w-[270px] sm:w-[340px] md:w-[480px] lg:w-[590px] h-auto opacity-[0.56]" viewBox="0 0 590 430" fill="none">
      <path d="M615 405 C514 372 470 329 414 286 C354 240 298 219 216 171 C147 131 91 86 -20 47" stroke="#826957" strokeWidth="4" strokeLinecap="round"/><path d="M469 329 C508 286 527 248 527 204 M344 236 C372 194 381 153 372 112 M216 171 C176 193 147 223 128 259" stroke="#826957" strokeWidth="2.4" strokeLinecap="round"/>
      <Blossom x={527} y={205}/><Blossom x={469} y={329}/><Blossom x={372} y={113} scale={.82}/><Blossom x={344} y={236}/><Blossom x={216} y={171} scale={.9}/><Blossom x={128} y={259} scale={.82}/>
    </svg>
    <svg className="hidden md:block absolute left-[32%] -top-3 w-[300px] lg:w-[390px] h-auto opacity-[0.30]" viewBox="0 0 390 155" fill="none"><path d="M0 25 C78 39 130 65 194 75 C261 86 315 82 390 127" stroke="#927866" strokeWidth="2.2" strokeLinecap="round"/><Blossom x={82} y={43} scale={.68}/><Blossom x={190} y={72} scale={.65}/><Blossom x={315} y={91} scale={.65}/></svg>
    <span style={{position:"absolute",left:"27%",top:"31%",width:8,height:16,borderRadius:"70% 30% 70% 30%",background:"#DFA08E",opacity:.35,transform:"rotate(42deg)"}}/>
    <span style={{position:"absolute",right:"31%",top:"20%",width:8,height:16,borderRadius:"70% 30% 70% 30%",background:"#E7B0A0",opacity:.30,transform:"rotate(-30deg)"}}/>

    {/* Masaüstünde orta alanı gerçekten dolduran, fakat yazıyı boğmayan çiçekli dal */}
    <svg className="hidden md:block" style={{position:"absolute",left:"18%",right:"18%",top:"18%",width:"64%",height:"64%",opacity:.22}} viewBox="0 0 900 360" fill="none">
      <path d="M-20 315 C120 260 185 210 285 198 C395 184 465 135 560 122 C675 106 760 64 925 22" stroke="#876D5B" strokeWidth="3" strokeLinecap="round"/>
      <path d="M180 222 C155 180 151 143 169 105 M362 170 C337 133 333 100 346 67 M610 111 C633 78 662 58 701 47 M745 73 C771 91 790 111 803 139" stroke="#876D5B" strokeWidth="1.8" strokeLinecap="round"/>
      <Blossom x={92} y={272} scale={.75}/><Blossom x={168} y={107} scale={.82}/><Blossom x={285} y={198} scale={.72}/>
      <Blossom x={346} y={68} scale={.72}/><Blossom x={468} y={135} scale={.78}/><Blossom x={610} y={111} scale={.8}/>
      <Blossom x={701} y={47} scale={.72}/><Blossom x={803} y={139} scale={.7}/><Blossom x={856} y={44} scale={.76}/>
    </svg>

    {/* Hafif pembe atmosfer */}
    <div className="hidden md:block" style={{position:"absolute",left:"22%",top:"22%",width:"56%",height:"55%",background:"radial-gradient(ellipse at center, rgba(231,176,160,.11), rgba(231,176,160,0) 68%)"}}/>

    {/* Görünür ama sakin düşen yapraklar */}
    {[
      ["17%","9%",0],["31%","4%",.55],["48%","10%",1.1],["66%","5%",.35],["82%","12%",1.45]
    ].map(([left,top,delay], i) => (
      <motion.span key={`petal-${i}`}
        initial={{opacity:0,y:-12,x:0,rotate:-15}}
        whileInView={{opacity:[0,.48,.34,0],y:[0,80,170,260],x:[0,16,-10,14],rotate:[-15,35,105,175]}}
        viewport={{once:true,amount:.12}}
        transition={{duration:6 + i*.35,delay,ease:"easeInOut"}}
        style={{position:"absolute",left,top,width:10,height:17,borderRadius:"70% 30% 70% 30%",background:i%2 ? "#E7B0A0" : "#DFA08E"}}
      />
    ))}
  </div>;
}

function NumberReveal({ num }) {
  return <span className="font-heading text-7xl md:text-9xl leading-none relative inline-block">
    <span className="text-foreground/20">{num}</span>
    <motion.span initial={{ clipPath: "inset(100% 0 0 0)" }} whileInView={{ clipPath: "inset(0% 0 0 0)" }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: .9, ease: [0.22,1,0.36,1] }} className="absolute inset-0" style={{ color: "hsl(18 49% 51%)" }}>{num}</motion.span>
  </span>;
}

export default function Craftsmanship() {
  return <section id="vakmanschap" className="relative py-24 md:py-32 bg-muted grain overflow-hidden">
    <SakuraBackground />
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }} className="mb-16 md:mb-24">
        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4">Ons proces</p><h2 className="font-heading text-5xl md:text-7xl">Waarom Alisya anders is</h2>
      </motion.div>
      <div className="space-y-16 md:space-y-20">
        {STEPS.map((step, index) => <motion.div key={step.num} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: index * .08 }} className="grid md:grid-cols-12 gap-6 md:gap-12 border-t border-foreground/10 pt-10">
          <div className="md:col-span-5"><NumberReveal num={step.num}/></div>
          <div className="md:col-span-7 md:pt-4"><h3 className="font-heading text-3xl md:text-5xl mb-4">{step.title}</h3><p className="text-lg text-muted-foreground max-w-xl leading-relaxed">{step.desc}</p></div>
        </motion.div>)}
      </div>
    </div>
  </section>;
}
