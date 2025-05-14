
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { TimelineData } from "@/data/kurskaya-bitva/timeline";

interface TimelineSectionProps {
  events: TimelineData[];
}

const TimelineSection = ({ events }: TimelineSectionProps) => {
  return (
    <section id="timeline" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-['Oswald'] text-center mb-12">ХРОНОЛОГИЯ СОБЫТИЙ</h2>
        
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {events.map((event, index) => (
            <AccordionItem key={index} value={`item-${index+1}`}>
              <AccordionTrigger className="text-lg font-medium">
                {event.date} — {event.title}
              </AccordionTrigger>
              <AccordionContent>
                {event.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TimelineSection;
