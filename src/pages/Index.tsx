import { useState, useCallback } from "react";
import Header from "@/components/Header";
import SeasonFilter, { type Season } from "@/components/SeasonFilter";
import GenderToggle, { type Gender } from "@/components/GenderToggle";
import PurposeFilter, { type Purpose } from "@/components/PurposeFilter";
import BrandInput from "@/components/BrandInput";
import AvatarViewer from "@/components/AvatarViewer";
import SizeTable from "@/components/SizeTable";
import ProductTabs from "@/components/ProductTabs";
import Footer from "@/components/Footer";
import CartDrawer, { type CartItem } from "@/components/CartDrawer";

const seasonLabels: Record<Season, string> = {
  summer: "Лето",
  demiseason: "Демисезон",
  winter: "Зима",
};

const purposeLabels: Record<Purpose, string> = {
  casual: "Повседневная",
  sport: "Спорт",
  formal: "Официальная",
  workwear: "Спецодежда",
};

const Index = () => {
  const [gender, setGender] = useState<Gender>("male");
  const [season, setSeason] = useState<Season>("demiseason");
  const [purpose, setPurpose] = useState<Purpose>("casual");
  const [brand, setBrand] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = useCallback(
    (size: string, qty: number) => {
      const newItem: CartItem = {
        id: `${Date.now()}`,
        size,
        qty,
        season: seasonLabels[season],
        purpose: purposeLabels[purpose],
      };
      setCart((prev) => [...prev, newItem]);
      setCartOpen(true);
    },
    [season, purpose]
  );

  const handleRemoveFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cart.reduce((s, i) => s + i.qty, 0)} onCartClick={() => setCartOpen(true)} />

      <main className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Hero Banner */}
        <div className="py-6 lg:py-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-ds-red rounded-full text-xs font-body font-medium mb-4 animate-fade-in-up">
            Монобренд коллекция 2026
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-5xl text-ds-dark tracking-wide animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            ПОДБОР КОМПЛЕКТА
          </h2>
          <p className="text-ds-gray font-body text-sm lg:text-base mt-2 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Выберите сезон, назначение и соберите идеальный комплект оптовой одежды
          </p>
        </div>

        {/* Season Filter */}
        <div className="mb-6">
          <SeasonFilter selected={season} onChange={setSeason} />
        </div>

        {/* Gender Toggle */}
        <div className="mb-8">
          <GenderToggle selected={gender} onChange={setGender} />
        </div>

        {/* Main Content: Purpose | Avatar | Size Table */}
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_280px] gap-6 lg:gap-10 items-start">
          {/* Left: Purpose + Brand */}
          <div className="space-y-4 lg:sticky lg:top-24">
            <PurposeFilter selected={purpose} onChange={setPurpose} />
            <BrandInput value={brand} onChange={setBrand} />
          </div>

          {/* Center: Avatar */}
          <div className="flex justify-center" key={`${gender}-${season}-${purpose}`}>
            <AvatarViewer gender={gender} season={season} purpose={purpose} brand={brand} />
          </div>

          {/* Right: Size Table */}
          <div className="lg:sticky lg:top-24">
            <SizeTable onAddToCart={handleAddToCart} />
          </div>
        </div>

        {/* Reference Image */}
        <div className="mt-12 mb-8">
          <div className="text-center mb-6">
            <p className="text-xs text-ds-gray uppercase tracking-widest font-heading">Образец коллекции</p>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img
              src="https://cdn.poehali.dev/projects/faf175c9-a441-44e7-b1c2-e074c34a5317/bucket/f753f100-2c78-4984-b4a4-93ba01a87bbf.png"
              alt="Коллекция ДИПСНАБ — образцы одежды по слоям"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Product Tabs */}
        <div className="max-w-4xl mx-auto mt-8 mb-16">
          <ProductTabs season={season} purpose={purpose} />
        </div>
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
};

export default Index;
