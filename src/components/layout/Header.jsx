import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import content from '../../data/content.json';

const navLinks = content.navigation.main;
const ctaLink = content.navigation.cta;
const siteName = content.site.name;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      expand="lg"
      className={`navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}
      style={{ backgroundColor: scrolled ? '#0e1726' : 'rgba(14, 23, 38, 0.95)' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/airo-assets/images/logo/horizontal/dark"
            alt={siteName}
            height="38"
            className="d-inline-block align-top object-contain"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="border-0 p-2">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }} />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-3 py-3 py-lg-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              as={Link}
              to={ctaLink.href}
              variant="primary"
              className="px-4 py-2 mt-2 mt-lg-0 fw-semibold rounded"
            >
              {ctaLink.label}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}