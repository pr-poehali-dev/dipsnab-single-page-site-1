import Icon from "@/components/ui/icon";

export type Season = "summer" | "demiseason" | "winter";

interface SeasonFilterProps {
  selected: Season;
  onChange: (season: Season) => void;
}

const seasons: { id: Season; label: string; icon: string }[] = [
  { id: "summer", label: "Лето", icon: "Sun" },
  { id: "demiseason", label: "Демисезон", icon: "CloudSun" },
  { id: "winter", label: "Зима", icon: "Snowflake" },
];

const SeasonFilter = ({ selected, onChange }: SeasonFilterProps) => {
  return (
    <div className="flex items-center justify-center gap-2 animate-fade-in-up">
      {seasons.map((s) => (
        <button
          key={s.id}
          onClick={() => onChange(s.id)}
          className={`
            flex items-center gap-2 px-5 py-2.5 rounded-lg font-body font-medium text-sm
            transition-all duration-300 border
            ${
              selected === s.id
                ? "bg-ds-red text-white border-ds-red shadow-lg shadow-red-200"
                : "bg-white text-ds-dark border-gray-200 hover:border-ds-red hover:text-ds-red"
            }
          `}
        >
          <Icon name={s.icon} size={18} />
          {s.label}
        </button>
      ))}
    </div>
  );
};

export default SeasonFilter;
