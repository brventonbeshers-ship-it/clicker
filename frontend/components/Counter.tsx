interface CounterProps {
  label: string;
  value: number;
  size?: "sm" | "lg";
}

export function Counter({ label, value, size = "sm" }: CounterProps) {
  const textSize = size === "lg" ? "text-4xl md:text-5xl" : "text-2xl";
  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1">
        {label}
      </p>
      <p className={`${textSize} font-bold counter-num`}>
        {value.toLocaleString()}
      </p>
    </div>
  );
}

// memo: 1775826924669

// counter: 1775826932044

// counter: 1775870172317

// memo: 1775870260161

// counter: 1775918903551

// memo: 1775919101570

// memo: 1775931924809

// counter: 1775932008298

// counter: 1775965437579

// memo: 1775965516719

// counter: 1776061568123

// memo: 1776061650439

// counter: 1776082411669

// memo: 1776082667343

// memo: 1776114496954

// counter: 1776114575327

// memo: 1776142454219

// counter: 1776142549829

// memo: 1776169352027

// counter: 1776169427187

// memo: 1776184835905

// counter: 1776184853056

// memo: 1776213867630

// counter: 1776213877190

// counter: 1776246447178

// memo: 1776246456537

// memo: 1776254993208

// counter: 1776255231254

// counter: 1776268271268

// memo: 1776268476041

// counter: 1776314096135

// counter: 1776329764341

// memo: 1776329809413

// memo: 1776348136097

// counter: 1776348314600

// memo: 1776371307744

// counter: 1776371467566

// memo: 1776399677832

// counter: 1776399743434

// memo: 1776430534378

// counter: 1776457987247

// memo: 1776458026923

// counter: 1776477595558

// memo: 1776477606292

// counter: 1776491739562

// memo: 1776491834488

// memo: 1776516185899

// counter: 1776516192388

// memo: 1776547727036

// counter: 1776547771868

// counter: 1776583272542

// memo: 1776583382219

// counter: 1776617123070

// memo: 1776617228895

// counter: 1776642389076

// memo: 1776642406111

// counter: 1776670169539

// memo: 1776670212246

// counter: 1776677506947

// counter: 1776699391865

// memo: 1776699476552

// memo: 1776749534769

// counter: 1776749689398

// counter: 1776779117007

// memo: 1776779215644

// counter: 1776802268299

// memo: 1776802324819

// memo: 1776815459517

// counter: 1776815477774

// memo: 1776832325444
