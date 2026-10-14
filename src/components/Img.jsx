import { useState } from 'react';
import { fullImg, PLACEHOLDER } from '../utils/format';

/** Image with a fallback chain: full-size → thumbnail → placeholder, so no broken images ever show. */
export default function Img({ src, alt, className = '', eager = false, ...rest }) {
  const chain = [fullImg(src), src, PLACEHOLDER].filter(Boolean);
  const [i, setI] = useState(0);
  return (
    <img
      src={chain[Math.min(i, chain.length - 1)]}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setI((n) => n + 1)}
      className={className}
      {...rest}
    />
  );
}
