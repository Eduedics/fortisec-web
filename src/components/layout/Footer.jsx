import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import content from '../../data/content.json';
import { getCurrentYear } from '../../utils';

const services = content.footer.services;
const company = content.footer.company;
const contact = content.footer.contact;
const social = content.footer.social;
const siteName = content.site.name;

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground pt-5 pb-4">
      <Container className="pt-3">
        <Row className="g-4 pb-5">
          {/* Brand Col */}
          <Col lg={4} md={6}>
            <Link to="/" className="d-inline-block mb-3">
              <img
                src="/assets/logo-fortisec.webp"
                alt={siteName}
                height="38"
                className="object-contain"
              />
            </Link>
            <p className="text-navy-muted small mb-4pe-lg-4" style={{ lineHeight: 1.7 }}>
              Engineering the infrastructure that powers connectivity — from towers to fiber, WiFi to green energy.
            </p>
            <div className="d-flex gap-2">
              <a 
                href={social.linkedin} 
                aria-label="LinkedIn" 
                className="d-flex align-items-center justify-content-center rounded bg-white bg-opacity-10 text-white text-decoration-none transition-colors"
                style={{ width: '38px', height: '38px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a 
                href={social.twitter} 
                aria-label="Twitter" 
                className="d-flex align-items-center justify-content-center rounded bg-white bg-opacity-10 text-white text-decoration-none transition-colors"
                style={{ width: '38px', height: '38px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href={social.facebook} 
                aria-label="Facebook" 
                className="d-flex align-items-center justify-content-center rounded bg-white bg-opacity-10 text-white text-decoration-none transition-colors"
                style={{ width: '38px', height: '38px' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-color)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </Col>

          {/* Services Col */}
          <Col lg={2} md={6}>
            <h6 className="font-heading text-uppercase text-white small fw-bold tracking-widest mb-4">Services</h6>
            <ul className="list-unstyled mb-0">
              {services.map((s) => (
                <li key={s.href} className="mb-2.5">
                  <Link to={s.href} className="text-navy-muted text-decoration-none small hover-text-primary">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Company Col */}
          <Col lg={2} md={6}>
            <h6 className="font-heading text-uppercase text-white small fw-bold tracking-widest mb-4">Company</h6>
            <ul className="list-unstyled mb-0">
              {company.map((c) => (
                <li key={c.href} className="mb-2.5">
                  <Link to={c.href} className="text-navy-muted text-decoration-none small hover-text-primary">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Col */}
          <Col lg={4} md={6}>
            <h6 className="font-heading text-uppercase text-white small fw-bold tracking-widest mb-4">Contact</h6>
            <ul className="list-unstyled small text-navy-muted mb-0">
              <li className="mb-3 d-flex align-items-start">
                <svg className="text-primary-brand me-3 mt-1 shrink-0" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{contact.phone}</span>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <svg className="text-primary-brand me-3 mt-1 shrink-0" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{contact.email}</span>
              </li>
              <li className="d-flex align-items-start">
                <svg className="text-primary-brand me-3 mt-1 shrink-0" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ whiteSpace: 'pre-line' }}>{contact.address}</span>
              </li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 pt-3">
          <p className="text-navy-muted small mb-0 opacity-75">
            © {getCurrentYear()} {siteName}. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            <Link to="/privacy" className="text-navy-muted small text-decoration-none hover-text-primary opacity-75">Privacy Policy</Link>
            <Link to="/terms" className="text-navy-muted small text-decoration-none hover-text-primary opacity-75">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}