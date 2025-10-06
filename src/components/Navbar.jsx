import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header style={styles.header}>
      {/* Banner with background image */}
      <div style={styles.banner}>
      </div>

      {/* Navigation bar */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          {/* Social links on the left/right */}
          <div style={styles.socialLinks}>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              Twitter
            </a>
            <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              Instagram
            </a>
            <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              Patreon
            </a>
          </div>

          {/* Main navigation links in center */}
          <ul style={styles.navList}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/webcomics" style={styles.link}>Webcomics</Link></li>
            <li><Link to="/news" style={styles.link}>News</Link></li>
            <li><Link to="/writing" style={styles.link}>Writing</Link></li>
            <li><Link to="/shop" style={styles.link}>Shop</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
            <li><Link to="/fae-ring-collective" style={styles.link}>Fae Ring</Link></li>
            <li><Link to="/archive" style={styles.link}>Archive</Link></li>
          </ul>

          {/* Empty div for spacing (keeps nav centered) */}
          <div style={styles.socialLinks}></div>
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    marginBottom: '2rem'
  },
  banner: {
    backgroundImage: 'url(/images/general/banner.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '1200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative'
  },
  artistName: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: '0',
    textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
    letterSpacing: '2px'
  },
  tagline: {
    fontSize: '1.5rem',
    marginTop: '0.5rem',
    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
  },
  nav: {
    backgroundColor: '#2d3748',
    padding: '1rem 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  navContainer: {
    width: '100%',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    minWidth: '200px'
  },
  socialLink: {
    color: '#a0aec0',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s'
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '2rem',
    margin: 0,
    padding: 0,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s'
  }
};

export default Navbar;