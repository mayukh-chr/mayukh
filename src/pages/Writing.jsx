import { Link } from 'react-router-dom';
import { getWritingPosts } from '../lib/content';
import Footer from '../components/Footer';

const blogs = getWritingPosts();

export default function Writing() {
  return (
    <div className="flex flex-col w-full pt-20">
      {/* Header */}
      <div className="px-2.5 pt-10 pb-6">
        <h1
          className="text-fg text-[100px] md:text-[160px] leading-[0.8] tracking-[-5px] md:tracking-[-8px]"
          style={{ fontFamily: 'var(--font-tilt-warp)' }}
        >
          Writing
        </h1>
      </div>

      {/* Blog list */}
      <div className="px-2.5 flex flex-col w-full" style={{ fontFamily: 'var(--font-geist)' }}>
        {/* Column labels */}
        <div className="flex gap-4 items-center pb-2">
          <p
            className="flex-1 min-w-0 font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            Title
          </p>
          <p
            className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            Category
          </p>
          <p
            className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0 text-right w-20 md:w-30"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            Date
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col w-full">
          {blogs.map((blog, i) => (
            <Link
              key={blog.slug}
              to={`/writing/${blog.slug}`}
              className="relative block no-underline group"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderTop: i === 0 ? '1px dashed #555659' : 'none',
                  borderBottom: '1px dashed #555659',
                }}
              />
              <div className="flex gap-4 items-start py-4 text-[#f1f1f1]">
                <p
                  className="flex-1 min-w-0 font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] group-hover:opacity-70 transition-opacity"
                  style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
                >
                  {blog.title}
                </p>
                <p
                  className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0"
                  style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
                >
                  {blog.genre}
                </p>
                <p
                  className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0 text-right w-20 md:w-30"
                  style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
                >
                  {blog.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-2.5">
        <Footer />
      </div>
    </div>
  );
}
