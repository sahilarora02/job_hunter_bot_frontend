import React, { useState } from "react";

const JobSummary = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSummarize = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://api.getknit.ai/v1/router/run", {
        method: "POST",
        headers: {
          "x-auth-token": process.env.REACT_APP_KNIT_AI_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "You are a helpful Assistant, and an expert of companies",
            },
            {
              role: "user",
              content: `I am giving you a job description\nAnd you have to summarize everything in detail regarding that job\n\nlike requirements, qualifications, and all\nhere is the job description: ${jobDescription}`,
            },
          ],
          model: {
            name: "openai/gpt-3.5-turbo",
          },
          variables: [
            {
              name: "job_description",
              value: jobDescription,
            },
          ],
        }),
      });

      const data = await response.json();
      console.log("data->", data);
      setSummary(data.responseText);
    } catch (error) {
      console.error("Error summarizing job description:", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Job Description Summary</h2>
      <textarea
        rows="10"
        cols="50"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Enter job description here"
        style={styles.textArea}
      />
      <button
        style={styles.summarizeButton}
        onClick={handleSummarize}
        disabled={isLoading}
      >
        {isLoading ? "Summarizing..." : "Summarize Job Description"}
      </button>
      {summary && (
        <div style={styles.summaryContainer}>
          <h3 style={styles.summaryHeading}>Summary:</h3>
          <p style={styles.summaryText}>{summary}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    marginTop: "100px",
  },
  heading: {
    color: "#007bff",
    marginBottom: "20px",
    fontSize: "24px",
  },
  textArea: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxSizing: "border-box",
    fontSize: "16px",
  },
  summarizeButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    margin: "20px 0",
    transition: "background-color 0.3s ease-in-out",
  },
  summaryContainer: {
    marginTop: "20px",
    textAlign: "left",
  },
  summaryHeading: {
    color: "#007bff",
    fontSize: "20px",
    marginBottom: "10px",
  },
  summaryText: {
    fontSize: "18px",
    lineHeight: "1.5",
  },
};

export default JobSummary;
