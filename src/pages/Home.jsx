function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to [Artist Name]'s Portfolio</h1>
      <p>Comic book artist and storyteller</p>
      <img 
        src="https://via.placeholder.com/800x400" 
        alt="Hero"
        style={styles.heroImage}
      />
    </div>
  );
}

const styles = {
  container: {
    width : '100%',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center'
  },
  heroImage: {
    width: '100%',
    maxWidth: '800px',
    height: 'auto',
    marginTop: '2rem',
    borderRadius: '8px'
  }
};

export default Home;