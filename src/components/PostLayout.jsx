import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Footer from './Footer';

function SuggestedRow({ post, href, meta }) {
  return (
    <Link to={href} className="relative block no-underline group">
      <div className="flex gap-4 items-center py-4 text-fg border-b border-dashed border-[#555659]">
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-10 h-10 rounded object-cover shrink-0"
          />
        )}
        <p
          className="flex-1 min-w-0 font-semibold text-[18px] leading-[1.4] tracking-[-0.3px] group-hover:opacity-70 transition-opacity"
          style={{ fontFamily: 'var(--font-geist)', fontFeatureSettings: "'ss01', 'ss03'" }}
        >
          {post.title}
        </p>
        <p
          className="font-semibold text-[16px] leading-[1.4] opacity-50 shrink-0"
          style={{ fontFamily: 'var(--font-geist)' }}
        >
          {meta}
        </p>
      </div>
    </Link>
  );
}

export default function PostLayout({
  post,
  backHref,
  backLabel,
  metaLine,
  suggested,
  suggestedHref,
  suggestedMeta,
  suggestedLabel,
}) {
  return (
    <div className="flex flex-col w-full pt-[48px]">

      {/* Header */}
      <div className="px-2.5 pt-10 pb-10 flex flex-col gap-4 w-full items-center">
        <div className="w-full">
          <Link
            to={backHref}
            className="text-fg opacity-50 hover:opacity-100 transition-opacity no-underline text-[14px] tracking-[-0.2px]"
            style={{ fontFamily: 'var(--font-geist)' }}
          >
            ← {backLabel}
          </Link>
        </div>

        <h1 className="text-h3 text-fg text-center">
          {post.title}
        </h1>

        <p className="text-h4 text-fg opacity-60 italic text-center">
          {metaLine}
        </p>
      </div>

      {/* Cover image */}
      <div className="w-full pb-12">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full object-cover aspect-[16/7]"
          />
        ) : (
          <div className="w-full aspect-[16/7] bg-fg/5" />
        )}
      </div>

      {/* Body */}
      <div className="px-2.5 pb-24 w-full max-w-[720px] mx-auto post-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Suggested posts */}
      {suggested.length > 0 && (
        <div className="px-2.5 pb-16" style={{ fontFamily: 'var(--font-geist)' }}>
          <p className="text-fg opacity-40 text-[12px] font-semibold uppercase tracking-[0.6px] pb-2 border-b border-dashed border-[#555659]">
            {suggestedLabel}
          </p>
          {suggested.map(p => (
            <SuggestedRow
              key={p.slug}
              post={p}
              href={`${suggestedHref}/${p.slug}`}
              meta={suggestedMeta(p)}
            />
          ))}
        </div>
      )}

      <div className="px-2.5">
        <Footer />
      </div>
    </div>
  );
}
