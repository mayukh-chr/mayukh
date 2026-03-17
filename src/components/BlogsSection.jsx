import { Link } from 'react-router-dom';
import { getWritingPosts } from '../lib/content';

const blogs = getWritingPosts();

function BlogRow({ title, category, date, slug, isFirst }) {
  return (
    <Link
      to={`/writing/${slug}`}
      className="relative block no-underline group"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderTop: isFirst ? '1px dashed #555659' : 'none',
          borderBottom: '1px dashed #555659',
        }}
      />
      <div
        className="flex gap-4 items-start py-4 text-[#0F0E0E]"
        style={{ fontFamily: 'var(--font-geist)' }}
      >
        <p
          className="flex-1 min-w-0 font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] group-hover:opacity-70 transition-opacity"
          style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
        >
          {title}
        </p>
        <p
          className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0"
          style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
        >
          {category}
        </p>
        <p
          className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0 text-right w-20 md:w-30"
          style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
        >
          {date}
        </p>
      </div>
    </Link>
  );
}

export default function BlogsSection() {
  return (
    <section
      className="relative w-full rounded-lg shrink-0 bg-[#F5F5F5]"
    >
      <div className="flex flex-col gap-20 items-start px-2.5 py-10 md:py-15 w-full">
        {/* Section heading */}
        <h2
          className="text-[#0F0E0E] text-[100px] md:text-[160px] leading-[0.8] tracking-[-5px] md:tracking-[-8px]"
          style={{ fontFamily: 'var(--font-tilt-warp)' }}
        >
          Writing
        </h2>

        {/* Blog list */}
        <div className="w-full">
          {/* Column labels */}
          <div
            className="flex gap-4 items-center pb-2"
            style={{ fontFamily: 'var(--font-geist)' }}
          >
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
              <BlogRow
                key={blog.slug}
                title={blog.title}
                category={blog.genre}
                date={blog.date}
                slug={blog.slug}
                isFirst={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
