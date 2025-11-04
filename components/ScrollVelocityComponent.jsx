'use client'
import React from 'react'
import ScrollVelocity from '@/external components/ScrollVelocity';

const ScrollVelocityComponent = () => {
  return (
    <div className="w-full py-2 mt-2 overflow-hidden bg-[#2c608e]">
      <ScrollVelocity
        texts={[
          "🩺 Biggest Hospital in Nagpur",
          "⚕️ Only Complete Diagnostic Center in SOUTH NAGPUR",
        ]}
        className="custom-scroll-text text-2xl"
        velocity={20}
        separator="     "
        repeatc={1}
      />
    </div>
  );
}

export default ScrollVelocityComponent
