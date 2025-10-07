import { Check, Shield, Zap, Lock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const values = [
    {
      icon: Zap,
      title: "Просто",
      description: "Установка за 2–3 минуты, пошаговая инструкция"
    },
    {
      icon: Check,
      title: "Надёжно",
      description: "Стабильное подключение даже при нестабильном канале"
    },
    {
      icon: Lock,
      title: "Приватно",
      description: "Шифрование, без логов, без трекинга"
    },
    {
      icon: Globe,
      title: "Для Web3",
      description: "Доступ к DeFi/NFT/крипто‑сервисам без блокировок"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Почему выбирают нас
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 p-6 bg-card border border-primary/20 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              Совместимо с экосистемой сообщества <span className="font-semibold text-primary">"BLAGO"</span> / токен DAR и обучением в клубе
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
