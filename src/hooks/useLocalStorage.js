import { useEffect, useRef, useState } from 'react';
import { readStore, writeStore } from '../utils/storage';

/** useState that is initialised from, and mirrored to, namespaced localStorage. */
export function useLocalStorage(name, initial, validate) {
  const [value, setValue] = useState(() => readStore(name, initial, validate));
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    writeStore(name, value);
  }, [name, value]);
  return [value, setValue];
}
