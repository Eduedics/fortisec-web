import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../data/content.json';

const servicesData = content.services;
const images = content.images || {};
const serviceImages = images.service_images || {};

export default function ServicesPage() {
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
                  {servicesData.services.map((s) => (
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

      {/* Services List */}
      {servicesData.services.map((service, index) => {
        const isEven = index % 2 === 0;
        const imagePath = serviceImages[service.id] || `${service.image}.jpg`;
        return (
          <section key={service.id} id={service.anchor} className={`py-5 ${isEven ? 'bg-light-soft' : 'bg-white'}`} style={{ scrollMarginTop: '80px' }}>
            <Container className="py-4">
              <Row className={`align-items-center g-5 ${isEven ? '' : 'flex-row-reverse'}`}>
                <Col lg={6}>
                  <img
                    src={imagePath}
                    alt={service.title}
                    className="img-fluid rounded-4 shadow-lg"
                  />
                </Col>
                <Col lg={6}>
                  <span className="badge-pill-orange mb-3">{service.tagline}</span>
                  <h2 className="display-6 font-heading fw-bold mt-2 mb-4 text-dark">{service.title}</h2>
                  <p className="text-muted fs-6 mb-4" style={{ lineHeight: 1.7 }}>{service.description}</p>
                  <ul className="list-unstyled mb-4">
                    {service.capabilities.map((cap) => (
                      <li key={cap} className="mb-2.5 d-flex align-items-start text-dark font-sans">
                        <svg className="text-primary-brand me-3 mt-1 shrink-0" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  <Button as={Link} to="/contact" variant="primary" className="px-4 py-2.5 rounded fw-semibold">
                    Enquire About This Service
                    <svg className="ms-2" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
        );
      })}

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