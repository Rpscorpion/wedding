import { useEffect, useState } from 'react';
import { assetUrl } from '../utils/assetUrl';

export default function VideoSection({ poster, title }) {
  const [videoAvailable, setVideoAvailable] = useState(false);

  useEffect(() => {
    const checkVideo = async () => {
      try {
        const response = await fetch(assetUrl('videos/wedding-story.mp4'), { method: 'HEAD' });
        const sizeHeader = response.headers.get('content-length');
        const size = Number(sizeHeader || '0');
        setVideoAvailable(response.ok && size > 0);
      } catch (error) {
        setVideoAvailable(false);
      }
    };

    checkVideo();
  }, []);

  return (
    <section className="video-section">
      <div className="section-heading center">
        <span className="eyebrow">A Glimpse</span>
        <h2>{title}</h2>
      </div>

      {videoAvailable ? (
        <div className="video-frame">
          <video controls poster={poster} preload="metadata">
            <source src={assetUrl('videos/wedding-story.mp4')} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="video-placeholder" aria-label="Wedding video placeholder">
          <div className="placeholder-content">
            <span className="placeholder-tag">Video</span>
            <h3>Cinematic wedding footage coming soon</h3>
            <p>
              Add your final celebration video at <strong>public/videos/wedding-story.mp4</strong> to replace this placeholder.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
