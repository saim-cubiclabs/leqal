"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/leqal.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center min-h-screen">
        <div className="max-w-4xl  ">
          <div className="space-y-8 ">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Best legal{" "}
              <span className="text-balance block text-[#B8956A]">
                solutions.
              </span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed max-w-xl">
              With decades of combined experience, our dedicated team of
              attorneys provides comprehensive legal solutions tailored to your
              unique needs. We fight for justice and protect your rights every
              step of the way.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToContact}
                className="bg-[#B8956A] text-white px-8 py-4 rounded-lg hover:bg-[#A07D54] transition-all font-medium flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("services");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-[#B8956A] text-[#B8956A] px-8 py-4 rounded-lg hover:bg-[#B8956A] hover:text-white transition-all font-medium"
              >
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
