import { Check, Shield, Zap, Lock, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import securityIllustration from "@/assets/security-illustration.jpg";
import devicesIllustration from "@/assets/devices-illustration.jpg";

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
                <Card key={index} className="border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all">
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

          {/* Security Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="order-2 md:order-1">
              <img 
                src={securityIllustration} 
                alt="Защищённое шифрованное соединение" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <h3 className="text-3xl font-bold">Максимальная безопасность</h3>
              <p className="text-lg text-muted-foreground">
                Ваши данные защищены современным шифрованием. Мы не храним логи 
                и не отслеживаем вашу активность — ваша приватность гарантирована.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Шифрование военного уровня</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Политика нулевых логов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Защита от утечек DNS</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Devices Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Работает везде</h3>
              <p className="text-lg text-muted-foreground">
                Один аккаунт для всех ваших устройств. Защитите смартфон, 
                планшет, компьютер и другие устройства одновременно.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>Windows, macOS, Linux</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>iOS и Android</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span>До 5 устройств одновременно</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src={devicesIllustration} 
                alt="Совместимость с различными устройствами" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
          
          <div className="mt-16 p-6 bg-card border border-primary/20 rounded-lg text-center">
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
