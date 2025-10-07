import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.1),transparent)]" />
      
      <div className="container px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Надёжная связь и приватность без лишней сложности
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Защита данных, устойчивый доступ к Telegram и Web3-инструментам. 
              Минималистичный сервис с понятной ценой и быстрой активацией.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base shadow-lg hover:shadow-xl transition-all" asChild>
                <Link to="/download">Купить сейчас</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/download">7 дней — тест-доступ</Link>
              </Button>
            </div>
            
            <div className="flex flex-col items-center lg:items-start gap-3 pt-6">
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
                Работает на любом устройстве:{" "}
                <a 
                  href="https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-Windows-Setup-x64.exe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Windows
                </a>
                {", "}
                <a 
                  href="https://apps.apple.com/ru/app/v2raytun/id6476628951" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  macOS
                </a>
                {", "}
                <a 
                  href="https://apps.apple.com/ru/app/v2raytun/id6476628951" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  iOS
                </a>
                {", "}
                <a 
                  href="https://play.google.com/store/apps/details?id=app.hiddify.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                >
                  Android
                </a>
              </p>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={heroIllustration} 
              alt="Защита цифровой приватности и безопасности" 
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
