// UserProfile.js
import React, { useState } from "react";
import "../css/UserProfile.css"; // You can create this CSS file for styling

const UserProfile = () => {
  const [userDetails, setUserDetails] = useState({
    fullname: "John Doe",
    username: "JohnDoe",
    password: "********", // For security reasons, consider using a password input
    email: "john.doe@example.com",
    studentId: "123456789",
    year: "Senior",
    votingHistory: [
      {
        election: "City Council Election",
        vote: "Candidate A",
        date: "2023-03-05",
      },
      {
        election: "School Board Election",
        vote: "Candidate A",
        date: "2023-03-05",
      },
      // Add more voting history entries as needed
    ],
  });

  const handleUpdateProfile = () => {
    // Add logic to update user profile information
    // For simplicity, let's just log a message for now
    console.log("Updating profile information...");
  };
  const handleInputChange = (field, value) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };
  return (
    <div className="user-profile">
      <div className="left-section">
        <h3>Voting History</h3>
        <table>
          <thead>
            <tr>
              <th>Election</th>
              <th>Vote</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.votingHistory.map((entry, index) => (
              <tr key={index}>
                <td>{entry.election}</td>
                <td>{entry.vote}</td>
                <td>{entry.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="right-section">
        <h2>User Details</h2>
        <div className="user-details">
          <p>
            Fullname:
            <input
              type="text"
              value={userDetails.fullname}
              onChange={(e) => handleInputChange("fullname", e.target.value)}
            />
          </p>
          <p>
            Username:
            <input
              type="text"
              value={userDetails.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
            />
          </p>
          <p>
            Password:
            <input
              type="password"
              value={userDetails.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
          </p>
          <p>
            Email:
            <input
              type="text"
              value={userDetails.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </p>
          <p>
            Student ID:
            <input
              type="text"
              value={userDetails.studentId}
              onChange={(e) => handleInputChange("studentId", e.target.value)}
            />
          </p>
          <p>
            Year:
            <input
              type="text"
              value={userDetails.year}
              onChange={(e) => handleInputChange("year", e.target.value)}
            />
          </p>
          <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
        
      </div>
    </div>
  );
};

export default UserProfile;
