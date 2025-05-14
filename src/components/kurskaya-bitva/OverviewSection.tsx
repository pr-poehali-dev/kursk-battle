
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { FactData } from "@/data/kurskaya-bitva/facts";

interface OverviewSectionProps {
  facts: FactData[];
}

const OverviewSection = ({ facts }: OverviewSectionProps) => {
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-['Oswald'] text-center mb-12">ОСНОВНЫЕ ФАКТЫ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name={fact.icon} className="mr-2 text-[#6E59A5]" fallback="Info" />
                  {fact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{fact.content}</p>
                {fact.additionalContent && <p>{fact.additionalContent}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
