import { useEffect, useMemo, useState } from 'react';
import { weddingData } from '../data/weddingData';

const targetDate = new Date(weddingData.fullDate).getTime();

function getCountdownParts() {
  const distance = targetDate - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { days, hours, minutes, seconds, isComplete: false };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getCountdownParts);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getCountdownParts());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft],
  );

  return (
    <section className="countdown-section" id="countdown">
      <div className="section-heading center">
        <span className="eyebrow">The countdown begins</span>
        <h2>{timeLeft.isComplete ? 'The Beautiful Day Has Arrived ❤️' : 'Counting down to our celebration'}</h2>
      </div>

      {!timeLeft.isComplete ? (
        <div className="countdown-grid" aria-label="Wedding countdown">
          {items.map((item) => (
            <div key={item.label} className="countdown-box">
              <span className="countdown-number">{String(item.value).padStart(2, '0')}</span>
              <span className="countdown-label">{item.label}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="countdown-message">The Beautiful Day Has Arrived ❤️</div>
      )}
    </section>
  );
}
