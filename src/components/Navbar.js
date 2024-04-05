import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";
import Web3 from "web3";
import { db } from "../firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [account, setAccount] = useState("");
  const [userData, setUserData] = useState(null);
  const [registerStatus, setRegisterStatus] = useState(true); // Added state for register status

  const history = useHistory();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", showButton);

    return () => {
      window.removeEventListener("resize", showButton);
    };
  }, []);

  useEffect(() => {
    // Check if MetaMask is installed and connected
    if (window.ethereum) {
      // Set up listener for account changes
      window.ethereum.on("accountsChanged", handleAccountsChanged);

      // Check if user is logged in
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setAccount(loggedInUser);
        fetchUserData(loggedInUser);
      }
    } else {
      console.log("MetaMask extension not detected. Consider installing it.");
    }

    return () => {
      // Clean up listener when component unmounts
      if (window.ethereum) {
        window.ethereum.removeListener(
          "accountsChanged",
          handleAccountsChanged
        );
      }
    };
  }, []);

  const handleAccountsChanged = async (accounts) => {
    // Handle MetaMask account change
    const newAccount = accounts.length > 0 ? accounts[0] : "No account found";
    setAccount(newAccount);
    // Fetch user data for the new account
    await fetchUserData(newAccount);
  };
  

  const handleLogin = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const ethereumAddress = accounts[0] || "No account found";
  
        // Set Ethereum address in state
        setAccount(ethereumAddress);
  
        // Store logged-in user in local storage
        localStorage.setItem("loggedInUser", ethereumAddress);
  
        // Fetch user data from Firestore
        fetchUserData(ethereumAddress); // Call fetchUserData here
  
      } catch (error) {
        console.error("User denied account access to DApp");
      }
    } else {
      console.log("MetaMask extension not detected. Consider installing it.");
    }
  };
  

  const fetchUserData = async (ethereumAddress) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("ethAddress", "==", ethereumAddress));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        // User found, set user data in state
        snapshot.forEach((doc) => {
          setUserData(doc.data());
        });
        setRegisterStatus(true); // Set register status to true if user is found
      } else {
        console.log("User not found in database");
        // Show message indicating the user is not registered
        setUserData(null); // Clear existing user data
        setRegisterStatus(false); // Set register status to false if user is not found
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleVoteClick = () => {
    if (!account) {
      // User is not logged in, prompt to login
      handleLogin();
    } else {
      // User is logged in, navigate to vote page
      history.push("/Vote");
    }
  };

  const handleAboutClick = () => {
    if (!account) {
      // User is not logged in, prompt to login
      handleLogin();
    } else {
      // User is logged in, navigate to about page
      history.push("/About");
    }
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Voting Student Council <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={handleAboutClick}>
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-links" onClick={handleVoteClick}>
                Vote
              </button>
            </li>
            <li className="nav-item">
              {userData ? (
                <div className="nav-links">
                  <p>Name: {userData.name}</p>
                  <p>Role: {userData.role}</p>
                </div>
              ) : (
                <button className="nav-links" onClick={handleLogin}>
                  {registerStatus ? "SIGN IN" : "You didn't Register"}
                </button>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
