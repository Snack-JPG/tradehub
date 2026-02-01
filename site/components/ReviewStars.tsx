export default function ReviewStars({ rating, count }: { rating: number; count?: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return (
    <div className="mt-2 flex items-center gap-1">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="text-amber-500">★</span>
      ))}
      {hasHalf && <span className="text-amber-500">★</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} className="text-slate-300">★</span>
      ))}
      <span className="ml-1 font-mono text-sm font-medium text-navy-950">{rating}</span>
      {count !== undefined && (
        <span className="text-sm text-slate-500">({count} reviews)</span>
      )}
    </div>
  );
}
