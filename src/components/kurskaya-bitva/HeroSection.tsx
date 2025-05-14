
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const scrollToOverview = () => {
    const el = document.getElementById("overview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-black text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600881017766-ae24e51d1d1f?q=80&w=1740')" }}
      ></div>
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-['Oswald'] animate-fade-in">КУРСКАЯ БИТВА</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in">
          5 июля — 23 августа 1943 года
        </p>
        <p className="text-lg mb-6 max-w-3xl mx-auto opacity-80 animate-fade-in">
          Одно из ключевых сражений Великой Отечественной войны,
          переломивших ход войны в пользу Советского Союза
        </p>
        <Button 
          className="bg-[#6E59A5] hover:bg-[#5D4A94] text-white mt-4 animate-fade-in"
          onClick={scrollToOverview}
        >
          Узнать больше <Icon name="ChevronDown" className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
