// AdminPanel.js
import React from "react";
import "../css/AdminPanel.css";

const AdminPanel = () => {
  const candidateList = [
    { id: 1, name: "Candidate A", election: "City Council Election" },
    { id: 2, name: "Candidate B", election: "School Board Election" },
    // Add more candidates as needed
  ];
  const votingData = [
    { id: 1, election: "City Council Election", vote: "Candidate A" },
    { id: 2, election: "School Board Election", vote: "Candidate B" },
    // Add more voting data as needed
  ];
  const electionData = [
    {
      id: 1,
      name: "City Council Election",
      startDate: "2023-03-01",
      endDate: "2023-03-15",
    },
    {
      id: 2,
      name: "School Board Election",
      startDate: "2023-04-01",
      endDate: "2023-04-15",
    },
    // Add more election data as needed
  ];
  return (
    <div className="admin-panel">
      <div className="top-panel">
        <div className="Canidates-section">
          <h2>Candidates</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Election</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {candidateList.map((candidate) => (
                <tr key={candidate.id}>
                  <td>{candidate.name}</td>
                  <td>{candidate.election}</td>
                  <td>
                    <button>ViewDetails</button>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>Add Candidate</button>
        </div>
        <div className="Voting-section">
          <h2>Voting</h2>
          <table>
            <thead>
              <tr>
                <th>Election</th>
                <th>Vote</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {votingData.map((vote) => (
                <tr key={vote.id}>
                  <td>{vote.election}</td>
                  <td>{vote.vote}</td>
                  <td>
                    <button>Export</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="Election-section">
        <h2>Elections</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {electionData.map((election) => (
              <tr key={election.id}>
                <td>{election.name}</td>
                <td>{election.startDate}</td>
                <td>{election.endDate}</td>
                <td>
                  <button>View</button>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button>Add Election</button>
      </div>
    </div>
  );
};

export default AdminPanel;
