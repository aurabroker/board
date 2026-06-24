import {
  ArrowRight,
  Download,
  Check,
  X,
  Crown,
  Users,
  Calculator,
  FileSignature,
  Landmark,
  Phone,
  Ghost,
} from 'lucide-react';

const ICONS = {
  'arrow-right': ArrowRight,
  download: Download,
  check: Check,
  x: X,
  crown: Crown,
  users: Users,
  calculator: Calculator,
  'file-signature': FileSignature,
  landmark: Landmark,
  phone: Phone,
  ghost: Ghost,
};

/** Aura D&O — Icon. Thin wrapper over lucide-react, looked up by kebab-case name. */
export function Icon({ name, size = 24, color = 'currentColor', strokeWidth = 1.75, style }) {
  const LucideIcon = ICONS[name];
  if (!LucideIcon) return null;
  return (
    <LucideIcon
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      style={{ flexShrink: 0, ...style }}
    />
  );
}
