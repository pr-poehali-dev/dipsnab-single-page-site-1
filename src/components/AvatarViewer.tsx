import { type Gender } from "./GenderToggle";
import { type Season } from "./SeasonFilter";
import { type Purpose } from "./PurposeFilter";

interface AvatarViewerProps {
  gender: Gender;
  season: Season;
  purpose: Purpose;
  brand: string;
}

const outfitData: Record<string, { items: string[]; colors: string[] }> = {
  "male-summer-casual": { items: ["Футболка", "Шорты", "Кроссовки"], colors: ["#E8E4E0", "#C4BFBA", "#A09B96"] },
  "male-summer-sport": { items: ["Спортивная футболка", "Спортивные шорты", "Кроссовки"], colors: ["#D4D0CC", "#B8B4B0", "#9C9894"] },
  "male-summer-formal": { items: ["Поло", "Чинос", "Лоферы"], colors: ["#E0DCD8", "#C8C4C0", "#B0ACA8"] },
  "male-summer-workwear": { items: ["Рабочая футболка", "Рабочие брюки", "Ботинки"], colors: ["#D0CCC8", "#A8A4A0", "#888480"] },
  "male-demiseason-casual": { items: ["Джемпер", "Брюки", "Ветровка", "Кроссовки"], colors: ["#D8D4D0", "#C0BCB8", "#A8A4A0", "#908C88"] },
  "male-demiseason-sport": { items: ["Худи", "Спортивные брюки", "Кроссовки"], colors: ["#CCC8C4", "#B4B0AC", "#9C9894"] },
  "male-demiseason-formal": { items: ["Костюм (куртка + брюки)", "Рубашка", "Ботинки"], colors: ["#C4C0BC", "#D8D4D0", "#A09C98"] },
  "male-demiseason-workwear": { items: ["Куртка рабочая", "Брюки рабочие", "Ботинки"], colors: ["#B8B4B0", "#A0A09C", "#888480"] },
  "male-winter-casual": { items: ["Пуховик", "Джемпер", "Брюки", "Ботинки", "Шапка"], colors: ["#D0CCC8", "#E0DCD8", "#B8B4B0", "#908C88", "#C4C0BC"] },
  "male-winter-sport": { items: ["Утепл. куртка", "Термобелье", "Брюки", "Кроссовки"], colors: ["#C8C4C0", "#E4E0DC", "#B0ACA8", "#9C9894"] },
  "male-winter-formal": { items: ["Пальто", "Костюм", "Рубашка", "Ботинки", "Шарф"], colors: ["#B8B4B0", "#C8C4C0", "#E0DCD8", "#888480", "#D0CCC8"] },
  "male-winter-workwear": { items: ["Утепл. куртка", "Жилет", "Брюки", "Ботинки", "Шапка"], colors: ["#A8A4A0", "#B8B4B0", "#989490", "#808078", "#C0BCB8"] },
  "female-summer-casual": { items: ["Футболка", "Юбка", "Кеды"], colors: ["#EAE6E2", "#D4D0CC", "#C0BCB8"] },
  "female-summer-sport": { items: ["Топ", "Леггинсы", "Кроссовки"], colors: ["#E0DCD8", "#C8C4C0", "#B0ACA8"] },
  "female-summer-formal": { items: ["Блуза", "Брюки", "Туфли"], colors: ["#EEE6E2", "#D0CCC8", "#B8B4B0"] },
  "female-summer-workwear": { items: ["Рабочая футболка", "Рабочие брюки", "Ботинки"], colors: ["#D4D0CC", "#A8A4A0", "#908C88"] },
  "female-demiseason-casual": { items: ["Свитер", "Джинсы", "Ветровка", "Кроссовки"], colors: ["#DCD8D4", "#C4C0BC", "#B0ACA8", "#A09C98"] },
  "female-demiseason-sport": { items: ["Худи", "Спортивные брюки", "Кроссовки"], colors: ["#D0CCC8", "#B8B4B0", "#A09C98"] },
  "female-demiseason-formal": { items: ["Тренч", "Платье", "Ботильоны"], colors: ["#C8C4C0", "#E0DCD8", "#A8A4A0"] },
  "female-demiseason-workwear": { items: ["Куртка рабочая", "Брюки рабочие", "Ботинки"], colors: ["#B8B4B0", "#A4A09C", "#8C8884"] },
  "female-winter-casual": { items: ["Пуховик", "Свитер", "Брюки", "Ботинки", "Шапка"], colors: ["#D4D0CC", "#E4E0DC", "#BCB8B4", "#949090", "#C8C4C0"] },
  "female-winter-sport": { items: ["Утепл. куртка", "Термобелье", "Леггинсы", "Кроссовки"], colors: ["#CCC8C4", "#E8E4E0", "#B4B0AC", "#A09C98"] },
  "female-winter-formal": { items: ["Шуба", "Платье", "Сапоги", "Шарф"], colors: ["#BCB8B4", "#D8D4D0", "#908C88", "#D0CCC8"] },
  "female-winter-workwear": { items: ["Утепл. куртка", "Жилет", "Брюки", "Ботинки", "Шапка"], colors: ["#A8A4A0", "#BCB8B4", "#989490", "#848080", "#C4C0BC"] },
};

const AvatarViewer = ({ gender, season, purpose, brand }: AvatarViewerProps) => {
  const key = `${gender}-${season}-${purpose}`;
  const outfit = outfitData[key] || { items: ["Футболка", "Брюки", "Кроссовки"], colors: ["#E0DCD8", "#C4C0BC", "#A09C98"] };

  const isMale = gender === "male";

  return (
    <div className="relative flex flex-col items-center animate-scale-in">
      <div className="relative w-[260px] h-[440px] lg:w-[300px] lg:h-[500px]">
        <svg viewBox="0 0 300 500" className="w-full h-full" style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.08))" }}>
          <defs>
            <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F0DDD0" />
              <stop offset="100%" stopColor="#E8CFC0" />
            </linearGradient>
            <linearGradient id="hairGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isMale ? "#5C4033" : "#6B4423"} />
              <stop offset="100%" stopColor={isMale ? "#3E2723" : "#4E342E"} />
            </linearGradient>
          </defs>

          {/* Hair */}
          {isMale ? (
            <ellipse cx="150" cy="58" rx="42" ry="30" fill="url(#hairGrad)" />
          ) : (
            <>
              <ellipse cx="150" cy="55" rx="48" ry="35" fill="url(#hairGrad)" />
              <path d="M102 55 Q100 120 108 140" stroke="url(#hairGrad)" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d="M198 55 Q200 120 192 140" stroke="url(#hairGrad)" strokeWidth="12" fill="none" strokeLinecap="round" />
            </>
          )}

          {/* Head */}
          <ellipse cx="150" cy="72" rx="36" ry="42" fill="url(#skinGrad)" />
          {/* Eyes */}
          <ellipse cx="137" cy="70" rx="4" ry="4.5" fill="#3E2723" />
          <ellipse cx="163" cy="70" rx="4" ry="4.5" fill="#3E2723" />
          <circle cx="136" cy="69" r="1.2" fill="white" />
          <circle cx="162" cy="69" r="1.2" fill="white" />
          {/* Mouth */}
          <path d="M142 84 Q150 90 158 84" stroke="#C0887A" strokeWidth="2" fill="none" strokeLinecap="round" />
          {/* Neck */}
          <rect x="140" y="110" width="20" height="18" rx="4" fill="url(#skinGrad)" />

          {/* Torso - jacket/shirt */}
          <path
            d={isMale
              ? "M100 128 Q100 125 110 122 L140 118 L160 118 L190 122 Q200 125 200 128 L205 260 Q205 268 195 270 L105 270 Q95 268 95 260 Z"
              : "M108 128 Q108 125 116 122 L140 118 L160 118 L184 122 Q192 125 192 128 L195 255 Q195 263 185 265 L115 265 Q105 263 105 255 Z"
            }
            fill={outfit.colors[0]}
            stroke={outfit.colors[0]}
            strokeWidth="0.5"
          />

          {/* Arms */}
          <path
            d={isMale
              ? "M100 132 L78 210 Q74 222 80 228 L90 230 L105 180 L100 132"
              : "M108 132 L88 205 Q84 217 90 222 L98 224 L112 175 L108 132"
            }
            fill={outfit.colors[0]}
          />
          <path
            d={isMale
              ? "M200 132 L222 210 Q226 222 220 228 L210 230 L195 180 L200 132"
              : "M192 132 L212 205 Q216 217 210 222 L202 224 L188 175 L192 132"
            }
            fill={outfit.colors[0]}
          />
          {/* Hands */}
          <ellipse cx={isMale ? 84 : 93} cy={isMale ? 230 : 224} rx="9" ry="10" fill="url(#skinGrad)" />
          <ellipse cx={isMale ? 216 : 207} cy={isMale ? 230 : 224} rx="9" ry="10" fill="url(#skinGrad)" />

          {/* Pants/skirt */}
          {purpose === "formal" && !isMale ? (
            <path d="M105 265 L95 380 Q95 385 150 385 Q205 385 205 380 L195 265 Z" fill={outfit.colors[1]} />
          ) : (
            <>
              <path
                d={isMale
                  ? "M95 268 L90 395 Q90 400 115 400 L145 400 L150 275 L155 400 L185 400 Q210 400 210 395 L205 268 Z"
                  : "M105 263 L100 390 Q100 395 120 395 L145 395 L150 270 L155 395 L180 395 Q200 395 200 390 L195 263 Z"
                }
                fill={outfit.colors[1] || outfit.colors[0]}
              />
            </>
          )}

          {/* Shoes */}
          <path
            d={isMale
              ? "M90 395 Q85 405 80 410 Q78 418 90 418 L118 418 Q125 418 125 412 L120 395 Z"
              : "M100 390 Q95 400 92 405 Q90 413 100 413 L123 413 Q128 413 128 407 L124 390 Z"
            }
            fill={outfit.colors[2] || outfit.colors[1]}
          />
          <path
            d={isMale
              ? "M210 395 Q215 405 220 410 Q222 418 210 418 L182 418 Q175 418 175 412 L180 395 Z"
              : "M200 390 Q205 400 208 405 Q210 413 200 413 L177 413 Q172 413 172 407 L176 390 Z"
            }
            fill={outfit.colors[2] || outfit.colors[1]}
          />

          {/* Winter extras: hat */}
          {season === "winter" && (
            <>
              <ellipse cx="150" cy="38" rx="44" ry="16" fill={outfit.colors[4] || outfit.colors[0]} />
              <rect x="108" y="28" width="84" height="18" rx="8" fill={outfit.colors[4] || outfit.colors[0]} />
              <circle cx="150" cy="22" r="6" fill={outfit.colors[4] || outfit.colors[0]} />
            </>
          )}

          {/* Demiseason: scarf detail */}
          {season === "demiseason" && (
            <path d="M135 118 Q150 130 165 118" stroke={outfit.colors[2] || "#B0ACA8"} strokeWidth="6" fill="none" strokeLinecap="round" />
          )}

          {/* Brand on chest */}
          {brand && (
            <text
              x="150"
              y="185"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontFamily="'Oswald', sans-serif"
              fontWeight="600"
              letterSpacing="2"
              opacity="0.9"
              style={{ textTransform: "uppercase" }}
            >
              {brand.substring(0, 12)}
            </text>
          )}
        </svg>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {outfit.items.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-body bg-gray-100 text-ds-dark border border-gray-200"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AvatarViewer;
