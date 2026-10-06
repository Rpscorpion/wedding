import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export default function Gallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery-section" id="memories">
      <div className="section-heading center">
        <span className="eyebrow">Memories</span>
        <h2>{title}</h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className="gallery-item"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open memory ${index + 1}`}
          >
            <img src={image} alt={`${title} memory ${index + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveIndex(null)}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={() => setActiveIndex(null)} aria-label="Close image">
              <X size={20} />
            </button>
            <button type="button" className="lightbox-nav prev" onClick={showPrevious} aria-label="Previous image">
              <ArrowLeft size={18} />
            </button>
            <img src={images[activeIndex]} alt={`${title} memory ${activeIndex + 1}`} />
            <button type="button" className="lightbox-nav next" onClick={showNext} aria-label="Next image">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
