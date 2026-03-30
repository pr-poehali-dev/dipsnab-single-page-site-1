import { useState } from "react";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-ds-red rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl lg:text-2xl tracking-wider text-ds-dark uppercase">
                ДИПСНАБ
              </h1>
              <p className="text-[10px] lg:text-xs text-ds-gray tracking-widest uppercase -mt-0.5">
                оптовая одежда
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-ds-dark">
            <a href="tel:+78001234567" className="flex items-center gap-2 hover:text-ds-red transition-colors">
              <Icon name="Phone" size={16} />
              <span className="font-body font-medium">8 (800) 123-45-67</span>
            </a>
            <a href="mailto:info@dipsnab.ru" className="flex items-center gap-2 hover:text-ds-red transition-colors">
              <Icon name="Mail" size={16} />
              <span className="font-body">info@dipsnab.ru</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-ds-light transition-colors"
            >
              <Icon name="ShoppingBag" size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-ds-red text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {cartCount}
                </span>
              )}
              <span className="hidden sm:inline text-sm font-medium">Корзина</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-ds-light transition-colors">
              <Icon name="User" size={20} />
              <span className="hidden sm:inline text-sm font-medium">Войти</span>
            </button>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-ds-light transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 pt-3 animate-fade-in-up">
            <a href="tel:+78001234567" className="flex items-center gap-3 py-2 text-sm">
              <Icon name="Phone" size={16} />
              8 (800) 123-45-67
            </a>
            <a href="mailto:info@dipsnab.ru" className="flex items-center gap-3 py-2 text-sm">
              <Icon name="Mail" size={16} />
              info@dipsnab.ru
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
