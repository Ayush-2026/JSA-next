'use client'
import React from 'react'
import Typewriter from 'typewriter-effect'
import GradientText from "../src/external components/GradientText";


const TypeWriterEffect = () => {
  return (
    <>
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className=" text-xs font-montserrat overflow-hidden mb-3 mt-2 px-2 sm:text-2xl md:text-3xl lg:text-4xl text-center leading-snug"
      >
        <Typewriter
          options={{
            strings: [
              "ONLY Complete Diagnostic center in SOUTH NAGPUR.",
              "Biggest Hospital in Nagpur.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </GradientText>
    </>
  );
}

export default TypeWriterEffect
