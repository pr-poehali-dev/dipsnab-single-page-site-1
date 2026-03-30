import { useState } from "react";
import Icon from "@/components/ui/icon";

interface BrandInputProps {
  value: string;
  onChange: (val: string) => void;
}

const BrandInput = ({ value, onChange }: BrandInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="animate-slide-left" style={{ animationDelay: "0.15s" }}>
      <div
        className={`
          relative border-2 rounded-xl px-4 py-3 transition-all duration-300
          ${focused ? "border-ds-red bg-red-50/30 shadow-lg shadow-red-100" : "border-dashed border-gray-300 bg-gray-50 hover:border-gray-400"}
        `}
      >
        <div className="flex items-center gap-2 mb-2">
          <Icon name="Tag" size={14} className="text-ds-red" />
          <span className="text-xs font-heading uppercase tracking-widest text-ds-gray">Ваш бренд</span>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Название бренда"
          maxLength={20}
          className="w-full bg-transparent text-sm font-body font-medium text-ds-dark placeholder:text-gray-400 outline-none"
        />
        {value && (
          <p className="text-[10px] text-ds-red mt-1.5 font-body">
            Отображается на одежде аватара
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandInput;
