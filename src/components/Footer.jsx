import { useEffect, useState } from 'react';

function useBreakpoint() {
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 1280
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  if (width < 800) return 'mobile';
  if (width < 1280) return 'tablet';
  return 'desktop';
}

function ColLabel({ text }) {
  return (
    <div className="flex items-center justify-end px-1.25 py-0.5 relative rounded-full shrink-0 border border-[#d1d2d8]">
      <span
        className="font-semibold text-[10px] leading-[1.4] tracking-[0.4px] uppercase text-[#d1d2d8] whitespace-nowrap"
        style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
      >
        {text}
      </span>
    </div>
  );
}

function LinksColumn({ align = 'start' }) {
  const isEnd = align === 'end';
  return (
    <div className={`flex flex-col gap-1.5 items-${align} shrink-0 w-35`}>
      <ColLabel text="Links" />
      <div
        className={`flex flex-col text-[#d1d2d8] text-[20px] leading-[1.4] tracking-[-0.4px] whitespace-nowrap items-${align}`}
        style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
      >
        {[
          { label: 'Home', href: '/' },
          { label: 'Archive', href: '/archive' },
          { label: 'Writing', href: '/writing' },
        ].map(({ label, href }) => (
          <a key={label} href={href} className={`block underline decoration-solid ${isEnd ? 'text-right' : ''}`}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function ConnectColumn({ align = 'start' }) {
  const isEnd = align === 'end';
  return (
    <div className={`flex flex-col gap-1.5 items-${align} shrink-0 w-35`}>
      <ColLabel text="Connect" />
      <div
        className={`flex flex-col text-[#d1d2d8] text-[20px] leading-[1.4] tracking-[-0.4px] underline whitespace-nowrap items-${align}`}
        style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
      >
        {[
          { label: 'Instagram', href: 'https://instagram.com/' },
          { label: 'Threads', href: 'https://threads.net/' },
          { label: 'YouTube', href: 'https://youtube.com/' },
          { label: 'Email', href: 'mailto:hello@example.com' },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className={`block decoration-solid ${isEnd ? 'text-right' : ''}`}
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function Copyright({ align = 'left' }) {
  return (
    <div
      className={`flex flex-col text-[#d1d2d8] text-[16px] leading-[1.4] tracking-[-0.32px] text-${align}`}
      style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
    >
      <p>©2025 Mayukh Saha</p>
      <p>Words, images, and signals from the edge</p>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="w-full">
      <span
        className="text-hero-text text-[clamp(32px,8vw,80px)] leading-[0.85] tracking-[-3px]"
        style={{ fontFamily: 'var(--font-tilt-warp)', fontVariationSettings: "'XROT' 0, 'YROT' 0" }}
      >
        Mayukh Saha
      </span>
    </div>
  );
}

function FooterMobile() {
  return (
    <footer className="w-full bg-fg rounded-lg">
      <div className="flex flex-col gap-20 items-center justify-end pb-5 pt-10 px-5 w-full">
        <Wordmark />
        <div className="flex flex-col gap-20 items-start w-full">
          <div className="flex gap-10 items-start w-full">
            <div className="flex-1 min-w-0">
              <LinksColumn align="start" />
            </div>
            <div className="flex-1 min-w-0">
              <ConnectColumn align="start" />
            </div>
          </div>
          <Copyright align="left" />
        </div>
      </div>
    </footer>
  );
}

function FooterTablet() {
  return (
    <footer className="w-full bg-fg rounded-lg">
      <div className="flex flex-col gap-20 items-center justify-end pb-5 pt-10 px-5 w-full">
        <Wordmark />
        <div className="flex gap-20 items-start w-full">
          <div className="flex gap-20 items-start shrink-0">
            <LinksColumn align="start" />
            <ConnectColumn align="start" />
          </div>
          <div className="flex-1 flex justify-end items-end">
            <Copyright align="right" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterDesktop() {
  return (
    <footer className="w-full bg-fg rounded-lg">
      <div className="flex flex-row items-end justify-center gap-10 pb-5 pt-30 px-5 w-full">
        <div className="flex-1 min-w-0 flex flex-col justify-end">
          <h2
            className="text-hero-text text-[200px] leading-[0.85] tracking-[-8px]"
            style={{ fontFamily: 'var(--font-tilt-warp)', fontVariationSettings: "'XROT' 0, 'YROT' 0" }}
          >
            Mayukh
            <br />
            Saha
          </h2>
        </div>
        <div className="flex flex-col gap-25 items-end shrink-0">
          <div className="flex gap-20 items-start">
            <LinksColumn align="end" />
            <ConnectColumn align="end" />
          </div>
          <Copyright align="right" />
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const bp = useBreakpoint();
  if (bp === 'mobile') return <FooterMobile />;
  if (bp === 'tablet') return <FooterTablet />;
  return <FooterDesktop />;
}
