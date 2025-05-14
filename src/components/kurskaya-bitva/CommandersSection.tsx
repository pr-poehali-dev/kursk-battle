
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommanderData } from "@/data/kurskaya-bitva/commanders";

interface CommandersSectionProps {
  sovietCommanders: CommanderData[];
  germanCommanders: CommanderData[];
}

const CommandersSection = ({ sovietCommanders, germanCommanders }: CommandersSectionProps) => {
  return (
    <section id="commanders" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-['Oswald'] text-center mb-12">КОМАНДУЮЩИЕ</h2>
        
        <Tabs defaultValue="soviet" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="soviet">Советские командующие</TabsTrigger>
            <TabsTrigger value="german">Немецкие командующие</TabsTrigger>
          </TabsList>
          
          <TabsContent value="soviet" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sovietCommanders.map((commander, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{commander.name}</CardTitle>
                    <CardDescription>{commander.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{commander.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="german" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {germanCommanders.map((commander, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{commander.name}</CardTitle>
                    <CardDescription>{commander.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{commander.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CommandersSection;
