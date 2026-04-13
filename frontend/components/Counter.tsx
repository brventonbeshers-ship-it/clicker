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
