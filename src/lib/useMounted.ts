import { useEffect, useState } from "react";

/**
 * Returns false during SSR and the first client render, then true after mount.
 * Use to gate client-only animation so server and first client render match.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
