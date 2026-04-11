export function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`shimmer rounded-lg bg-white/5 ${className}`}
      aria-hidden="true"
    />
  );
}

// a11y: 1775826947941

// skeleton: 1775870158759

// a11y: 1775870175481

// skeleton: 1775918958465

// a11y: 1775918986772
