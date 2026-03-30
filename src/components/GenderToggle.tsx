import Icon from "@/components/ui/icon";

export type Gender = "male" | "female";

interface GenderToggleProps {
  selected: Gender;
  onChange: (gender: Gender) => void;
}

const GenderToggle = ({ selected, onChange }: GenderToggleProps) => {
  return (
    <div className="flex items-center justify-center gap-1 bg-gray-100 rounded-xl p-1 animate-fade-in-up">
      <button
        onClick={() => onChange("male")}
        className={`
          flex items-center gap-2 px-5 py-2 rounded-lg font-body font-medium text-sm transition-all duration-300
          ${selected === "male" ? "bg-ds-dark text-white shadow-md" : "text-ds-gray hover:text-ds-dark"}
        `}
      >
        <Icon name="User" size={16} />
        Мужской
      </button>
      <button
        onClick={() => onChange("female")}
        className={`
          flex items-center gap-2 px-5 py-2 rounded-lg font-body font-medium text-sm transition-all duration-300
          ${selected === "female" ? "bg-ds-dark text-white shadow-md" : "text-ds-gray hover:text-ds-dark"}
        `}
      >
        <Icon name="User" size={16} />
        Женский
      </button>
    </div>
  );
};

export default GenderToggle;
