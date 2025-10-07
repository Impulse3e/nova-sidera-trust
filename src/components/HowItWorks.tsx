import { CreditCard, Key, Download, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: "Оплата тарифа",
      description: "Выберите подходящий план и оплатите удобным способом"
    },
    {
      icon: Key,
      title: "Получение ключей",
      description: "Генерация ключей автоматически и инструкции на email/Telegram"
    },
    {
      icon: Download,
      title: "Установка за 2-3 минуты",
      description: "Следуйте простой пошаговой инструкции"
    },
    {
      icon: CheckCircle2,
      title: "Готово",
      description: "Защищённый доступ и переход в бота клуба"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Как это работает
          </h2>
          <p className="text-center text-muted-foreground mb-16">
            Четыре простых шага до защищённого подключения
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
                  )}
                  <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/20">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 p-6 bg-muted/50 rounded-lg border border-border">
            <p className="text-sm text-muted-foreground text-center">
              💡 <span className="font-semibold text-foreground">Подсказка:</span> На странице оплаты укажите email/Telegram для автоматической доставки ключа
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
