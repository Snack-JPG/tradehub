import {
  Wrench,
  Zap,
  Home,
  Hammer,
  Trees,
  Paintbrush,
  Key,
  Flame,
  Grid3x3,
  Frame,
  HardHat,
  Droplets,
  LucideIcon,
} from "lucide-react";

// Map trade slugs to Lucide icons
const TRADE_ICON_MAP: Record<string, LucideIcon> = {
  plumbers: Droplets,
  electricians: Zap,
  roofers: Home,
  builders: HardHat,
  landscapers: Trees,
  plasterers: Paintbrush,
  painters: Paintbrush,
  carpenters: Hammer,
  locksmiths: Key,
  handymen: Wrench,
  "gas-engineers": Flame,
  tilers: Grid3x3,
  fencing: Frame,
};

interface TradeIconProps {
  tradeSlug: string;
  className?: string;
  size?: number;
}

export default function TradeIcon({
  tradeSlug,
  className = "h-8 w-8",
  size,
}: TradeIconProps) {
  const Icon = TRADE_ICON_MAP[tradeSlug] || Wrench; // Default to wrench if not found

  if (size) {
    return <Icon className={className} size={size} />;
  }

  return <Icon className={className} />;
}

// Export the map for other uses
export { TRADE_ICON_MAP };
