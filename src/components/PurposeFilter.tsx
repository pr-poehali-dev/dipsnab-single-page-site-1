import Icon from "@/components/ui/icon";

export type Purpose = "casual" | "sport" | "formal" | "workwear";

interface PurposeFilterProps {
  selected: Purpose;
  onChange: (purpose: Purpose) => void;
}

const purposes: { id: Purpose; label: string; icon: string }[] = [
  { id: "casual", label: "Повседневная", icon: "Shirt" },
  { id: "sport", label: "Спорт", icon: "Dumbbell" },
  { id: "formal", label: "Официальная", icon: "Briefcase" },
  { id: "workwear", label: "Спецодежда", icon: "HardHat" },
];

const PurposeFilter = ({ selected, onChange }: PurposeFilterProps) => {
  return (
    <div className="flex flex-col gap-2 animate-slide-left">
      <p className="text-xs text-ds-gray uppercase tracking-widest font-heading mb-1">Назначение</p>
      {purposes.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`
            flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm text-left
            transition-all duration-300 border
            ${
              selected === p.id
                ? "bg-ds-red text-white border-ds-red shadow-lg shadow-red-200"
                : "bg-white text-ds-dark border-gray-200 hover:border-ds-red hover:text-ds-red"
            }
          `}
        >
          <Icon name={p.icon} size={18} />
          {p.label}
        </button>
      ))}
    </div>
  );
};

export default PurposeFilter;
