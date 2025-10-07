import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Shield, Bot, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import constellationBg from "@/assets/constellation-bg.jpg";
import web3Illustration from "@/assets/web3-illustration.jpg";

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
    <section id="community" className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url(${constellationBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/95 to-background/95" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <img 
                src={web3Illustration} 
                alt="Глобальная сеть Web3 и блокчейн технологии" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Для сообщества BLAGO</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nova Sidera — новое созвездие благодарности
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Экосистема BLAGO 4.0 объединяет людей в децентрализованное сообщество, 
                где токен DAR становится символом благодарности, а блокчейн ZHCHAIN — 
                гарантом честности и свободы.
              </p>
              <Button size="lg" className="text-base shadow-lg" asChild>
                <Link to="/download">Войти в клуб</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-primary/20 bg-card/80 backdrop-blur hover:shadow-xl hover:-translate-y-1 transition-all">
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-sm font-medium">{benefit.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlagoCommunity;
