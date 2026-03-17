import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
import { getArchivePosts } from '../lib/content';

const projects = getArchivePosts().slice(0, 4);

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-2.5 w-full shrink-0">
      {/* Articles grid */}
      <div className="flex flex-row flex-wrap justify-center items-start gap-2.5 w-full">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="w-full md:w-[calc(50%-5px)]"
          >
            <ArticleCard
              title={project.title}
              category={project.genre}
              date={project.year}
              image={project.image}
              slug={project.slug}
            />
          </div>
        ))}
      </div>

      {/* View all button */}
      <Link
        to="/archive"
        aria-label="View all projects"
        className="relative block rounded-lg overflow-hidden w-full no-underline bg-white shrink-0"
        style={{ minHeight: '68px' }}
      >
        <div className="flex items-center justify-center px-6 py-4 md:py-8 w-full">
          <span
            className="text-[#1a1a1a] text-[48px] md:text-[80px] leading-[0.9] tracking-[-1.6px] italic"
            style={{ fontFamily: 'var(--font-instrument-serif)' }}
          >
            View all
          </span>
        </div>
      </Link>
    </section>
  );
}
