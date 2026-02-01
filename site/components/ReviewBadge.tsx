export default function ReviewBadge({ source }: { source?: string }) {
  if (source === "tradehub") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-trust/10 px-2 py-0.5 text-xs font-medium text-trust">
        ✓ Verified on TradeHub
      </span>
    );
  }
  return null;
}
