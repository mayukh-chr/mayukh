import { Link } from 'react-router-dom';
import { getArchivePosts } from '../lib/content';
import Footer from '../components/Footer';

const allProjects = getArchivePosts();

export default function Archive() {
  return (
    <div className="flex flex-col w-full pt-[80px]">
      {/* Header */}
      <div className="px-[10px] pt-10 pb-6">
        <h1
          className="text-[f1f1f1] text-[100px] md:text-[160px] leading-[0.8] tracking-[-5px] md:tracking-[-8px]"
          style={{ fontFamily: 'var(--font-tilt-warp)' }}
        >
          Archive
        </h1>
      </div>

      {/* Projects list */}
      <div className="px-2.5 flex flex-col w-full" style={{ fontFamily: 'var(--font-geist)' }}>
        {/* Column labels */}
        <div className="flex gap-4 items-center pb-2">
          <p
            className="flex-1 min-w-0 font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            Project
          </p>
          <p
            className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0 w-25 md:w-40"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            Year
          </p>
          <p
            className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0 text-right w-25 md:w-40"
            style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
          >
            Category
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col w-full">
          {allProjects.map((project, i) => (
            <Link
              key={project.slug}
              to={`/archive/${project.slug}`}
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
                  {project.title}
                </p>
                <p
                  className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0 w-[100px] md:w-[160px]"
                  style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
                >
                  {project.year}
                </p>
                <p
                  className="font-semibold text-[20px] leading-[1.4] tracking-[-0.4px] opacity-60 shrink-0 text-right w-[100px] md:w-[160px]"
                  style={{ fontFeatureSettings: "'ss01', 'ss03'" }}
                >
                  {project.genre}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="px-[10px]">
        <Footer />
      </div>
    </div>
  );
}
