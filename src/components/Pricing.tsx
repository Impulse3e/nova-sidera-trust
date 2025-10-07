import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Старт",
      audience: "Новички",
      price: "900 руб",
      period: "3 месяца",
      features: [
        "2 устройства",
        "Базовая поддержка",
        "Доступ к инструкциям",
        "Telegram поддержка"
      ]
    },
    {
      name: "Активный",
      audience: "Активные пользователи",
      price: "10 €",
      period: "/мес",
      featured: true,
      features: [
        "3 устройства",
        "Приоритетная поддержка",
        "Все функции Старт",
        "Доступ к Web3 инструментам"
      ]
    },
    {
      name: "Команда",
      audience: "Малые команды",
      price: "29 €",
      period: "/мес",
      features: [
        "5 устройств",
        "Тех. сопровождение",
        "Все функции Активный",
        "Корпоративные ключи"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Тарифные планы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Выберите подходящий план для ваших задач
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.featured ? 'border-primary shadow-lg scale-105' : 'border-border'}`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.audience}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-1">{plan.period}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.featured ? "default" : "outline"}
                  >
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Гибкая заморозка • Оплата помесячно • Возможны корпоративные ключи
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
