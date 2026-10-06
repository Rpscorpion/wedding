import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function WeddingCard({ title, image, route, subtitle }) {
  return (
    <motion.div
      className="wedding-card"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <Link to={route} className="card-link" aria-label={`View ${title}`}>
        <div className="card-image-wrap">
          <img src={image} alt={title} className="card-image" />
        </div>
        <div className="card-content">
          <p className="card-subtitle">{subtitle}</p>
          <h3>{title}</h3>
          <span className="card-button">
            View Wedding <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
