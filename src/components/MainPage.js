import React from 'react';

const MainPage = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Our Platform</h2>

      {/* Feature 1: Latest Jobs */}
      <div style={styles.featureContainer}>
        <img src="http://1.bp.blogspot.com/-USmeCA10PtY/VgvHqqZSLVI/AAAAAAAAJ78/eIlt5uQVad8/s1600/Jobs.jpg" alt="Latest Jobs" style={styles.image} />
        <div style={styles.featureContent}>
          <h3 style={styles.featureHeading}>Explore Latest Jobs</h3>
          <p style={styles.featureDescription}>
            Discover and apply for the latest job opportunities. Stay updated with our curated list of job postings from various industries.
            Whether you're a recent graduate or an experienced professional, find the perfect job to take your career to new heights.
          </p>
        </div>
      </div>

      {/* Feature 2: Subscribe for Daily Jobs */}
      <div style={styles.featureContainer}>
        <img src="https://image.freepik.com/free-vector/vector-template-email-subscribe_115338-38.jpg" alt="Subscribe for Daily Jobs" style={styles.image} />
        <div style={styles.featureContent}>
          <h3 style={styles.featureHeading}>Subscribe for Daily Job Updates</h3>
          <p style={styles.featureDescription}>
            Never miss an opportunity! Subscribe to our daily job updates and receive handpicked job listings directly in your inbox.
            Enjoy a hassle-free job-search experience and stay ahead in your career journey. You can also unsubscribe at any time – no strings attached.
          </p>
        </div>
      </div>

      {/* Feature 3: Tailored Resumes */}
      <div style={styles.featureContainer}>
        <img src="https://www.resumeviking.com/wp-content/uploads/2017/12/Server-Resume-Word-template-2.jpg" alt="Tailored Resumes" style={styles.image} />
        <div style={styles.featureContent}>
          <h3 style={styles.featureHeading}>Create Tailored Resumes</h3>
          <p style={styles.featureDescription}>
            Stand out from the crowd with personalized resumes tailored for specific job roles. Craft a compelling story of your skills and experience,
            and increase your chances of landing your dream job. Your success begins with a standout resume.
          </p>
        </div>
      </div>

      {/* Feature 4: Job Summary */}
      <div style={styles.featureContainer}>
        <div style={styles.featureContent}>
          <h3 style={styles.featureHeading}>Detailed Job Summary</h3>
          <p style={styles.featureDescription}>
            Make informed decisions with our detailed job summaries. We provide comprehensive information about job requirements, qualifications,
            and key responsibilities. Get a clear understanding of each job opportunity to ensure it aligns with your career goals.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(45deg, #2E3192 0%, #1BFFFF 100%)',  // Gradient background
    // padding: '20px',
  },
  heading: {
    color: '#fff',
    fontSize: '2rem',
    marginBottom: '30px',
    marginTop:'100px'
  },
  featureContainer: {
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '50px',
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.9)',  // Semi-transparent white background
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  featureContent: {
    textAlign: 'center',
    fontSize:'25px',
    fontweight:500,
    fontstyle:'bold'
  },
  featureHeading: {
    color: '#007bff',
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  featureDescription: {
    color: '#333',
    lineHeight: '1.5',
  },
};

export default MainPage;
