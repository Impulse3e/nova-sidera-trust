import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Можно ли настроить на iPhone?",
      answer: "Да, сервис полностью поддерживает iOS. Подробная пошаговая инструкция прилагается при получении ключа доступа."
    },
    {
      question: "Сколько устройств можно подключить на один ключ?",
      answer: "Количество устройств зависит от выбранного тарифа: от 2 до 5 устройств. План «Старт» — 2 устройства, «Активный» — 3 устройства, «Команда» — 5 устройств."
    },
    {
      question: "Делаете возвраты?",
      answer: "Нет, возвраты средств не предусмотрены согласно пользовательскому соглашению и оферте. Рекомендуем воспользоваться 7-дневным тест-доступом для ознакомления с сервисом."
    },
    {
      question: "Работает ли сервис в РФ?",
      answer: "Да, сервис специально разработан для обеспечения устойчивого подключения при наличии внешних ограничений и блокировок."
    },
    {
      question: "Что с логами и конфиденциальностью?",
      answer: "Мы не собираем логи трафика и строго соблюдаем политику конфиденциальности. Исключён любой трекинг и коммерческая аналитика поведения пользователей."
    },
    {
      question: "Как быстро активируется доступ?",
      answer: "После оплаты ключи генерируются автоматически и отправляются на указанный email или в Telegram в течение нескольких минут. Установка занимает 2-3 минуты."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Частые вопросы
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Ответы на самые популярные вопросы
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
