import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Shield, Bot, Sparkles } from "lucide-react";

const BlagoCommunity = () => {
  const benefits = [
    {
      icon: BookOpen,
      text: "Доступ к обучению «Цифровая экономика 101»"
    },
    {
      icon: Shield,
      text: "Пакет инструкций по кошелькам, P2P и базовой безопасности"
    },
    {
      icon: Bot,
      text: "Интеграция с ботами (BlagoVED / MasterMargoClub)"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.05),transparent)]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Для сообщества BLAGO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nova Sidera — новое созвездие благодарности
            </h2>
            <p className="text-lg text-muted-foreground">
              Экосистема BLAGO 4.0 объединяет людей в децентрализованное сообщество, 
              где токен DAR становится символом благодарности
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm">{benefit.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-base">
              Войти в клуб
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlagoCommunity;
