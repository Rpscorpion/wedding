import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-separator" />
      <p className="footer-title">Two Weddings • One Beautiful Day</p>
      <div className="footer-couples">
        <span>Nikhil <Heart size={12} /> Sneha</span>
        <span>Nithya <Heart size={12} /> Ajaydev</span>
      </div>
      <p className="footer-date">01 November 2026</p>
      <p className="footer-thanks">Thank you for being a part of our special day.</p>
    </footer>
  );
}
