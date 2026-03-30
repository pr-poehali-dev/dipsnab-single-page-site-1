import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-ds-dark text-gray-400 mt-16">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-ds-red rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">D</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-lg tracking-wider">ДИПСНАБ</h3>
                <p className="text-xs text-gray-500 tracking-widest uppercase">оптовая одежда</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed font-body">
              Монобренд коллекция одежды для оптовых покупателей.
              Единый стиль, высокое качество, выгодные условия.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Контакты</h4>
            <div className="space-y-3 text-sm font-body">
              <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Phone" size={14} />
                8 (800) 123-45-67
              </a>
              <a href="mailto:info@dipsnab.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                <Icon name="Mail" size={14} />
                info@dipsnab.ru
              </a>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={14} />
                Москва, ул. Примерная, д. 1
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Информация</h4>
            <div className="space-y-2 text-sm font-body">
              <a href="#" className="block hover:text-white transition-colors">О компании</a>
              <a href="#" className="block hover:text-white transition-colors">Условия сотрудничества</a>
              <a href="#" className="block hover:text-white transition-colors">Доставка и оплата</a>
              <a href="#" className="block hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; 2026 ДИПСНАБ. Все права защищены.</p>
          <p className="mt-2 sm:mt-0">ЭКО-TECH ОДЕЖДА</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
