import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../data/content.json';

const servicesData = content.services;
const images = content.images || {};
const serviceImages = images.service_images || {};
const industriesData = content.industries || { items: [] };

const ITEMS_PER_PAGE = 7;

// Industry Icons
const IndustryIcons = {
  telecom: (
    <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a8.25 8.25 0 0113.788 0M1.924 8.674a11.25 11.25 0 0120.152 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
    </svg>
  ),
  isp: (
    <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15.75h6M9 12.75h6" />
    </svg>
  ),
  datacenter: (
    <svg width="40" height="40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5M5.25 9h13.5M3 3h18v18H3V3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9h18M3 14.25h18" />
      <rect x="6" y="4.5" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.3" />
      <rect x="15" y="4.5" width="3" height="2" rx="0.5" fill="currentColor" opacity="0.3" />
    </svg>
  )
};

export default function ServicesPage() {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  
  const services = servicesData.services;
  const hasMore = visibleCount < services.length;
  const visibleServices = services.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, services.length));
  };

  const handleShowLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
    document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-section position-relative overflow-hidden bg-navy" style={{ minHeight: '52vh' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-navy" />
        <Container className="hero-content position-relative pt-5 pb-5">
          <Row className="align-items-center pt-5" style={{ minHeight: '40vh' }}>
            <Col lg={8}>
              <div className="animate-fade-in-up">
                <span className="badge-pill-orange mb-3">What We Do</span>
                <h1 className="display-4 font-heading text-white fw-bold mt-2 mb-4">
                  {servicesData.hero.headline}
                </h1>
                <p className="lead text-navy-muted fs-5">
                  {servicesData.hero.subheadline}
                </p>
                <div className="d-flex flex-wrap gap-2 mt-4">
                  {services.map((s) => (
                    <a key={s.id} href={`#${s.anchor}`} className="btn btn-outline-light btn-sm rounded px-3 py-1.5 fw-medium">
                      {s.title.split('&')[0].trim()}
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Industries We Serve */}
      {industriesData.items && industriesData.items.length > 0 && (
        <section className="py-5 bg-white">
          <Container>
            <div className="text-center mb-5">
              <span className="badge-pill-orange">Industries We Serve</span>
              <h2 className="display-5 font-heading fw-bold mt-2 text-dark">{industriesData.title}</h2>
              <p className="text-muted fs-5">{industriesData.subtitle}</p>
            </div>

            <Row className="g-4">
              {industriesData.items.map((industry) => {
                const icon = IndustryIcons[industry.id] || IndustryIcons.telecom;
                const bgColor = `${industry.color}14`;
                return (
                  <Col key={industry.id} lg={4} md={6}>
                    <div 
                      className="industry-card h-100 p-4 rounded-4 border text-center"
                      style={{ 
                        borderColor: 'var(--border-color)',
                        background: 'var(--bg-card)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-6px)';
                        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)';
                        e.currentTarget.style.borderColor = industry.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.borderColor = 'var(--border-color)';
                      }}
                    >
                      <div 
                        className="industry-icon-wrapper d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
                        style={{ 
                          width: '72px', 
                          height: '72px',
                          background: bgColor,
                          color: industry.color
                        }}
                      >
                        {icon}
                      </div>
                      <h4 className="font-heading fw-bold text-dark mb-2">{industry.title}</h4>
                      <p className="text-muted mb-0" style={{ lineHeight: 1.6 }}>
                        {industry.description}
                      </p>
                    </div>
                  </Col>
                );
              })}
            </Row>

            {/* Divider */}
            <hr className="my-5" style={{ borderColor: 'var(--border-color)' }} />
          </Container>
        </section>
      )}

      {/* Services Grid */}
      <section id="services-list" className="py-5 bg-light-soft" style={{ scrollMarginTop: '80px' }}>
        <Container>
          <div className="text-center mb-5">
            <span className="badge-pill-orange">Our Services</span>
            <h2 className="display-5 font-heading fw-bold mt-2">What We Offer</h2>
            <p className="text-muted fs-5">End-to-end telecommunications and energy infrastructure solutions</p>
          </div>

          <Row className="g-4">
            {visibleServices.map((service) => {
              const imagePath = serviceImages[service.id] || `${service.image}.jpg`;
              return (
                <Col key={service.id} lg={4} md={6}>
                  <div className="service-card-modern bg-white rounded-4 overflow-hidden shadow-sm h-100 card-hover">
                    <div className="service-image-container" style={{ height: '220px', position: 'relative', overflow: 'hidden' }}>
                      <img
                        src={imagePath}
                        alt={service.title}
                        className="w-100 h-100 object-fit-cover"
                        style={{ objectFit: 'cover' }}
                      />
                      <span className="badge-pill-orange position-absolute top-3 start-3 bg-white/90 text-primary-brand">
                        {service.tagline}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="h5 font-heading fw-bold text-dark mb-2">{service.title}</h3>
                      <p className="text-muted small mb-3" style={{ lineHeight: 1.6 }}>
                        {service.description}
                      </p>
                      <ul className="list-unstyled small mb-3">
                        {service.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap} className="mb-1 d-flex align-items-start">
                            <svg className="text-primary-brand me-2 mt-1 shrink-0" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-muted">{cap}</span>
                          </li>
                        ))}
                        {service.capabilities.length > 3 && (
                          <li className="text-primary-brand small fw-semibold">+ {service.capabilities.length - 3} more capabilities</li>
                        )}
                      </ul>
                      <Button 
                        as={Link} 
                        to="/contact" 
                        variant="outline-primary" 
                        size="sm" 
                        className="w-100 rounded-pill fw-semibold"
                      >
                        Enquire Now
                        <svg className="ms-1" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>

          {/* Load More / Show Less */}
          {(hasMore || visibleCount > ITEMS_PER_PAGE) && (
            <div className="text-center mt-5 pt-3">
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {hasMore && (
                  <Button 
                    onClick={handleLoadMore}
                    variant="primary" 
                    className="px-5 py-2.5 rounded-pill fw-semibold"
                  >
                    Load More Services
                    <svg className="ms-2" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </Button>
                )}
                {visibleCount > ITEMS_PER_PAGE && (
                  <Button 
                    onClick={handleShowLess}
                    variant="outline-secondary" 
                    className="px-5 py-2.5 rounded-pill fw-semibold"
                  >
                    Show Less
                    <svg className="ms-2" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </Button>
                )}
              </div>
              <p className="text-muted small mt-3">
                Showing {Math.min(visibleCount, services.length)} of {services.length} services
              </p>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 bg-navy text-white">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 font-heading fw-bold text-white mb-4">{servicesData.cta.headline}</h2>
              <p className="lead text-navy-muted mb-4 fs-5">{servicesData.cta.body}</p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="px-5 py-3 rounded fw-semibold">
                {servicesData.cta.buttonLabel}
                <svg className="ms-2" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}