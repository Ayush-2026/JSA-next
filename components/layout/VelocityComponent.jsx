'use client'
import React from 'react'
import ScrollVelocity from '../external_Components/ScrollVelocity'

const VelocityComponent = () => {
  return (
    <div>
      <div className="w-full py-2  overflow-hidden bg-[#2c608e]">
        <ScrollVelocity
          texts={[
            "🩺 Biggest Hospital in Nagpur...",
            "⚕️ Only Complete Diagnostic Center in SOUTH NAGPUR...",
          ]}
          className="custom-scroll-text text-2xl"
          velocity={20}
          separator="     "
          repeatc={1}
        />
      </div>
    </div>
  );
}

export default VelocityComponent
