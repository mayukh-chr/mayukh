import { Link } from 'react-router-dom';

export default function ArticleCard({ title, category, date, image, slug }) {
  return (
    <Link
      to={`/archive/${slug}`}
      className="relative block rounded-lg overflow-hidden shrink-0 no-underline group"
      style={{ height: '460px' }}
    >
      {/* Background image */}
      <img
        src={image || '/images/placeholder.jpg'}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-30 bg-linear-to-t from-black/50 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-2.5">
        <div
          className="backdrop-blur-[25px] bg-white/20 rounded-md w-full p-3"
          style={{ fontFamily: 'var(--font-geist)' }}
        >
          <h2
            className="text-[#F6F8FB] font-semibold text-[20px] leading-[1.4] tracking-[-0.4px]"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            {title}
          </h2>
          <div
            className="flex gap-1 items-center text-[#F6F8FB] font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] mt-0.5"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            <span>{category}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
