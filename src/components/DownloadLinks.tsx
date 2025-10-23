import { Monitor, Laptop, Smartphone, Apple } from "lucide-react";
import devicesIllustration from "@/assets/devices-illustration.jpg";

const DownloadLinks = () => {
  const platforms = [
    {
      name: "VPN для Windows",
      url: "https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-Windows-Setup-x64.exe",
      icon: Monitor,
      description: "Загрузите VPN для Windows и усильте свою безопасность во время работы, игр и трансляций на ПК. Пользуйтесь самым быстрым VPN-сервисом без ограничений по объемам данных и со стабильным соединением в любой точке мира.",
      guideUrl: "https://telegra.ph/Hiddify-dlya-Windows-prostoe-rukovodstvo-dlya-bezopasnosti-i-svobody-v-internete-09-22"
    },
    {
      name: "VPN для Mac",
      url: "https://apps.apple.com/ru/app/v2raytun/id6476628951",
      icon: Laptop,
      description: "Защитите свой Mac с помощью надежного VPN-сервиса. Обеспечьте приватность и безопасность при работе в интернете."
    },
    {
      name: "VPN для Android",
      url: "https://play.google.com/store/apps/details?id=com.v2raytun.android&pli=1",
      icon: Smartphone,
      description: "Скачайте VPN для Android и защитите свои данные на мобильном устройстве. Быстрое и стабильное соединение в любой точке мира."
    },
    {
      name: "VPN для iOS",
      url: "https://apps.apple.com/ru/app/v2raytun/id6476628951",
      icon: Apple,
      description: "Защитите свой iPhone или iPad с помощью надежного VPN. Простая установка и удобный интерфейс."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <img 
                  src={devicesIllustration} 
                  alt="Nova Sidera VPN защита на всех устройствах" 
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Security Badge */}
              <div className="absolute bottom-8 left-8 bg-card border border-border rounded-xl px-6 py-4 shadow-xl backdrop-blur-sm z-20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-success animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Состояние безопасности</p>
                    <p className="text-sm font-semibold text-success">Защищено</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Download Links */}
            <div className="order-1 lg:order-2 space-y-6">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                const isExpanded = index === 0;
                
                return (
                  <div 
                    key={platform.name} 
                    className="border-l-4 border-border pl-6 transition-all hover:border-primary"
                  >
                    <a 
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <div className="flex items-start gap-3 mb-2">
                        <Icon className="w-5 h-5 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
                        <h3 className="text-xl font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                          {platform.name}
                        </h3>
                      </div>
                      {isExpanded && (
                        <>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {platform.description}
                          </p>
                          {platform.guideUrl && (
                            <a
                              href={platform.guideUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-3 text-sm text-primary hover:text-primary/80 transition-colors underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              📖 Руководство по безопасности в интернете
                            </a>
                          )}
                        </>
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadLinks;
