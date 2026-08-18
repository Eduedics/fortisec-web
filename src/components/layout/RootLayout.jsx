import Website from './Website';
import Header from './Header';
import Footer from './Footer';

/**
 * Root layout component that wraps all pages with consistent header and footer.
 * Site-wide <title> and <meta> can be overridden by individual pages.
 */
export default function RootLayout({ children }) {
  return (
    <Website>
      <Header />
      {children}
      <Footer />
    </Website>
  );
}