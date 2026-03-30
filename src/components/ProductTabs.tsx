import { useState } from "react";
import Icon from "@/components/ui/icon";
import { type Season } from "./SeasonFilter";
import { type Purpose } from "./PurposeFilter";

interface ProductTabsProps {
  season: Season;
  purpose: Purpose;
}

const tabs = [
  { id: "description", label: "Описание", icon: "FileText" },
  { id: "composition", label: "Состав", icon: "Layers" },
  { id: "certificates", label: "Сертификаты", icon: "Shield" },
  { id: "instructions", label: "Инструкции", icon: "BookOpen" },
];

const seasonNames: Record<Season, string> = {
  summer: "Летняя",
  demiseason: "Демисезонная",
  winter: "Зимняя",
};

const purposeNames: Record<Purpose, string> = {
  casual: "повседневной носки",
  sport: "спорта",
  formal: "официальных встреч",
  workwear: "спецодежды",
};

const ProductTabs = ({ season, purpose }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-ds-dark">
              {seasonNames[season]} коллекция для {purposeNames[purpose]}
            </h3>
            <p className="text-sm text-ds-gray leading-relaxed font-body">
              Монобренд коллекция ДИПСНАБ разработана с учётом требований оптовых покупателей.
              Единый стиль, продуманная комплектность и высокое качество материалов.
              Вся одежда проходит многоступенчатый контроль качества.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-ds-gray font-heading uppercase tracking-wider">Коллекция</p>
                <p className="text-sm font-body font-medium text-ds-dark mt-1">{seasonNames[season]} 2026</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-ds-gray font-heading uppercase tracking-wider">Назначение</p>
                <p className="text-sm font-body font-medium text-ds-dark mt-1 capitalize">Для {purposeNames[purpose]}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-ds-gray font-heading uppercase tracking-wider">Мин. заказ</p>
                <p className="text-sm font-body font-medium text-ds-dark mt-1">от 10 шт / размер</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-ds-gray font-heading uppercase tracking-wider">Доставка</p>
                <p className="text-sm font-body font-medium text-ds-dark mt-1">По всей России</p>
              </div>
            </div>
          </div>
        );
      case "composition":
        return (
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-lg text-ds-dark">Состав материалов</h3>
            {season === "winter" ? (
              <ul className="space-y-2 text-sm text-ds-gray font-body">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Верх: эко-полиэстер / переработанный нейлон</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Утеплитель: растительный пух (капок)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Подкладка: переработанный полиэстер</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Фурнитура: матовый никель</li>
              </ul>
            ) : season === "demiseason" ? (
              <ul className="space-y-2 text-sm text-ds-gray font-body">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Верх: смесь льна и био-хлопка рип-стоп</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Мембрана: высокая паропроницаемость</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Подкладка: био-нейлон</li>
              </ul>
            ) : (
              <ul className="space-y-2 text-sm text-ds-gray font-body">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Основа: мериносовая шерсть 17.5 микрон + бамбук</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Ультралёгкий, гипоаллергенный</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-ds-red mt-2 shrink-0" /> Отводит влагу, регулирует температуру</li>
              </ul>
            )}
          </div>
        );
      case "certificates":
        return (
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-lg text-ds-dark">Сертификаты и ГОСТы</h3>
            <div className="space-y-2">
              {[
                { name: "ГОСТ 31408-2009", desc: "Изделия трикотажные верхние" },
                { name: "ГОСТ 25295-2003", desc: "Одежда верхняя" },
                { name: "ТР ТС 017/2011", desc: "О безопасности продукции лёгкой промышленности" },
                { name: "ISO 9001:2015", desc: "Система менеджмента качества" },
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="CheckCircle" size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-body font-medium text-ds-dark">{cert.name}</p>
                    <p className="text-xs text-ds-gray">{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "instructions":
        return (
          <div className="space-y-3">
            <h3 className="font-heading font-semibold text-lg text-ds-dark">Инструкции по уходу</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "Droplets", text: "Стирка при 30°C" },
                { icon: "Wind", text: "Не отбеливать" },
                { icon: "Thermometer", text: "Глажка до 110°C" },
                { icon: "RotateCcw", text: "Не сушить в машине" },
              ].map((inst, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name={inst.icon} size={18} className="text-ds-gray shrink-0" />
                  <span className="text-sm text-ds-dark font-body">{inst.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-ds-gray mt-3 font-body leading-relaxed">
              Для сохранения качества и внешнего вида изделия рекомендуем следовать указаниям
              на ярлыке. При оптовых поставках прилагается полная инструкция на русском языке.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              flex items-center gap-2 px-4 py-3 text-sm font-body font-medium whitespace-nowrap
              border-b-2 transition-all duration-300
              ${
                activeTab === tab.id
                  ? "border-ds-red text-ds-red"
                  : "border-transparent text-ds-gray hover:text-ds-dark"
              }
            `}
          >
            <Icon name={tab.icon} size={16} />
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[200px]">{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
