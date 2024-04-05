import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Vote from "./components/pages/Vote";
import AdminPanel from "./components/AdminPannel";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import { db } from "./firebase/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function App() {
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Check if user is logged in
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
          // Fetch user data from Firestore based on MetaMask address
          const usersRef = collection(db, "users");
          const q = query(usersRef, where("ethAddress", "==", loggedInUser));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
              setUserData(doc.data());
              // Check if the user is an admin
              setIsAdmin(doc.data().role === "Admin");
            });
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>

          <Route path="/about" component={About} />
          <Route path="/vote" component={Vote} />
          <Route path="/sign-up" component={SignUp} />
          {isAdmin ? (
            <Route path="/" component={AdminPanel} />
          ) : (
            <Route path="/" component={Home} />
          )}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
