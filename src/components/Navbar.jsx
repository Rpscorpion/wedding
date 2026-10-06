import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/nikhil-sneha', label: 'Nikhil & Sneha' },
  { to: '/nithya-ajaydev', label: 'Nithya & Ajaydev' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const handleNav = (link) => {
    setMenuOpen(false);

    if (pathname === link.to) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="topbar">
      <div className="brand-wrap">
        <NavLink to="/" className="brand" onClick={() => handleNav({ to: '/' })}>
          Two Hearts
        </NavLink>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={`${link.label}-${link.to}`}
            to={link.to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={() => handleNav(link)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
