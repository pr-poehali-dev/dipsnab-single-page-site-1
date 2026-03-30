import { useState } from "react";
import Icon from "@/components/ui/icon";

interface SizeTableProps {
  onAddToCart: (size: string, qty: number) => void;
}

const sizes = [
  { size: "XS", ru: "42", chest: "84-88", waist: "64-68", stock: 120 },
  { size: "S", ru: "44", chest: "88-92", waist: "68-72", stock: 340 },
  { size: "M", ru: "46-48", chest: "92-100", waist: "72-80", stock: 580 },
  { size: "L", ru: "50-52", chest: "100-108", waist: "80-88", stock: 420 },
  { size: "XL", ru: "54-56", chest: "108-116", waist: "88-96", stock: 260 },
  { size: "XXL", ru: "58-60", chest: "116-124", waist: "96-104", stock: 85 },
];

const SizeTable = ({ onAddToCart }: SizeTableProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [qty, setQty] = useState(10);

  return (
    <div className="animate-slide-right">
      <p className="text-xs text-ds-gray uppercase tracking-widest font-heading mb-3">Размеры и остатки</p>

      <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
        <table className="w-full text-sm font-body">
          <thead>
            <tr className="bg-gray-50 text-ds-gray">
              <th className="px-3 py-2.5 text-left font-medium text-xs">Размер</th>
              <th className="px-3 py-2.5 text-left font-medium text-xs">РУ</th>
              <th className="px-3 py-2.5 text-left font-medium text-xs hidden lg:table-cell">Грудь</th>
              <th className="px-3 py-2.5 text-right font-medium text-xs">Остаток</th>
            </tr>
          </thead>
          <tbody>
            {sizes.map((s) => (
              <tr
                key={s.size}
                onClick={() => setSelectedSize(s.size === selectedSize ? null : s.size)}
                className={`
                  cursor-pointer transition-all duration-200 border-t border-gray-100
                  ${selectedSize === s.size ? "bg-red-50" : "hover:bg-gray-50"}
                `}
              >
                <td className="px-3 py-2.5">
                  <span className={`font-heading font-semibold ${selectedSize === s.size ? "text-ds-red" : "text-ds-dark"}`}>
                    {s.size}
                  </span>
                </td>
                <td className="px-3 py-2.5 text-ds-gray">{s.ru}</td>
                <td className="px-3 py-2.5 text-ds-gray hidden lg:table-cell">{s.chest}</td>
                <td className="px-3 py-2.5 text-right">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.stock > 200 ? "bg-green-100 text-green-700" : s.stock > 50 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                    {s.stock} шт
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedSize && (
        <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200 animate-fade-in-up">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-body text-ds-dark">
              Размер <span className="font-heading font-bold text-ds-red">{selectedSize}</span>
            </span>
            <span className="text-xs text-ds-gray">мин. 10 шт</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setQty(Math.max(10, qty - 10))}
                className="px-3 py-2 hover:bg-gray-100 transition-colors"
              >
                <Icon name="Minus" size={14} />
              </button>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(Math.max(10, parseInt(e.target.value) || 10))}
                className="w-16 text-center text-sm font-medium border-x border-gray-300 py-2 outline-none bg-white"
              />
              <button
                onClick={() => setQty(qty + 10)}
                className="px-3 py-2 hover:bg-gray-100 transition-colors"
              >
                <Icon name="Plus" size={14} />
              </button>
            </div>

            <button
              onClick={() => onAddToCart(selectedSize, qty)}
              className="flex-1 flex items-center justify-center gap-2 bg-ds-red text-white py-2.5 rounded-lg font-body font-medium text-sm hover:bg-red-700 transition-colors shadow-lg shadow-red-200"
            >
              <Icon name="ShoppingBag" size={16} />
              В корзину
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SizeTable;
