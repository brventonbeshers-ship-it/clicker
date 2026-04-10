export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`shimmer rounded-lg bg-white/5 ${className}`}
      aria-hidden="true"
    />
  );
}

// a11y: 1775826947941
