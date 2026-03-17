import { useParams, Link } from 'react-router-dom';
import { getArchivePosts } from '../lib/content';
import PostLayout from '../components/PostLayout';

export default function ArchivePost() {
  const { slug } = useParams();
  const all = getArchivePosts();
  const project = all.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="flex flex-col w-full pt-20 px-2.5 min-h-screen" style={{ fontFamily: 'var(--font-geist)' }}>
        <p className="text-fg opacity-60">Project not found.</p>
        <Link to="/archive" className="text-fg underline mt-4">← Back to Archive</Link>
      </div>
    );
  }

  const suggested = all.filter(p => p.slug !== slug).slice(0, 4);

  return (
    <PostLayout
      post={project}
      backHref="/archive"
      backLabel="Archive"
      metaLine={`${project.genre} · ${project.year}`}
      suggested={suggested}
      suggestedHref="/archive"
      suggestedMeta={p => `${p.genre} · ${p.year}`}
      suggestedLabel="More Work"
    />
  );
}
