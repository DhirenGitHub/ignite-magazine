import { Link } from 'react-router-dom'
import { SECTIONS } from '../data/seedArticles'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="tagline">
            “Embrace the unknown, explore the unseen, and discover the unheard.”
            <br />— the student media magazine of the University of Nottingham Malaysia.
          </p>
        </div>
        <div>
          <h4>Sections</h4>
          <ul>
            {SECTIONS.slice(0, 5).map((s) => (
              <li key={s.slug}><Link to={`/section/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>More</h4>
          <ul>
            {SECTIONS.slice(5).map((s) => (
              <li key={s.slug}><Link to={`/section/${s.slug}`}>{s.name}</Link></li>
            ))}
            <li><Link to="/login">Editor login</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <address className="footer-address">
            The University of Nottingham,
            <br />Malaysia Campus,
            <br />Jalan Broga, 43500, Semenyih
          </address>
          <ul>
            <li><a href="mailto:unmignite@gmail.com">unmignite@gmail.com</a></li>
            <li><a href="https://www.instagram.com/unm_ignite/" target="_blank" rel="noreferrer">@unm_ignite on Instagram</a></li>
            <li><a href="https://www.tiktok.com/@unmignite" target="_blank" rel="noreferrer">@unmignite on TikTok</a></li>
            <li><a href="https://www.linkedin.com/company/unm-ignite" target="_blank" rel="noreferrer">UNM Ignite on LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-mark">IGNITE</div>
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} Ignite — UNM Student Media</span>
        <span>Demo build · React redesign concept</span>
      </div>
    </footer>
  )
}
