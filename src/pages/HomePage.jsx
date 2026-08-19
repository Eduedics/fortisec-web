import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../data/content.json';
import { useCounter } from '../hooks/useCounter';

const home = content.home;
const images = content.images || {};
const serviceImages = images.service_images || {};

function Stat({ value, suffix, label }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="stat-counter">
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function HomePage() {
  const heroImage = images.pages?.home || '/src/assets/projectPhotos/aviat.jpeg';

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section position-relative overflow-hidden bg-navy">
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img
            src={heroImage}
            alt="Hero background"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="hero-overlay" />
        </div>

        {/* Hero Content - Centered */}
        <Container className="hero-content position-relative pt-5 pb-2">
          <Row className="min-vh-75 align-items-center justify-content-center pt-3">
            <Col lg={8} xl={7} className="text-center">
              <div className="animate-fade-in-up">
                <span className="badge-pill-orange d-inline-block mt-3 mb-1">
                  Telecommunications Infrastructure
                </span>
                <h1 className="hero-title font-heading text-white fw-normal mt-2 mb-4">
                  Building the Networks That
                  <br />
                  <span className="text-highlight-orange">Connect the World</span>
                </h1>
                <p className="hero-subtitle text-navy-muted mb-4 mx-auto">
                  Fortisec Telecoms delivers end-to-end telecommunications infrastructure — from mast construction and fiber installation to WiFi networks and green power systems.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
                  <Button as={Link} to="/services" variant="primary" size="lg" className="px-5 py-3 fw-semibold rounded hero-btn">
                    Our Services →
                  </Button>
                  <Button as={Link} to="/contact" variant="outline-light" size="lg" className="px-5 py-3 fw-semibold rounded hero-btn">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Stats Counter Bar - Yellow Background */}
        <Container className="position-relative pb-5">
          <Row className="justify-content-center">
            <Col xs={12} lg={10}>
              <div className="stats-bar bg-primary rounded-4 overflow-hidden shadow-lg">
                <Row className="g-0">
                  {home.stats.map((stat, index) => (
                    <Col key={index} xs={6} lg={3} className="px-0">
                      <Stat value={stat.value} suffix={stat.suffix} label={stat.label} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Navy Divider - Between Hero and Services */}
      <div className="navy-divider-top d-none d-md-block"></div>

      {/* Services Section */}
      <section className="py-5 bg-light-soft">
        <Container className="py-4">
          <div className="text-center mb-5">
            <span className="badge-pill-orange mb-2">What We Do</span>
            <h2 className="section-title font-heading fw-bold mt-2 text-dark">Our Core Services</h2>
            <p className="section-subtitle text-muted mx-auto">
              End-to-end telecommunication and security solutions tailored for reliability, resilience, and scale.
            </p>
          </div>

          <Row className="g-4">
            {home.services.map((service) => {
              const imagePath = serviceImages[service.id] || `/airo-assets/images/services/${service.id}.jpg`;
              return (
                <Col key={service.id} lg={4} md={6}>
                  <div className="service-card shadow-sm h-100 service-card scroll-reveal-scale" style={{transitionDelay: '0.1s'}}>
                    <img
                      src={imagePath}
                      alt={service.title}
                      className="service-image w-100"
                    />
                    <div className="service-overlay">
                      <h3 className="h5 font-heading text-white fw-bold mb-2">{service.title}</h3>
                      <p className="text-white-50 small mb-3">{service.description}</p>
                      <Link to={service.href} className="text-primary-brand fw-semibold text-decoration-none d-inline-flex align-items-center">
                        Learn More
                        <svg className="ms-1.5" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Why Fortisec */}
      <section className="py-5 bg-navy text-white">
        <Container className="py-4">
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="badge-pill-navy mb-3">Why Fortisectel</span>
              <h2 className="section-title font-heading fw-bold text-white mt-2 mb-4">{home.whyUs.headline}</h2>
              <p className="text-navy-muted lead fs-5 mb-0" style={{ lineHeight: 1.7 }}>{home.whyUs.body}</p>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                {home.whyUs.differentiators.map((d) => (
                  <Col sm={6} key={d.id}>
                    <div className="bg-navy-light p-4 rounded-4 h-100 border border-white border-opacity-10 card-hover">
                      <div className="rounded-circle p-2.5 d-inline-flex mb-3" style={{ backgroundColor: 'rgba(245, 99, 13, 0.15)' }}>
                        <svg className="text-primary-brand" width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h5 className="font-heading text-white fw-bold mb-2">{d.title}</h5>
                      <p className="text-navy-muted small mb-0" style={{ lineHeight: 1.6 }}>{d.description}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Navy Divider - Between Why Fortisec and CTA */}
      <div className="navy-divider-bottom d-none d-md-block"></div>

      {/* CTA Section with Signal Animation */}
      <section className="py-5 bg-white position-relative overflow-hidden">
        {/* Signal Animation - Desktop Only */}
        <div className="signal-animation d-none d-lg-block">
          <div className="signal-ring signal-ring-1"></div>
          <div className="signal-ring signal-ring-2"></div>
          <div className="signal-ring signal-ring-3"></div>
          <div className="signal-ring signal-ring-4"></div>
          <div className="signal-center">
            <svg width="32" height="32" fill="none" stroke="#f5630d" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a8.25 8.25 0 0113.788 0M1.924 8.674a11.25 11.25 0 0120.152 0" />
              <circle cx="12" cy="18" r="1.5" fill="#f5630d" />
            </svg>
          </div>
        </div>

        <Container className="py-4 position-relative" style={{ zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <span className="badge-pill-orange mb-3">Get Started</span>
              <h2 className="section-title font-heading fw-bold mt-2 mb-3 text-dark">{home.cta.headline}</h2>
              <p className="section-subtitle text-muted mb-4">{home.cta.body}</p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="px-5 py-3 rounded fw-semibold cta-btn">
                {home.cta.buttonLabel}
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