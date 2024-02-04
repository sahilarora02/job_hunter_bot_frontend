import React, { useEffect, useState } from 'react';
import './AllJobs.css'; // Import your CSS file for styling

const AllJobs = () => {
  const [jobsData, setJobsData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:4002/latest-jobs')
      .then(response => response.json())
      .then(data => setJobsData(data))
      .catch(error => console.error('Error fetching latest jobs:', error));
  }, []);

  return (
    <div className="all-jobs-container">
      <h2 className="jobs-heading">Explore Exciting Opportunities</h2>
      <div className="jobs-list">
        {jobsData.map(job => (
          <div key={job.id} className="job-card">
            <h3 className="job-title">{job.title}</h3>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer" className="job-link">
              Discover More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllJobs;
