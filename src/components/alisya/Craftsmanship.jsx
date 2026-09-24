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

export default function Craftsmanship() {
  return (
    <section id="vakmanschap" className="relative py-24 md:py-32 bg-muted grain overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-12 h-[2px] w-80 origin-left rotate-[24deg] bg-accent/20" />
        <div className="absolute left-20 top-28 h-24 w-[2px] -rotate-[34deg] bg-accent/15" />
        <div className="absolute left-40 top-40 h-20 w-[2px] -rotate-[50deg] bg-accent/15" />
        <div className="absolute left-16 top-20 h-5 w-5 rounded-full border border-accent/20" />
        <div className="absolute left-44 top-36 h-4 w-4 rounded-full border border-accent/20" />
        <div className="absolute left-64 top-52 h-6 w-6 rounded-full border border-accent/15" />

        <div className="absolute -right-28 bottom-20 h-[2px] w-96 origin-right -rotate-[22deg] bg-accent/20" />
        <div className="absolute right-24 bottom-36 h-24 w-[2px] rotate-[38deg] bg-accent/15" />
        <div className="absolute right-52 bottom-52 h-20 w-[2px] rotate-[48deg] bg-accent/15" />
        <div className="absolute right-16 bottom-28 h-5 w-5 rounded-full border border-accent/20" />
        <div className="absolute right-48 bottom-48 h-4 w-4 rounded-full border border-accent/20" />
        <div className="absolute right-72 bottom-64 h-6 w-6 rounded-full border border-accent/15" />
      </div>
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