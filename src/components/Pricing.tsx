import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "1 месяц",
      audience: "Базовый",
      price: "999 ₽",
      period: "/мес",
      paymentUrl: "https://investeya.online/payment.php?amount=999",
      features: [
        "2 устройства",
        "Базовая поддержка",
        "Доступ к инструкциям",
        "Telegram поддержка"
      ]
    },
    {
      name: "3 месяца",
      audience: "Скидка 10%",
      price: "1500 ₽",
      period: "за 3 месяца",
      featured: true,
      paymentUrl: "https://investeya.online/payment.php?amount=1500",
      features: [
        "3 устройства",
        "Тех. сопровождение в чат-боте",
        "Экономия 500 ₽",
        "Все функции базового плана"
      ]
    },
    {
      name: "12 месяцев",
      audience: "Скидка 45%",
      price: "5400 ₽",
      period: "за год (450 ₽/мес)",
      paymentUrl: "https://investeya.online/payment.php?amount=5400",
      features: [
        "4 устройства",
        "Тех. сопровождение в чат-боте",
        "Экономия 6588 ₽",
        "Приоритетная поддержка"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
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
                  <CardDescription className={plan.audience.includes('Скидка') ? 'text-destructive font-semibold' : ''}>
                    {plan.audience}
                  </CardDescription>
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
                        <span className={`text-sm ${feature.includes('Экономия') ? 'text-destructive font-semibold' : ''}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={plan.featured ? "default" : "outline"}
                    asChild
                  >
                    <a href={plan.paymentUrl} target="_blank" rel="noopener noreferrer">Выбрать тариф</a>
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
