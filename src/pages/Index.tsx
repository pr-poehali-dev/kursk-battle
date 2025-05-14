
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

// Основной компонент страницы
const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Навигация */}
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

      {/* Героический блок */}
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
            onClick={() => {
              const el = document.getElementById("overview");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Узнать больше <Icon name="ChevronDown" className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Основная информация */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Oswald'] text-center mb-12">ОСНОВНЫЕ ФАКТЫ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" className="mr-2 text-[#6E59A5]" />
                  Даты сражения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>5 июля - 23 августа 1943 года. Продолжалось 49 дней и завершилось решительной победой советских войск.</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" className="mr-2 text-[#6E59A5]" />
                  Место сражения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Район Курского выступа в Центральной России. В сражении участвовали территории современных Курской, Орловской и Белгородской областей.</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Users" className="mr-2 text-[#6E59A5]" />
                  Участники
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>С советской стороны - войска Центрального, Воронежского и Степного фронтов. С немецкой - группы армий "Центр" и "Юг".</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Tank" className="mr-2 text-[#6E59A5]" fallback="Shield" />
                  Силы сторон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>СССР: более 1,3 млн человек, около 20 тыс. орудий и минометов, 3400 танков, 2170 самолетов.</p>
                <p>Германия: около 900 тыс. человек, более 10 тыс. орудий и минометов, 2700 танков, 2050 самолетов.</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Swords" className="mr-2 text-[#6E59A5]" fallback="Sword" />
                  Ключевые сражения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Сражение под Прохоровкой 12 июля 1943 года - крупнейшее танковое сражение Второй мировой войны, в котором участвовало до 1200 танков с обеих сторон.</p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Flag" className="mr-2 text-[#6E59A5]" />
                  Значение
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>После поражения в Курской битве немецкие войска окончательно потеряли стратегическую инициативу и перешли к обороне по всему фронту. Победа укрепила антигитлеровскую коалицию и ускорила распад фашистского блока.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Хронология */}
      <section id="timeline" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Oswald'] text-center mb-12">ХРОНОЛОГИЯ СОБЫТИЙ</h2>
          
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                5 июля 1943 — Начало операции "Цитадель"
              </AccordionTrigger>
              <AccordionContent>
                Немецкое командование начало наступательную операцию "Цитадель" с целью окружения и уничтожения советских войск в районе Курского выступа. С севера наступала 9-я армия (группа армий "Центр"), с юга - 4-я танковая армия и оперативная группа "Кемпф" (группа армий "Юг").
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                5-11 июля — Оборонительный этап на северном фасе
              </AccordionTrigger>
              <AccordionContent>
                Войска Центрального фронта под командованием генерала К.К. Рокоссовского остановили наступление 9-й немецкой армии. Немцам удалось продвинуться лишь на 10-12 км.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                5-12 июля — Оборонительный этап на южном фасе
              </AccordionTrigger>
              <AccordionContent>
                Войска Воронежского фронта под командованием генерала Н.Ф. Ватутина вели тяжелые оборонительные бои. Немецким войскам удалось продвинуться на 35 км в направлении Обояни.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                12 июля — Сражение под Прохоровкой
              </AccordionTrigger>
              <AccordionContent>
                Крупнейшее встречное танковое сражение Второй мировой войны между 5-й гвардейской танковой армией генерала П.А. Ротмистрова и II танковым корпусом СС. В бою участвовало до 1200 танков и самоходных орудий с обеих сторон.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                12 июля — Начало контрнаступления на орловском направлении
              </AccordionTrigger>
              <AccordionContent>
                Начало операции "Кутузов" - советского контрнаступления на орловском направлении силами Западного, Брянского и Центрального фронтов.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                13 июля — Гитлер отдает приказ о прекращении операции "Цитадель"
              </AccordionTrigger>
              <AccordionContent>
                Адольф Гитлер отдал приказ о прекращении наступательной операции "Цитадель" и передислокации части сил на Сицилию в связи с высадкой там союзников.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                3 августа — Начало Белгородско-Харьковской операции
              </AccordionTrigger>
              <AccordionContent>
                Начало операции "Румянцев" - контрнаступления советских войск на белгородско-харьковском направлении силами Воронежского и Степного фронтов.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">
                5 августа — Освобождение Орла и Белгорода
              </AccordionTrigger>
              <AccordionContent>
                Советские войска освободили города Орел и Белгород. В Москве впервые был произведен артиллерийский салют в честь освобождения городов.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                23 августа — Освобождение Харькова
              </AccordionTrigger>
              <AccordionContent>
                Советские войска освободили Харьков. Завершение Курской битвы.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Командующие */}
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
                <Card>
                  <CardHeader>
                    <CardTitle>Г.К. Жуков</CardTitle>
                    <CardDescription>Заместитель Верховного Главнокомандующего</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Координировал действия Воронежского и Степного фронтов в ходе Курской битвы.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>А.М. Василевский</CardTitle>
                    <CardDescription>Начальник Генерального штаба</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Координировал действия Воронежского и Степного фронтов, непосредственно руководил планированием операций.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>К.К. Рокоссовский</CardTitle>
                    <CardDescription>Командующий Центральным фронтом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил обороной северного фаса Курского выступа и последующим наступлением.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Н.Ф. Ватутин</CardTitle>
                    <CardDescription>Командующий Воронежским фронтом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил обороной южного фаса Курского выступа и последующим наступлением.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>И.С. Конев</CardTitle>
                    <CardDescription>Командующий Степным фронтом</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил войсками резервного Степного фронта, введенного в сражение на этапе контрнаступления.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>П.А. Ротмистров</CardTitle>
                    <CardDescription>Командующий 5-й гвардейской танковой армией</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил советскими танковыми частями в сражении под Прохоровкой.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="german" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Эрих фон Манштейн</CardTitle>
                    <CardDescription>Командующий группой армий "Юг"</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил наступлением немецких войск на южном фасе Курского выступа.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Гюнтер фон Клюге</CardTitle>
                    <CardDescription>Командующий группой армий "Центр"</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил наступлением немецких войск на северном фасе Курского выступа.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Вальтер Модель</CardTitle>
                    <CardDescription>Командующий 9-й армией</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил наступлением на северном участке Курского выступа.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Герман Гот</CardTitle>
                    <CardDescription>Командующий 4-й танковой армией</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил наступлением на южном участке Курского выступа.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Пауль Хауссер</CardTitle>
                    <CardDescription>Командующий II танковым корпусом СС</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил элитными танковыми дивизиями СС "Лейбштандарт", "Рейх" и "Мертвая голова" в сражении под Прохоровкой.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Вернер Кемпф</CardTitle>
                    <CardDescription>Командующий оперативной группой "Кемпф"</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Руководил восточным флангом немецкого наступления на южном фасе Курского выступа.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-['Oswald'] text-center mb-12">ГАЛЕРЕЯ</h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md">
                    <img 
                      src="https://images.unsplash.com/photo-1582048133547-317186c0ac68?q=80&w=1740" 
                      alt="Военная техника времен Великой Отечественной войны" 
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600">Советские танки Т-34 — основная ударная сила РККА</p>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md">
                    <img 
                      src="https://images.unsplash.com/photo-1580785692949-7b5c731d3f5d?q=80&w=1932" 
                      alt="Полевая артиллерия" 
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600">Артиллерийские расчеты во время сражения</p>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md">
                    <img 
                      src="https://images.unsplash.com/photo-1633578289073-64a4cdd75191?q=80&w=1772" 
                      alt="Солдаты на позициях" 
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600">Советские солдаты в окопах под Курском</p>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md">
                    <img 
                      src="https://images.unsplash.com/photo-1617696618050-b0fef0c666af?q=80&w=1742" 
                      alt="Авиация в битве" 
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600">Авиационная поддержка наземных войск</p>
                </div>
              </CarouselItem>
              
              <CarouselItem>
                <div className="p-1">
                  <div className="flex aspect-video items-center justify-center overflow-hidden rounded-md">
                    <img 
                      src="https://images.unsplash.com/photo-1622274984898-80562bed99a7?q=80&w=1740" 
                      alt="Памятник героям Курской битвы" 
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-sm text-gray-600">Современный мемориал в честь героев Курской битвы</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">© 2025 Курская битва | Исторический проект</p>
            <p className="text-sm text-gray-400">
              Создано для сохранения исторической памяти о великом подвиге советского народа
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
