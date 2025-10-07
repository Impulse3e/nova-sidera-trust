import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import BlagoCommunity from "@/components/BlagoCommunity";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="ru" />
        <title>Nova Sidera — Надёжная связь и приватность без лишней сложности</title>
        <meta 
          name="description" 
          content="Защита данных, устойчивый доступ к Telegram и Web3-инструментам. Минималистичный VPN сервис с понятной ценой и быстрой активацией. BLAGO 4.0 экосистема." 
        />
        <meta name="keywords" content="vpn, приватность, telegram, web3, безопасность, blago, dar, nova sidera" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://novasidera.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nova Sidera — Надёжная связь и приватность" />
        <meta property="og:description" content="Защита данных, устойчивый доступ к Telegram и Web3-инструментам" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novasidera.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nova Sidera — Надёжная связь и приватность" />
        <meta name="twitter:description" content="Защита данных, устойчивый доступ к Telegram и Web3-инструментам" />
      </Helmet>
      
      <main>
        <Hero />
        <ValueProposition />
        <Features />
        <Pricing />
        <HowItWorks />
        <BlagoCommunity />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;
