import React, { useState } from "react";

const ImproveResume = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [improvedResume, setImprovedResume] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImproveResume = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.getknit.ai/v1/router/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": process.env.REACT_APP_KNIT_AI_KEY,
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "You are a recruiter and inbuilt ATS Machine",
            },
            {
              role: "user",
              content: `I am giving you a resume and job description\nyou have to make resume almost best for that job\n\nu can add keywords and make it more better by yourself, also tell user what u change\n\nresume-->${resume}\njob description-->${jobDescription}`,
            },
          ],
          model: {
            name: "openai/gpt-3.5-turbo",
          },
          variables: [
            {
              name: "resume",
              value: resume,
            },
            {
              name: "job_description",
              value: jobDescription,
            },
          ],
        }),
      });

      const data = await response.json();
      console.log("data-->", data);

      if (data.responseText) {
        const improvedResume = data.responseText;
        setImprovedResume(improvedResume);
      }
    } catch (error) {
      console.error("Error improving resume:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Improve Resume</h2>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Enter Your Resume:
        </p>
        <textarea
          id="resume"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          rows="10"
          cols="50"
          style={styles.textarea}
        />
      </div>
      <div>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          Enter Job Description:
        </p>
        <textarea
          id="jobDescription"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows="10"
          cols="50"
          style={styles.textarea}
        />
      </div>
      <button
        onClick={handleImproveResume}
        disabled={isLoading}
        style={styles.button}
      >
        Improve Resume
      </button>
      {isLoading && <p style={styles.loading}>Loading...</p>}
      {improvedResume && (
        <div>
          <h3 style={styles.subHeading}>Improved Resume</h3>
          <p style={styles.improvedResume}>{improvedResume}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "60vw",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "120px",
  },
  heading: {
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  p: {
    display: "block",
    marginBottom: "5px",
    color: "#333",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease-in-out",
  },
  loading: {
    textAlign: "center",
    marginTop: "20px",
  },
  subHeading: {
    color: "#333",
    marginTop: "20px",
  },
  improvedResume: {
    whiteSpace: "pre-line",
    lineHeight: "1.5",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
  },
};

export default ImproveResume;
