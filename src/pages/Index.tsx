import { useState } from "react";
import Header from "@/components/kurskaya-bitva/Header";
import HeroSection from "@/components/kurskaya-bitva/HeroSection";
import OverviewSection from "@/components/kurskaya-bitva/OverviewSection";
import TimelineSection from "@/components/kurskaya-bitva/TimelineSection";
import CommandersSection from "@/components/kurskaya-bitva/CommandersSection";
import GallerySection from "@/components/kurskaya-bitva/GallerySection";
import Footer from "@/components/kurskaya-bitva/Footer";

// Import data
import { kurskayaBitvaFacts } from "@/data/kurskaya-bitva/facts";
import { kurskayaBitvaTimeline } from "@/data/kurskaya-bitva/timeline";
import {
  sovietCommanders,
  germanCommanders,
} from "@/data/kurskaya-bitva/commanders";
import { kurskayaBitvaGallery } from "@/data/kurskaya-bitva/gallery";

// Основной компонент страницы
const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <HeroSection />
      <OverviewSection facts={kurskayaBitvaFacts} />
      <TimelineSection events={kurskayaBitvaTimeline} />
      <CommandersSection
        sovietCommanders={sovietCommanders}
        germanCommanders={germanCommanders}
      />
      <GallerySection images={kurskayaBitvaGallery} />
      <Footer />
    </div>
  );
};

export default Index;
