"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Services from "@/components/Services";
import AdditionalServices from "@/components/AdditionalServices";
import ImpactInitiatives from "@/components/ImpactInitiatives";
import Contact from "@/components/Contact";
import { content } from "@/lib/content";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <Hero />
      {content.coreValues.map((value, index) => (
        <Section
          key={index}
          title={value.title}
          description={value.description}
          index={index}
        />
      ))}
      <Services />
      <AdditionalServices />
      <ImpactInitiatives />
      <Contact />
    </main>
  );
}
