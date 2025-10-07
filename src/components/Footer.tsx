const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Nova Sidera</h3>
              <p className="text-sm text-background/70">
                Надёжная связь и приватность для нового цифрового мира
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1tjuJLiJxCusXosTv1mY0Xu59dvtrKXpC/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a 
                    href="https://drive.google.com/file/d/1M6rBFweKfHhMyCKPpRFxrqJm6n1QqnBn/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    Публичная оферта
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Поддержка: через Telegram-бот</li>
                <li>Email: support@novasidera.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 text-sm">Информация о продавце</h4>
                <ul className="space-y-1 text-xs text-background/70">
                  <li>Продавец: Medonetckaia Margarita</li>
                  <li>Компания: SIRIUS BAR DOO, MONTENEGRO</li>
                  <li>PIB: 03376214</li>
                  <li>Datum registracije u CRPS: 10.08.2021 # 50979252</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm">Связь с продавцом</h4>
                <ul className="space-y-1 text-xs text-background/70">
                  <li>Телефон: +382068811850</li>
                  <li>
                    Email: <a href="mailto:info@investeya.online" className="hover:text-background transition-colors">info@investeya.online</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-background/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
              <p>© {currentYear} SafeNet / Nova Sidera. Все права защищены.</p>
              <p>Платёжный интегратор: Payeer</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
