import { ArrowDown } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import VideoSection from '../components/VideoSection';
import { weddingData } from '../data/weddingData';

export default function CouplePage() {
  const { slug } = useParams();
  const couple = Object.values(weddingData.couples).find((item) => item.slug === slug);

  if (!couple) {
    return (
      <main className="page error-page">
        <div className="error-box">
          <h1>Wedding not found</h1>
          <Link to="/" className="primary-button">
            Return Home
          </Link>
        </div>
      </main>
    );
  }

  const openLocation = () => {
    window.open(weddingData.venueUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="page couple-page">
      <section className="couple-hero" style={{ backgroundImage: `linear-gradient(rgba(8, 8, 8, 0.28), rgba(8, 8, 8, 0.36)), url(${couple.heroImage})` }}>
        <div className="hero-content">
          <span className="eyebrow">Wedding Invitation</span>
          <h1>{couple.coupleName}</h1>
          <p>{weddingData.dateLabel}</p>
          <p>
            {weddingData.venue}
            <span>{weddingData.location}</span>
          </p>
          <a href="#timeline" className="primary-button">
            View Details <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="section-heading center">
          <span className="eyebrow">Timings</span>
          <h2>Wedding Timeline</h2>
        </div>

        <div className="timeline">
          {couple.timeline.map((event, index) => (
            <div key={event.time} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-content">
                <span className="timeline-time">{event.time}</span>
                <p>{event.title}</p>
              </div>
              {index < couple.timeline.length - 1 && <div className="timeline-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <Gallery images={couple.memoryImages} title="Our Memories" />

      {/* <VideoSection poster={couple.heroImage} title="A Glimpse of the Celebration" /> */}

      <section className="venue-section" id="venue">
        <div className="venue-panel">
          <div className="venue-copy">
            <span className="eyebrow">Venue</span>
            <h2>{weddingData.venue}</h2>
            <p>{weddingData.location}</p>
            <button type="button" className="primary-button secondary" onClick={openLocation}>
              Get Directions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
