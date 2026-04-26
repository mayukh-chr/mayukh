import { useState, useEffect } from 'react';

const BUCKET = import.meta.env.VITE_S3_BUCKET;
const REGION = import.meta.env.VITE_S3_REGION;

const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|gif|avif)$/i;

async function fetchS3Images(prefix) {
  const url = `https://${BUCKET}.s3.${REGION}.amazonaws.com/?list-type=2&prefix=${encodeURIComponent(prefix)}&max-keys=1000`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`S3 listing failed: ${res.status}`);
  const xml = await res.text();
  const doc = new DOMParser().parseFromString(xml, 'application/xml');
  return Array.from(doc.querySelectorAll('Contents Key'))
    .map(el => el.textContent)
    .filter(key => !key.endsWith('/') && IMAGE_EXTENSIONS.test(key))
    .map(key => `https://${BUCKET}.s3.${REGION}.amazonaws.com/${key}`);
}

export default function ImageGallery({ prefix }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchS3Images(prefix)
      .then(urls => { setImages(urls); setLoading(false); })
      .catch(err => { setError(err.message); setLoading(false); });
  }, [prefix]);

  if (loading) {
    return (
      <div className="w-full px-2.5">
        <div
          style={{ columnCount: 3, columnGap: '8px' }}
          className="sm:columns-2 md:columns-3"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full mb-2 bg-fg/5 animate-pulse"
              style={{
                breakInside: 'avoid',
                aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '4/3' : '1/1',
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full px-2.5">
        <p
          className="text-fg opacity-40 text-[14px]"
          style={{ fontFamily: 'var(--font-geist)' }}
        >
          Could not load gallery: {error}
        </p>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="w-full px-2.5">
        <p
          className="text-fg opacity-40 text-[14px]"
          style={{ fontFamily: 'var(--font-geist)' }}
        >
          No images found.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-2.5">
      <div
        style={{
          columnCount: 3,
          columnGap: '8px',
        }}
        className="[column-count:1] sm:[column-count:2] md:[column-count:3]"
      >
        {images.map(src => (
          <img
            key={src}
            src={src}
            alt=""
            loading="lazy"
            className="w-full mb-2 object-cover"
            style={{ breakInside: 'avoid', display: 'block' }}
          />
        ))}
      </div>
    </div>
  );
}
