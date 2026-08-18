import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import content from '../data/content.json';

const projectsData = content.projects;
const images = content.images || {};
const projectImages = images.projects || {};

export default function ProjectsPage() {
  const categories = ['All', ...new Set(projectsData.projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="hero-section position-relative overflow-hidden bg-navy" style={{ minHeight: '52vh' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-navy" />
        <Container className="hero-content position-relative pt-5 pb-5">
          <Row className="align-items-center pt-5" style={{ minHeight: '40vh' }}>
            <Col lg={8}>
              <div className="animate-fade-in-up">
                <span className="badge-pill-orange mb-3">Portfolio</span>
                <h1 className="display-4 font-heading text-white fw-bold mt-2 mb-4">
                  {projectsData.hero.headline}
                </h1>
                <p className="lead text-navy-muted fs-5">
                  {projectsData.hero.subheadline}
                </p>
              </div>
            </Col>
          </Row>

          <Row className="g-3 mt-3">
            {projectsData.stats.map((stat) => (
              <Col key={stat.id} xs={6} md={3}>
                <div className="bg-navy-light p-3.5 rounded-4 text-center border border-white border-opacity-10 card-hover">
                  <div className="text-primary-brand font-heading display-6 fw-bold">{stat.value}</div>
                  <div className="text-navy-muted small uppercase tracking-wider">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-5 bg-light-soft">
        <Container className="py-4">
          {/* Category Filter */}
          <div className="d-flex flex-wrap gap-2 mb-5 justify-content-center justify-content-md-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline-secondary text-dark'} rounded px-4 py-2 font-sans fw-medium`}
                style={activeCategory !== cat ? { borderColor: 'var(--border-color)', backgroundColor: '#ffffff' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>

          <Row className="g-4">
            {filteredProjects.map((project) => {
              const imagePath = projectImages[project.id] || `/airo-assets/images/projects/${project.id}.jpg`;
              return (
                <Col key={project.id} md={6} lg={4}>
                  <div className="bg-white rounded-4 overflow-hidden shadow-sm h-100 card-hover d-flex flex-column">
                    <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                      <img
                        src={imagePath}
                        alt={project.title}
                        className="w-100 h-100 object-fit-cover transition-transform"
                      />
                    </div>
                    <div className="p-4 d-flex flex-column flex-grow-1">
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        <span className="badge px-2.5 py-1.5 rounded fw-medium" style={{ backgroundColor: 'rgba(245, 99, 13, 0.12)', color: 'var(--primary-color)' }}>{project.category}</span>
                        <span className="badge bg-light text-muted px-2.5 py-1.5 rounded border">{project.location}</span>
                        <span className="badge bg-light text-muted px-2.5 py-1.5 rounded border">{project.year}</span>
                      </div>
                      <h5 className="font-heading fw-bold text-dark mb-2">{project.title}</h5>
                      <p className="text-muted small mb-3">{project.scope}</p>
                      <ul className="list-unstyled small mt-auto mb-0">
                        {project.highlights.map((h) => (
                          <li key={h} className="mb-1.5 d-flex align-items-start text-dark">
                            <svg className="text-primary-brand me-2 mt-1 shrink-0" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
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
              <h2 className="display-5 font-heading fw-bold text-white mb-4">{projectsData.cta.headline}</h2>
              <p className="lead text-navy-muted mb-4 fs-5">{projectsData.cta.body}</p>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="px-5 py-3 rounded fw-semibold">
                {projectsData.cta.buttonLabel}
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