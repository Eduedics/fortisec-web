import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <div className="not-found-page py-5 bg-navy" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <div className="animate-fade-in-up">
              <h1 className="display-1 font-heading fw-bold text-primary-brand mb-2" style={{ fontSize: '6rem' }}>404</h1>
              <h2 className="display-5 font-heading fw-bold text-white mb-3">Page Not Found</h2>
              <p className="lead text-navy-muted mb-4 fs-5" style={{ maxWidth: '540px', margin: '0 auto' }}>
                Sorry, the page you are looking for does not exist or has been relocated.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3 pt-2">
                <Button as={Link} to="/" variant="primary" size="lg" className="px-5 py-3 rounded fw-semibold">
                  <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Go Home
                </Button>
                <Button
                  variant="outline-light"
                  size="lg"
                  className="px-5 py-3 rounded fw-semibold"
                  onClick={() => window.history.back()}
                >
                  <svg className="me-2" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Go Back
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}