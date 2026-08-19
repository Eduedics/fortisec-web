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
    <div ref={ref} className="stat-counter px-4 py-4 text-center border-end border-white border-opacity-10">
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label mt-1">{label}</div>
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

        <Container className="hero-content position-relative pt-5 pb-5">
          <Row className="min-vh-75 align-items-center pt-5">
            <Col lg={8} xl={7}>
              <div className="animate-fade-in-up">
                <span className="badge-pill-orange mb-3">Telecommunications Infrastructure</span>
                <h1 className="display-3 font-heading text-white fw-bold mt-2 mb-4" style={{ lineHeight: 1.15 }}>
                  {home.hero.headline}
                </h1>
                <p className="lead text-navy-muted mb-4 fs-5" style={{ maxWidth: '620px', lineHeight: 1.7 }}>
                  {home.hero.subheadline}
                </p>
                <div className="d-flex flex-wrap gap-3 pt-2">
                  <Button as={Link} to="/services" variant="primary" size="lg" className="px-4 py-3 fw-semibold rounded">
                    {home.hero.ctaPrimary}
                    <svg className="ms-2" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                  <Button as={Link} to="/contact" variant="outline-light" size="lg" className="px-4 py-3 fw-semibold rounded">
                    {home.hero.ctaSecondary}
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Stats Counter Bar */}
        <Container className="position-relative pb-5">
          <Row className="bg-navy-light rounded-4 border border-white border-opacity-10 overflow-hidden shadow-lg g-0">
            {home.stats.map((stat, index) => (
              <Col key={index} xs={6} lg={3} className="px-0">
                <Stat value={stat.value} suffix={stat.suffix} label={stat.label} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light-soft">
        <Container className="py-4">
          <div className="text-center mb-5">
            <span className="badge-pill-orange mb-2">What We Do</span>
            <h2 className="display-5 font-heading fw-bold mt-2 text-dark">Our Core Services</h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '560px' }}>
              End-to-end telecommunication and security solutions tailored for reliability, resilience, and scale.
            </p>
          </div>

          <Row className="g-4">
            {home.services.map((service, index) => {
              const isLarge = index === 0;
              const imagePath = serviceImages[service.id] || `/airo-assets/images/services/${service.id}.jpg`;
              return (
                <Col key={service.id} md={isLarge ? 6 : 3} lg={isLarge ? 6 : 3}>
                  <div className="service-card shadow-sm h-100">
                    <img
                      src={imagePath}
                      alt={service.title}
                      className="service-image w-100"
                      style={{ minHeight: isLarge ? '380px' : '300px' }}
                    />
                    <div className="service-overlay">
                      <h3 className="h4 font-heading text-white fw-bold mb-2">{service.title}</h3>
                      <p className="text-white-50 small mb-3">{service.description}</p>
                      <Link to={service.href} className="text-primary-brand fw-semibold text-decoration-none d-inline-flex align-items-center">
                        Learn More <svg className="ms-1.5" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h2 className="display-5 font-heading fw-bold text-white mt-2 mb-4">{home.whyUs.headline}</h2>
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

      {/* CTA Section */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <span className="badge-pill-orange mb-3">Get Started</span>
              <h2 className="display-5 font-heading fw-bold mt-2 mb-3 text-dark">{home.cta.headline}</h2>
              <p className="lead text-muted mb-4 fs-5">{home.cta.body}</p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="px-5 py-3 rounded fw-semibold">
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