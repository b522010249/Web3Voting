import React from "react";
import "../css/ElectionInformation.css";
function ElectionInformation() {
  const ongoingElections = [
    {
      id: 1,
      name: "City Council Election",
      date: "March 5, 2024",
      isActive: true,
    },
    {
      id: 2,
      name: "School Board Election",
      date: "March 10, 2024",
      isActive: true,
    },
  ];

  const upcomingElections = [
    {
      id: 3,
      name: "Mayoral Election",
      date: "April 15, 2024",
      isActive: false,
    },
    {
      id: 4,
      name: "County Commissioner Election",
      date: "May 1, 2024",
      isActive: false,
    },
  ];

  const selectedElection = {
    id: 1,
    name: "City Council Election",
    date: "March 5, 2024",
    candidates: [
      {
        id: 1,
        name: "Candidate A",
        description: "Experienced community leader.",
        pictureUrl: "path-to-candidate-a-picture.jpg",
      },
      {
        id: 2,
        name: "Candidate B",
        description: "Passionate advocate for change.",
        pictureUrl: "path-to-candidate-b-picture.jpg",
      },
      // Add more candidates as needed
    ],
    positions: ["Council Member", "Council Chair"],
    isActive: true,
  };

  return (
    <div className="election-container">
      <div className="election-list">
        <div className="ongoing-elections">
          <h2>Ongoing Elections</h2>
          <div className="container">
            {ongoingElections.map((election) => (
              <div className="card" key={election.id}>
                <text>Election{election.id}</text>
                <text key={election.id}>{election.name}</text>
                <text key={election.id}>{election.date}</text>
                <button>View</button>
              </div>
            ))}
          </div>
        </div>
        <div className="upcoming-elections">
          <h2>Upcoming Elections</h2>
          <div className="container">
            {upcomingElections.map((election) => (
              <div className="card" key={election.id}>
                <text>Election{election.id}</text>
                <text key={election.id}>{election.name}</text>
                <text key={election.id}>{election.date}</text>
                <button>View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="election-details">
        <h2>Election Details</h2>
        {selectedElection && (
          <>
            <p>Date: {selectedElection.date}</p>
            <p>
              Candidates:{" "}
              {selectedElection.candidates
                .map((candidate) => candidate.name)
                .join(", ")}
            </p>
            <p>Positions: {selectedElection.positions.join(", ")}</p>
          </>
        )}
        <h2>Candidate</h2>
        <div className="canidate-container">
          {selectedElection.candidates.map((candidate) => (
            <div key={candidate.id} className="card-cardinate">
              <h3>Candinate{candidate.id}</h3>
              <div>
                <img src={candidate.pictureUrl} alt={candidate.name} />
                <h4>name:{candidate.name}</h4>
                <p>description:{candidate.description}</p>
              </div>
            </div>
          ))}
          {selectedElection.isActive && (
            <button className="vote-button">Vote Now</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ElectionInformation;
