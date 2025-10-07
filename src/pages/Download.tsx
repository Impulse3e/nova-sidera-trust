import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Apple, Smartphone, Monitor, Laptop, Download as DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import iosApp from "@/assets/ios-app.jpg";
import androidApp from "@/assets/android-app.jpg";
import windowsApp from "@/assets/windows-app.jpg";
import macosApp from "@/assets/macos-app.jpg";

const Download = () => {
  const apps = [
    {
      id: "ios",
      name: "iOS",
      icon: Apple,
      description: "Для iPhone и iPad",
      version: "v2.1.0",
      requirements: "iOS 13.0 или новее",
      image: iosApp,
      downloadUrl: "https://apps.apple.com/ru/app/v2raytun/id6476628951",
      size: "45 МБ"
    },
    {
      id: "android",
      name: "Android",
      icon: Smartphone,
      description: "Для телефонов и планшетов",
      version: "v2.1.0",
      requirements: "Android 8.0 или новее",
      image: androidApp,
      downloadUrl: "https://play.google.com/store/apps/details?id=app.hiddify.com",
      size: "38 МБ"
    },
    {
      id: "windows",
      name: "Windows",
      icon: Monitor,
      description: "Для Windows компьютеров",
      version: "v2.1.0",
      requirements: "Windows 10/11",
      image: windowsApp,
      downloadUrl: "https://github.com/hiddify/hiddify-next/releases/latest/download/Hiddify-Windows-Setup-x64.exe",
      size: "85 МБ"
    },
    {
      id: "macos",
      name: "macOS",
      icon: Laptop,
      description: "Для Mac компьютеров",
      version: "v2.1.0",
      requirements: "macOS 11.0 или новее",
      image: macosApp,
      downloadUrl: "https://apps.apple.com/ru/app/v2raytun/id6476628951",
      size: "92 МБ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Скачать Nova Sidera - VPN приложения для всех устройств</title>
        <meta name="description" content="Загрузите Nova Sidera VPN для iOS, Android, Windows и macOS. Безопасное соединение на всех ваших устройствах." />
        <meta name="keywords" content="скачать vpn, nova sidera скачать, vpn приложение, ios vpn, android vpn, windows vpn, macos vpn" />
        <meta property="og:title" content="Скачать Nova Sidera - VPN для всех платформ" />
        <meta property="og:description" content="Загрузите Nova Sidera VPN для iOS, Android, Windows и macOS. Безопасное соединение на всех ваших устройствах." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Скачать Nova Sidera - VPN для всех платформ" />
        <meta name="twitter:description" content="Загрузите Nova Sidera VPN для iOS, Android, Windows и macOS." />
      </Helmet>

      <Header />
      <div className="min-h-screen bg-gradient-to-b from-dark via-dark/95 to-background pt-16">
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-success bg-clip-text text-transparent">
              Скачайте Nova Sidera
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Установите приложение на все свои устройства и наслаждайтесь защищённым подключением везде
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {apps.map((app) => {
              const Icon = app.icon;
              return (
                <Card key={app.id} className="group hover:border-primary/50 transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-success/10">
                      <img
                        src={app.image}
                        alt={`${app.name} приложение Nova Sidera VPN`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <Icon className="w-8 h-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">{app.name}</h3>
                            <p className="text-muted-foreground">{app.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Версия:</span>
                          <span className="text-foreground font-medium">{app.version}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Требования:</span>
                          <span className="text-foreground font-medium">{app.requirements}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Размер:</span>
                          <span className="text-foreground font-medium">{app.size}</span>
                        </div>
                      </div>

                      <Button 
                        className="w-full group-hover:shadow-lg group-hover:shadow-primary/20 transition-all"
                        size="lg"
                        asChild
                      >
                        <a href={app.downloadUrl}>
                          <DownloadIcon className="mr-2 h-5 w-5" />
                          Скачать для {app.name}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Installation Instructions */}
          <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Как установить</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Apple className="w-5 h-5 text-primary" />
                    iOS / macOS
                  </h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Скачайте приложение по ссылке выше</li>
                    <li>Откройте загруженный файл</li>
                    <li>Следуйте инструкциям установщика</li>
                    <li>Запустите приложение и войдите в аккаунт</li>
                  </ol>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    Android / Windows
                  </h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Нажмите кнопку "Скачать"</li>
                    <li>Разрешите установку из неизвестных источников (Android)</li>
                    <li>Установите приложение</li>
                    <li>Откройте и авторизуйтесь</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Download;
