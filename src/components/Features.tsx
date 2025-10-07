import { MousePointerClick, Wifi, Eye, Phone, Coins, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: MousePointerClick,
      title: "Один клик — и вы в сети",
      description: "Инсталляция по инструкции для новичков. Поддержка в боте чате."
    },
    {
      icon: Wifi,
      title: "Устойчивость",
      description: "Собственная конфигурация, обход нестабильных провайдерских ограничений."
    },
    {
      icon: Eye,
      title: "Приватность по умолчанию",
      description: "Исключены трекинг и коммерческая аналитика поведения."
    },
    {
      icon: Phone,
      title: "Поддержка Telegram и VoIP",
      description: "Корректная работа звонков, пересылки медиа и больших файлов."
    },
    {
      icon: Coins,
      title: "Готовность к Web3",
      description: "Доступ к биржам, кошелькам, обозревателям блокчейна."
    },
    {
      icon: GraduationCap,
      title: "Обучение",
      description: "Базовый курс цифровой экономике для старта новичков."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Особенности сервиса
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Всё необходимое для безопасного и комфортного доступа
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border bg-card hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
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

export default Features;
