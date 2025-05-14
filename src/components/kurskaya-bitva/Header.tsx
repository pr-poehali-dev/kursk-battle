
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-[#1A1F2C] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold font-['Oswald']">КУРСКАЯ БИТВА</h1>
        <nav className="hidden md:flex space-x-6">
          <a 
            href="#overview" 
            className="hover:text-[#6E59A5] transition-colors"
            onClick={() => setActiveSection("overview")}
          >
            Обзор
          </a>
          <a 
            href="#timeline" 
            className="hover:text-[#6E59A5] transition-colors"
            onClick={() => setActiveSection("timeline")}
          >
            Хронология
          </a>
          <a 
            href="#commanders" 
            className="hover:text-[#6E59A5] transition-colors"
            onClick={() => setActiveSection("commanders")}
          >
            Командующие
          </a>
          <a 
            href="#gallery" 
            className="hover:text-[#6E59A5] transition-colors"
            onClick={() => setActiveSection("gallery")}
          >
            Галерея
          </a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Icon name="Menu" className="text-white" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
