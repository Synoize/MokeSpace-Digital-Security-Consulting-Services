import { CheckCircle } from "lucide-react";

import React from 'react'

const ChooseSection = () => {
  return (
    <div>
      <section className="bg-[#1E1E1E] text-white py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Top Button */}
        <div className="flex justify-center mb-6">
          <button className="px-5 py-2 rounded-full border border-[#FF6600] text-[#FF6600] bg-transparent hover:bg-[#FF6600]/10 transition">
            <CheckCircle className="inline-block w-4 h-4 mr-2 text-[#FF6600]" />
            Why Choose Us
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-gray-200">
          Why we are your best choice
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 " >
          {/* Feature Card */}
          {[
            "Expert team with 10+ years experience",
            "24/7 support and maintenance",
            "Cutting-edge technology stack",
            "Agile development methodology",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#242424] border border-[#2C2C2C] rounded-2xl p-6 hover:bg-[#2B2B2B] transition cursor-pointer"
            >
              <div className="bg-[#FF6600]/10 p-3 rounded-full">
                <CheckCircle className="text-[#FF6600] w-6 h-6" />
              </div>
              <p className="text-gray-200 text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ChooseSection
