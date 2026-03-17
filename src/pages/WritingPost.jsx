import { useParams, Link } from 'react-router-dom';
import { getWritingPosts } from '../lib/content';
import PostLayout from '../components/PostLayout';

export default function WritingPost() {
  const { slug } = useParams();
  const all = getWritingPosts();
  const post = all.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col w-full pt-20 px-2.5 min-h-screen" style={{ fontFamily: 'var(--font-geist)' }}>
        <p className="text-fg opacity-60">Post not found.</p>
        <Link to="/writing" className="text-fg underline mt-4">← Back to Writing</Link>
      </div>
    );
  }

  const suggested = all.filter(p => p.slug !== slug).slice(0, 4);

  return (
    <PostLayout
      post={post}
      backHref="/writing"
      backLabel="Writing"
      metaLine={`${post.genre} · ${post.date}, ${post.year}`}
      suggested={suggested}
      suggestedHref="/writing"
      suggestedMeta={p => `${p.genre} · ${p.date}`}
      suggestedLabel="More Writing"
    />
  );
}
