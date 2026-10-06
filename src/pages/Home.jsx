import { useEffect, useState } from 'react';
import { CalendarDays, Clock3, MailOpen, MapPin, X } from 'lucide-react';
import Countdown from '../components/Countdown';
import WeddingCard from '../components/WeddingCard';
import Footer from '../components/Footer';
import { coupleOrder, weddingData } from '../data/weddingData';
import { assetUrl } from '../utils/assetUrl';

export default function Home() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const cards = coupleOrder.map((key) => {
    const couple = weddingData.couples[key];
    return {
      ...couple,
      image: key === 'nithyaAjaydev'
        ? assetUrl('images/nithya-ajaydev/home-card.png')
        : assetUrl('images/nikhil-sneha/home-card.png'),
      route: `/${couple.slug}`,
      subtitle: key === 'nikhilSneha' ? 'Brother’s Wedding' : 'Sister’s Wedding',
    };
  });

  useEffect(() => {
    if (!invitationOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setInvitationOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [invitationOpen]);

  return (
    <main className="page home-page">
      <section className="hero home-hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={assetUrl('videos/wedding-story.mp4')} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">Two Hearts. Two Stories. One Beautiful Day.</span>
          <h1>
            <span className="hero-line">
              Nikhil <span className="heart-mark">❤</span> Sneha
            </span>
            <span className="and-tag">&</span>
            <span className="hero-line">
              Nithya <span className="heart-mark">❤</span> Ajaydev
            </span>
          </h1>
          <div className="date-badge">{weddingData.dateLabel}</div>
          <p className="hero-venue">
            {weddingData.venue}
            <span>{weddingData.time}</span>
            <span>{weddingData.location}</span>
          </p>
          <button
            type="button"
            className="primary-button"
            aria-haspopup="dialog"
            onClick={() => setInvitationOpen(true)}
          >
            Open Invitation <MailOpen size={18} />
          </button>
        </div>
      </section>

      {invitationOpen && (
        <div
          className="invitation-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Wedding invitation"
          onClick={() => setInvitationOpen(false)}
        >
          <div className="invitation-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="invitation-modal-close"
              aria-label="Close invitation"
              onClick={() => setInvitationOpen(false)}
            >
              <X size={22} />
            </button>
            <img
              src={assetUrl('images/invitation.jpeg')}
              alt="Wedding invitation with ceremony details"
            />
          </div>
        </div>
      )}

      <section className="cards-section">
        <div className="cards-grid">
          {cards.map((card) => (
            <WeddingCard
              key={card.slug}
              title={card.coupleName}
              image={card.image}
              route={card.route}
              subtitle={card.subtitle}
            />
          ))}
        </div>
      </section>

      <Countdown />

      <section className="invitation-section">
        <div className="section-heading center">
          <span className="eyebrow">With love</span>
          <h2>Two beautiful beginnings, one unforgettable day</h2>
        </div>

        <div className="invitation-card">
          <p>{weddingData.invitationMessage}</p>
          <div className="couple-list">
            <span>Nikhil & Sneha</span>
            <span>Nithya & Ajaydev</span>
          </div>
        </div>
      </section>

      <section className="venue-section" id="venue">
        <div className="venue-panel">
          <div className="venue-copy">
            <span className="eyebrow">Venue</span>
            <h2>{weddingData.venue}</h2>
            <p>{weddingData.location}</p>
            <div className="meta-grid">
              <div>
                <CalendarDays size={18} />
                <span>{weddingData.dateLabel}</span>
              </div>
              <div>
                <Clock3 size={18} />
                <span>{weddingData.time}</span>
              </div>
              <div>
                <MapPin size={18} />
                <span>{weddingData.location}</span>
              </div>
            </div>
            <a
              href={weddingData.venueUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-button secondary"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
