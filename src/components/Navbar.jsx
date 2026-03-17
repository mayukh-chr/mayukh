import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const links = [
    { label: 'Work', href: '/archive', color: '#ff8000' },
    { label: 'Writing', href: '/writing', color: '#00e054' },
    { label: 'CV', href: '/cv.pdf', color: '#40bcf4' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-5 h-12"
      style={{ fontFamily: 'var(--font-geist)' }}
    >
      {/* Logo / home link */}
      <Link
        to="/"
        className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] text-fg no-underline"
        style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
      >
        M.S
      </Link>

      {/* Nav links — absolutely centered */}
      <div className="absolute left-1/2 -translate-x-1/2 flex gap-2 items-center">
        {links.map(({ label, href, color }) => {
          const isActive = pathname === href;
          const baseClass = "font-semibold text-[14px] leading-[1.4] tracking-[-0.4px] text-white no-underline transition-opacity w-20 py-1 rounded text-center";
          const style = { fontFeatureSettings: "'ss01', 'ss03'", backgroundColor: color };
          return href === '/cv.pdf' ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`${baseClass} opacity-70 hover:opacity-100`}
              style={style}
            >
              {label}
            </a>
          ) : (
            <Link
              key={label}
              to={href}
              className={`${baseClass} ${isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`}
              style={style}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
