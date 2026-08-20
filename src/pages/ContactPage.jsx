import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import content from '../data/content.json';

const contactData = content.contact;

// REPLACE THIS WITH YOUR FORMSPREE ENDPOINT
// Get your endpoint from: https://formspree.io/
// Replace the hardcoded endpoint with:
const FORMSPREE_ENDPOINT = import.meta.env.FORMSPREE_ENDPOINT;

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setFormStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormStatus('error');
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-section position-relative overflow-hidden bg-navy" style={{ minHeight: '48vh' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-navy" />
        <Container className="hero-content position-relative pt-5 pb-5">
          <Row className="align-items-center pt-5" style={{ minHeight: '35vh' }}>
            <Col lg={8}>
              <div className="animate-fade-in-up">
                <span className="badge-pill-orange mb-3">Contact Us</span>
                <h1 className="display-4 font-heading text-white fw-bold mt-2 mb-4">
                  {contactData.hero.headline}
                </h1>
                <p className="lead text-navy-muted fs-5">
                  {contactData.hero.subheadline}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-5 bg-light-soft">
        <Container className="py-4">
          <Row className="g-5">
            <Col lg={4}>
              <div className="bg-navy p-4 p-lg-4.5 rounded-4 text-white shadow-sm border border-white border-opacity-10">
                <h5 className="font-heading fw-bold mb-4 text-white">Contact Details</h5>
                <ul className="list-unstyled mb-0">
                  <li className="mb-4 d-flex align-items-start">
                    <svg className="text-primary-brand me-3 mt-1 shrink-0" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div className="small text-navy-muted text-uppercase tracking-wider">Phone</div>
                      <a href={`tel:${contactData.details.phone.replace(/\s/g, '')}`} className="text-white text-decoration-none fw-medium">
                        {contactData.details.phone}
                      </a>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <svg className="text-primary-brand me-3 mt-1 shrink-0" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="small text-navy-muted text-uppercase tracking-wider">Email</div>
                      <a href={`mailto:${contactData.details.email}`} className="text-white text-decoration-none fw-medium">
                        {contactData.details.email}
                      </a>
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <svg className="text-primary-brand me-3 mt-1 shrink-0" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="small text-navy-muted text-uppercase tracking-wider">Office</div>
                      <span className="text-white fw-medium" style={{ whiteSpace: 'pre-line' }}>{contactData.details.address}</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <svg className="text-primary-brand me-3 mt-1 shrink-0" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="small text-navy-muted text-uppercase tracking-wider">Hours</div>
                      <span className="text-white fw-medium">{contactData.details.hours}</span>
                    </div>
                  </li>
                </ul>

                <hr style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }} className="my-4" />
                <h6 className="font-heading fw-bold mb-3 text-white">Services We Cover</h6>
                <ul className="list-unstyled small text-navy-muted mb-0">
                  {contactData.services.map((s) => (
                    <li key={s.id} className="mb-2 d-flex align-items-start">
                      <svg className="text-primary-brand me-2 mt-1 shrink-0" width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{s.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col lg={8}>
              {formStatus === 'success' ? (
                <div className="bg-white p-5 rounded-4 text-center border shadow-sm">
                  <div className="rounded-circle p-3 d-inline-flex mb-3" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
                    <svg className="text-success" width="48" height="48" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-heading fw-bold text-dark mb-2">Message Sent!</h4>
                  <p className="text-muted">Thank you for reaching out. We will get back to you within one business day.</p>
                  <Button 
                    variant="outline-secondary" 
                    className="mt-3 rounded-pill px-4"
                    onClick={() => setFormStatus('idle')}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form onSubmit={handleSubmit} className="bg-white p-4 p-lg-5 rounded-4 shadow-sm border">
                  <h5 className="font-heading fw-bold text-dark mb-4">Send Us a Message</h5>
                  
                  {/* Formspree hidden field for redirect (optional) */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3.5">
                        <Form.Label className="fw-medium text-dark small">Full Name <span className="text-primary-brand">*</span></Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3.5">
                        <Form.Label className="fw-medium text-dark small">Email Address <span className="text-primary-brand">*</span></Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3.5">
                        <Form.Label className="fw-medium text-dark small">Phone Number</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 713 361 799"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3.5">
                        <Form.Label className="fw-medium text-dark small">Service of Interest</Form.Label>
                        <Form.Select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="">Select a service…</option>
                          {contactData.services.map((s) => (
                            <option key={s.id} value={s.label}>{s.label}</option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium text-dark small">Message <span className="text-primary-brand">*</span></Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project — location, scope, timeline…"
                    />
                  </Form.Group>

                  {/* Error Message */}
                  {formStatus === 'error' && (
                    <div className="alert alert-danger d-flex align-items-center gap-2 py-2 px-3 mb-4" role="alert">
                      <svg className="shrink-0" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="small">{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    className="px-5 py-3 rounded fw-semibold"
                    disabled={formStatus === 'sending'}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                  <p className="text-muted small mt-3 mb-0 opacity-75">We typically respond within one business day.</p>
                </Form>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}