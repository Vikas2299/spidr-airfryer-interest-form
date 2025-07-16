export function formatPin(pin: string) {
  // Remove all non-digits, then insert dashes every 4 digits
  const digits = pin.replace(/\D/g, '').slice(0, 16);
  return digits.replace(/(.{4})/g, '$1-').replace(/-$/, '');
}

export function maskPinWithDashes(pin: string) {
  // Mask digits with • but keep dashes
  return pin.replace(/\d/g, '•');
} 