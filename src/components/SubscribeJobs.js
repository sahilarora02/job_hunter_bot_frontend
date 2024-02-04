import React, { useState } from 'react';

const SubscribeJobs = () => {
  const [email, setEmail] = useState('');
  const [isLoadingSubscribe, setIsLoadingSubscribe] = useState(false);
  const [isLoadingUnsubscribe, setIsLoadingUnsubscribe] = useState(false);

  const handleSubscribe = async () => {
    setIsLoadingSubscribe(true);

    try {
      const response = await fetch('http://localhost:4002/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.message === 'Already Subscribed') {
        alert("This email is already subscribed.");
        
      } else {
        alert('You have subscribed for latest jobs!');
        window.location.reload(); 

      }
      console.log("Subscription response:", data);
    } catch (error) {
      console.error('Error subscribing:', error.message);
    } finally {
      setIsLoadingSubscribe(false);
    }
  };

  const handleUnsubscribe = async () => {
    setIsLoadingUnsubscribe(true);

    try {
      const response = await fetch('http://localhost:4002/unsubscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.message === 'You have not subscribed to use') {
        alert("This email is not subscribed.");
      } else {
        alert('You have unsubscribed from job notifications.');
        window.location.reload(); 
      }
      console.log("Unsubscription response:", data);
    } catch (error) {
      console.error('Error unsubscribing:', error.message);
    } finally {
      setIsLoadingUnsubscribe(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Subscribe for Latest Jobs</h2>
      <p style={styles.description}>
        Stay updated with the latest job opportunities! Subscribe to receive daily notifications on your mail about new jobs
        matching your interests.
      </p>
      <div style={styles.formContainer}>
        <label htmlFor="email" style={styles.label}>
          Enter your email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button style={styles.subscribeButton} onClick={handleSubscribe} disabled={isLoadingSubscribe}>
          {isLoadingSubscribe ? 'Subscribing...' : 'Subscribe Now'}
        </button>
        <button style={styles.unsubscribeButton} onClick={handleUnsubscribe} disabled={isLoadingUnsubscribe}>
          {isLoadingUnsubscribe ? 'Unsubscribing...' : 'Unsubscribe'}
        </button>
      </div>
    </div>
  );
};


const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginTop:'100px'
  },
  heading: {
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    color: '#666',
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    color: '#333',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxSizing: 'border-box',
  },
  subscribeButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease-in-out',
  },
  unsubscribeButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease-in-out',
    marginTop: '10px',
  },
};

export default SubscribeJobs;
