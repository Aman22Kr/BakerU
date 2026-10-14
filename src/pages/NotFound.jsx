import Empty from '../components/Empty';
export default function NotFound({ what = 'page' }) {
  return <div className="container max-w-page py-16"><Empty icon="🍪" title={`Oops, this ${what} crumbled`} text="We couldn't find what you were looking for." cta="Back to home" to="/" /></div>;
}
