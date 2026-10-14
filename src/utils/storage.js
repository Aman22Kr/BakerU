import { QUICK } from '../config/quickSettings';

const key = (k) => QUICK.STORAGE_PREFIX + k;

/** Safely read JSON from localStorage. Falls back to `fallback` on any problem. `validate` can reject bad shapes. */
export function readStore(k, fallback, validate) {
  try {
    const raw = window.localStorage.getItem(key(k));
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw);
    if (validate && !validate(parsed)) return fallback;
    return parsed;
  } catch {
    return fallback;
  }
}

export function writeStore(k, value) {
  try {
    window.localStorage.setItem(key(k), JSON.stringify(value));
    return true;
  } catch {
    return false; // storage full, blocked, or private mode
  }
}

export function clearAllStore() {
  try {
    Object.keys(window.localStorage)
      .filter((n) => n.startsWith(QUICK.STORAGE_PREFIX))
      .forEach((n) => window.localStorage.removeItem(n));
  } catch { /* ignore */ }
}
