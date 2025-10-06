function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 [Artist Name]. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '2rem 0',
    marginTop: '4rem'
  }
};

export default Footer;