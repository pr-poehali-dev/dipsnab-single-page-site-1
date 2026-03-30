import { useState } from "react";
import Icon from "@/components/ui/icon";

type Gender = "male" | "female";
type Season = "summer" | "demi" | "winter";
type Purpose = "casual" | "sport" | "formal" | "workwear";

const SIZES = [
  { label: "S", cm: 48, stock: 30 },
  { label: "M", cm: 50, stock: 60 },
  { label: "L", cm: 54, stock: 65 },
  { label: "XL", cm: 58, stock: 76 },
  { label: "XXL", cm: 62, stock: 74 },
];

const TABS = [
  { id: "desc", label: "ОПИСАНИЕ И\nКОМПЛЕКТНОСТЬ" },
  { id: "comp", label: "СОСТАВ\nОДЕЖДЫ" },
  { id: "cert", label: "СЕРТИФИКАТЫ\nИ ГОСТЫ" },
  { id: "care", label: "ИНСТРУКЦИИ" },
];

const TAB_CONTENT: Record<string, string> = {
  desc: `Демисезонный спортивный костюм из двух предметов: куртка с капюшоном и брюки на манжетах. Подходит для активного отдыха и повседневной носки.

Слоевая система:
Слой 0 — базовый влагоотводящий слой из технического нейлона с добавлением хлопка.
Слой 1 — лёгкие манжеты с утеплителем, не сковывают движения и регулируют температуру.
Эластичная ткань, бесшовные манжеты на захватах обеспечивают энергоэффективный кровоток.`,
  comp: `Внешний слой: 65% полиэстер, 35% нейлон.\nПодкладка: 100% полиэстер (флис).\nНаполнитель: синтепон 100 г/м².\n\nТкань сертифицирована по стандарту OEKO-TEX Standard 100. Устойчива к ветру и влаге.`,
  cert: `Сертификат соответствия ГОСТ 31399-2009.\nДекларация соответствия ТР ТС 017/2011.\nOEKO-TEX Standard 100 — сертификат экологической безопасности.\nВсе материалы прошли проверку на токсичность.`,
  care: `Стирка при 30°C в щадящем режиме.\nНе отбеливать.\nГладить при низкой температуре (до 110°C).\nХимическая чистка запрещена.\nСушка в барабане запрещена.`,
};

const seasonLabel: Record<Season, string> = {
  summer: "ЛЕТО",
  demi: "ДЕМИСЕЗОН",
  winter: "ЗИМА",
};
const purposeLabel: Record<Purpose, string> = {
  casual: "ДЛЯ ПОВСЕДНЕВНОЙ НОСКИ",
  sport: "ДЛЯ СПОРТА",
  formal: "ДЛЯ ОФИЦИАЛЬНЫХ ВСТРЕЧ",
  workwear: "СПЕЦ. ОДЕЖДА",
};

interface CartItem {
  id: number;
  size: string;
  cm: number;
  stock: number;
  season: string;
  purpose: string;
  brand: string;
}

export default function Index() {
  const [gender, setGender] = useState<Gender>("male");
  const [season, setSeason] = useState<Season>("demi");
  const [purpose, setPurpose] = useState<Purpose>("casual");
  const [brand, setBrand] = useState("ЭКО-ВЕСТ");
  const [selectedSize, setSelectedSize] = useState("M");
  const [tab, setTab] = useState("desc");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = () => {
    const sizeData = SIZES.find((s) => s.label === selectedSize)!;
    const newItem: CartItem = {
      id: Date.now(),
      size: selectedSize,
      cm: sizeData.cm,
      stock: sizeData.stock,
      season: seasonLabel[season],
      purpose: purposeLabel[purpose],
      brand,
    };
    setCart((prev) => [...prev, newItem]);
    setCartOpen(true);
  };

  const totalQty = cart.reduce((s, i) => s + i.stock, 0);

  return (
    <div className="min-h-screen bg-white font-body text-ds-dark">

      {/* ══════════════════ HEADER ══════════════════ */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <span className="font-heading font-bold text-[28px] tracking-wider text-ds-dark">ДИПСНАБ</span>

          <div className="flex-1" />

          <div className="hidden sm:flex flex-col gap-0.5 text-xs text-ds-dark">
            <a href="tel:+79323727700" className="flex items-center gap-1.5 hover:text-ds-red transition-colors">
              <Icon name="Phone" size={12} />
              +7 (932) 372-77-00
            </a>
            <a href="mailto:infoll@ginnchab.ru" className="flex items-center gap-1.5 hover:text-ds-red transition-colors">
              <Icon name="Mail" size={12} />
              infoll@ginnchab.ru
            </a>
          </div>

          <button
            onClick={() => setCartOpen(true)}
            className="relative bg-ds-red text-white p-2.5 rounded-lg hover:bg-red-700 transition-colors"
          >
            <Icon name="ShoppingCart" size={20} />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-ds-dark text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
                {totalQty > 99 ? "99+" : totalQty}
              </span>
            )}
          </button>

          <button className="flex items-center gap-1.5 text-sm text-ds-dark hover:text-ds-red transition-colors">
            <Icon name="User" size={18} />
            <span className="hidden sm:inline text-xs">Вогин</span>
          </button>
        </div>
      </header>

      {/* ══════════════════ MAIN ══════════════════ */}
      <main className="max-w-5xl mx-auto px-4 py-4">

        {/* ── ROW 1: Gender + Season ── */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {/* Gender toggles */}
          <div className="flex gap-2 mr-2">
            {(["male", "female"] as Gender[]).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded border-2 transition-all min-w-[64px] ${
                  gender === g ? "border-ds-red" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center ${gender === g ? "border-ds-red text-ds-red" : "border-gray-300 text-gray-400"}`}>
                  {g === "male" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <circle cx="12" cy="7" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <circle cx="12" cy="7" r="4"/><path d="M4 21v-1a8 8 0 0116 0v1"/><path d="M9 7 Q12 10 15 7"/>
                    </svg>
                  )}
                </div>
                <span className={`font-heading text-[9px] font-bold tracking-wide ${gender === g ? "text-ds-red" : "text-ds-gray"}`}>
                  {g === "male" ? "МУЖСКОЙ" : "ЖЕНСКИЙ"}
                </span>
              </button>
            ))}
          </div>

          {/* Season buttons */}
          <div className="flex gap-2 flex-1">
            {(["summer", "demi", "winter"] as Season[]).map((s) => (
              <button
                key={s}
                onClick={() => setSeason(s)}
                className={`flex-1 py-2 px-2 rounded border-2 font-heading font-bold text-sm tracking-wide transition-all ${
                  season === s
                    ? "border-ds-red bg-ds-red text-white"
                    : "border-ds-red text-ds-red hover:bg-red-50"
                }`}
              >
                {seasonLabel[s]}
              </button>
            ))}
          </div>
        </div>

        {/* ── ROW 2: 3-column layout ── */}
        <div className="grid gap-3" style={{ gridTemplateColumns: "160px 1fr 240px" }}>

          {/* ── LEFT ── */}
          <div>
            <p className="font-heading font-bold text-xs tracking-widest text-ds-dark mb-2 uppercase">Назначение</p>

            <div className="flex flex-col gap-1.5">
              {(["casual", "sport", "formal", "workwear"] as Purpose[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPurpose(p)}
                  className={`w-full py-2 px-2.5 rounded text-left font-heading font-bold text-xs tracking-wide leading-tight transition-all ${
                    purpose === p
                      ? "bg-ds-red text-white shadow-sm"
                      : "bg-ds-red text-white opacity-55 hover:opacity-80"
                  }`}
                >
                  {purposeLabel[p]}
                </button>
              ))}
            </div>

            {/* Brand block */}
            <div className="mt-4">
              <div className="bg-ds-red text-white text-xs font-heading font-bold tracking-wide px-2 py-1 rounded-t">
                ВАШ БРЕНД
              </div>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full border-2 border-gray-300 border-t-0 rounded-b px-2 py-1.5 text-sm font-body text-ds-dark focus:outline-none focus:border-ds-red transition-colors"
                placeholder="Название бренда"
              />
            </div>
          </div>

          {/* ── CENTER: Photo ── */}
          <div className="flex justify-center items-start relative overflow-hidden">
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/faf175c9-a441-44e7-b1c2-e074c34a5317/bucket/4a4cf59a-b403-46da-8724-1e5ae7d35db8.png"
                alt="Спортивный костюм"
                className="w-full max-w-[300px] object-contain select-none"
                style={{ maxHeight: 500 }}
                draggable={false}
              />
              {/* Brand overlay on chest */}
              {brand && (
                <div
                  className="absolute pointer-events-none"
                  style={{ top: "39%", left: "31%", transform: "rotate(-2deg)" }}
                >
                  <span className="font-heading font-bold text-ds-red text-[11px] tracking-widest drop-shadow-sm">
                    {brand}
                  </span>
                </div>
              )}
              {/* Brand overlay on pants */}
              {brand && (
                <div
                  className="absolute pointer-events-none"
                  style={{ top: "68%", left: "48%", transform: "rotate(-2deg)" }}
                >
                  <span className="font-heading font-bold text-ds-red text-[9px] tracking-wider drop-shadow-sm">
                    {brand}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: Size table ── */}
          <div>
            {/* Header row */}
            <div className="grid grid-cols-3 text-center mb-1 px-1">
              <span className="font-heading font-bold text-xs text-ds-dark">РАЗМЕР</span>
              <span className="font-heading font-bold text-xs text-ds-dark">СМ</span>
              <span className="font-heading font-bold text-xs text-ds-dark">ОТОК</span>
            </div>

            {/* Size rows */}
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
              {SIZES.map((s, i) => (
                <label
                  key={s.label}
                  className={`flex items-center gap-2 px-2 py-2 cursor-pointer transition-colors ${
                    selectedSize === s.label ? "bg-gray-100" : i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  } ${i < SIZES.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={s.label}
                    checked={selectedSize === s.label}
                    onChange={() => setSelectedSize(s.label)}
                    className="accent-ds-red w-3.5 h-3.5 shrink-0"
                  />
                  <div className="grid grid-cols-3 flex-1 text-center text-sm">
                    <span className="font-heading font-semibold text-ds-dark">{s.label}:</span>
                    <span className="text-ds-dark">{s.cm}</span>
                    <span className="text-ds-dark">{s.stock}</span>
                  </div>
                </label>
              ))}
            </div>

            {/* В КОРЗИНУ */}
            <button
              onClick={addToCart}
              className="w-full bg-ds-red text-white py-3 rounded-lg font-heading font-bold text-xl tracking-widest hover:bg-red-700 active:scale-[0.98] transition-all shadow-md shadow-red-200 mb-3"
            >
              В КОРЗИНУ
            </button>

            {/* Selected size remainder info */}
            <div className="border border-gray-200 rounded-lg p-2 space-y-1.5">
              {SIZES.filter((s) => s.label === selectedSize).map((s) => (
                <label key={`r-${s.label}`} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="sizeinfo"
                    checked
                    readOnly
                    className="accent-ds-red w-3.5 h-3.5"
                  />
                  <span className="text-xs text-ds-dark font-body">{s.label}: Остатки — {s.stock} шт.</span>
                </label>
              ))}
              {/* Always show one extra row from the list */}
              {SIZES.filter((s) => s.label !== selectedSize).slice(0, 1).map((s) => (
                <label key={`r2-${s.label}`} className="flex items-center gap-2 cursor-pointer" onClick={() => setSelectedSize(s.label)}>
                  <input
                    type="radio"
                    name="sizeinfo"
                    checked={false}
                    readOnly
                    className="accent-ds-red w-3.5 h-3.5"
                  />
                  <span className="text-xs text-ds-dark font-body">{s.label}: Остатки — {s.stock} шт.</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════ TABS ══════════════════ */}
        <div className="mt-8 border border-gray-200 rounded-xl overflow-hidden">
          <div className="grid grid-cols-4 border-b border-gray-200">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{ whiteSpace: "pre-line" }}
                className={`py-3 px-2 text-center font-heading font-bold text-[11px] leading-tight tracking-wide transition-colors border-r last:border-r-0 border-gray-200 ${
                  tab === t.id
                    ? "bg-white text-ds-dark border-b-[3px] border-b-ds-red -mb-px"
                    : "bg-gray-50 text-ds-gray hover:bg-gray-100 hover:text-ds-dark"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="p-5 bg-white min-h-[130px]">
            <p className="text-sm text-ds-dark font-body leading-relaxed whitespace-pre-line">
              {TAB_CONTENT[tab]}
            </p>
          </div>
        </div>
      </main>

      {/* ══════════════════ CART DRAWER ══════════════════ */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col animate-slide-right">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h2 className="font-heading font-bold text-xl tracking-wide text-ds-dark">
                КОРЗИНА <span className="text-ds-gray text-sm font-normal">({cart.length} поз.)</span>
              </h2>
              <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-center">
                  <Icon name="ShoppingBag" size={40} className="text-gray-300 mb-3" />
                  <p className="text-ds-gray text-sm">Корзина пуста</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl p-3.5">
                    <div className="flex justify-between items-start gap-2">
                      <div className="min-w-0">
                        <p className="font-heading font-bold text-ds-dark">
                          Размер <span className="text-ds-red">{item.size}</span> ({item.cm} см)
                        </p>
                        <p className="text-xs text-ds-gray mt-0.5 truncate">{item.season} · {item.purpose}</p>
                        {item.brand && <p className="text-xs text-ds-gray">Бренд: {item.brand}</p>}
                        <p className="text-xs font-semibold text-ds-dark mt-1">{item.stock} шт.</p>
                      </div>
                      <button
                        onClick={() => setCart((prev) => prev.filter((c) => c.id !== item.id))}
                        className="p-1.5 hover:bg-red-50 hover:text-ds-red rounded-lg text-ds-gray transition-colors shrink-0"
                      >
                        <Icon name="Trash2" size={15} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t border-gray-100">
                <p className="text-xs text-ds-gray text-center mb-3">
                  Итого: {cart.length} позиции, {totalQty} шт.
                </p>
                <button className="w-full bg-ds-red text-white py-3.5 rounded-xl font-heading font-bold text-base tracking-widest hover:bg-red-700 transition-colors">
                  ОФОРМИТЬ ЗАЯВКУ
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
