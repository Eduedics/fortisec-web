import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../data/content.json';

const about = content.about;
const images = content.images || {};

export default function AboutPage() {
  const heroImage = images.pages?.about || '/airo-assets/images/pages/about/hero.jpg';
  const storyImage = images.pages?.story || '/airo-assets/images/pages/about/story.jpg';
  const teamImages = images.team || {};

  return (
    <>
      {/* Hero */}
      <section className="hero-section position-relative overflow-hidden bg-navy" style={{ minHeight: '60vh' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img
            src={heroImage}
            alt="About hero"
            className="w-100 h-100 object-fit-cover"
          />
          <div className="hero-overlay" />
        </div>

        <Container className="hero-content position-relative pt-5 pb-5">
          <Row className="align-items-center pt-5" style={{ minHeight: '45vh' }}>
            <Col lg={8}>
              <div className="animate-fade-in-up">
                <span className="badge-pill-orange mb-3">About Us</span>
                <h1 className="display-4 font-heading text-white fw-bold mt-2 mb-4">
                  {about.hero.headline}
                </h1>
                <p className="lead text-navy-muted fs-5">
                  {about.hero.subheadline}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Story */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          {/* Story Row - Image and Text side by side */}
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <span className="badge-pill-orange mb-3">Who We Are</span>
              <h2 className="display-5 font-heading fw-bold mt-2 mb-4 text-dark">{about.story.headline}</h2>
              {about.story.body.map((para) => (
                <p key={para.id} className="text-muted fs-6 mb-3" style={{ lineHeight: 1.7 }}>
                  {para.text}
                </p>
              ))}
            </Col>
            <Col lg={6}>
              <div className="rounded-4 overflow-hidden shadow-lg" style={{ maxHeight: '320px' }}>
                <img
                  src={storyImage}
                  alt="Our story"
                  className="w-100 h-100 object-fit-cover"
                  style={{ objectFit: 'cover', minHeight: '280px' }}
                />
              </div>
            </Col>
          </Row>

          {/* Vision Block - Full width below */}
          <Row className="mt-5 pt-4">
            <Col lg={12}>
              <div className="bg-primary bg-opacity-10 rounded-4 p-5 border-start border-5 border-primary">
                <div className="d-flex align-items-start gap-3">
                  <div className="bg-primary rounded-circle p-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '56px', height: '56px' }}>
                    <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="fw-bold text-dark mb-2">Our Vision</h3>
                    <p className="text-muted fs-6 mb-0" style={{ lineHeight: 1.8, maxWidth: '800px' }}>
                      {about.vision }
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-5 bg-light-soft">
        <Container className="py-4">
          <div className="text-center mb-5">
            {/* <span className="badge-pill-orange mb-3">What Drives Us</span> */}
            <h2 className="display-5 font-heading fw-bold mt-2 text-dark">{about.mission.headline}</h2>
            <p className="lead text-muted mx-auto fs-5 fst-italic" style={{ maxWidth: '720px' }}>
              "{about.mission.statement}"
            </p>
          </div>

          <Row className="g-4">
            {about.mission.values.map((value) => (
              <Col key={value.id} md={4}>
                <div className="bg-white p-4 rounded-4 shadow-sm h-100 card-hover">
                  <div className="rounded-circle p-2.5 d-inline-flex mb-3" style={{ backgroundColor: 'rgba(245, 99, 13, 0.12)' }}>
                    <svg className="text-primary-brand" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h5 className="font-heading fw-bold text-dark mb-2">{value.title}</h5>
                  <p className="text-muted small mb-0">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team */}
      {/* Team */}
      <section className="py-5 bg-white">
        <Container className="py-4">
          <div className="text-center mb-5">
            <span className="badge-pill-orange mb-3">The People Behind the Work</span>
            <h2 className="display-5 font-heading fw-bold mt-2 text-dark">{about.team.headline}</h2>
          </div>

          <Row className="g-4">
            {about.team.members.map((member) => {
              const imagePath = teamImages[member.id];
              // Check if image exists and is not a placeholder
              const hasImage = imagePath && imagePath !== '' && !imagePath.includes('member1.svg') && !imagePath.includes('placeholder');
              // Get first letter of name for fallback
              const firstLetter = member.name.charAt(0).toUpperCase();
              // Get a color based on name for variety
              const colors = ['#f5630d', '#168ef9', '#22c55e', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#6366f1'];
              const colorIndex = (member.id?.split('-').pop() || 0) % colors.length;
              const bgColor = colors[colorIndex] || '#f5630d';
              
              return (
                <Col key={member.id} md={3} sm={6}>
                  <div className="text-center p-3 rounded-4 bg-light-soft card-hover h-100 d-flex flex-column">
                    {hasImage ? (
                      <img
                        src={imagePath}
                        alt={member.name}
                        className="rounded-circle mb-3 border border-3 border-white shadow-sm mx-auto"
                        width="140"
                        height="140"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div 
                        className="rounded-circle mb-3 border border-3 border-white shadow-sm d-flex align-items-center justify-content-center mx-auto"
                        style={{ 
                          width: '140px', 
                          height: '140px', 
                          background: `linear-gradient(135deg, ${bgColor}22, ${bgColor}11)`,
                          color: bgColor,
                          fontSize: '3.5rem',
                          fontWeight: 700,
                          fontFamily: 'var(--font-heading)',
                          flexShrink: 0
                        }}
                      >
                        {firstLetter}
                      </div>
                    )}
                    <div className="flex-grow-1 d-flex flex-column">
                      <h5 className="font-heading fw-bold text-dark mb-1">{member.name}</h5>
                      <p className="text-primary-brand fw-semibold small mb-2">{member.role}</p>
                      <p className="text-muted small mb-0 flex-grow-1">{member.bio}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-5 bg-navy text-white">
        <Container className="py-4">
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 font-heading fw-bold text-white mb-4">{about.cta.headline}</h2>
              <p className="lead text-navy-muted mb-4 fs-5">{about.cta.body}</p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="px-5 py-3 rounded fw-semibold">
                {about.cta.buttonLabel}
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