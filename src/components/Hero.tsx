import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.1),transparent)]" />
      
      <div className="container px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Надёжная связь и приватность без лишней сложности
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Защита данных, устойчивый доступ к Telegram и Web3-инструментам. 
            Минималистичный сервис с понятной ценой и быстрой активацией.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Купить сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              7 дней — тест-доступ
            </Button>
          </div>
          
          <div className="flex flex-col items-center gap-3 pt-6">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-foreground font-semibold">4.9/5</span>
            </div>
            <p className="text-muted-foreground">1 200+ активных подключений</p>
          </div>
          
          <div className="inline-block bg-card border border-border rounded-lg px-6 py-3 mt-8">
            <p className="text-sm text-muted-foreground">
              Работает на любом устройстве: <span className="font-semibold text-foreground">Windows, macOS, iOS, Android</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
