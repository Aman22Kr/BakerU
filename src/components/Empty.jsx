import { Link } from 'react-router-dom';
export default function Empty({ title, text, cta, to = '/products', icon = '🧁' }) {
  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-3" aria-hidden>{icon}</div>
      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      {text && <p className="muted text-sm mb-5">{text}</p>}
      {cta && <Link to={to} className="btn btn-primary">{cta}</Link>}
    </div>
  );
}
