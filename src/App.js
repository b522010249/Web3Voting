import './App.css';
import AdminPanel from './components/AdminPannel';
import ElectionInformation from './components/ElectionInformation';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App" style={{flex: 1 }}>
      {/* <ElectionInformation/> */}
      {/* <UserProfile/> */}
      <AdminPanel/>
      <Footer/>
    </div>
  );
}

export default App;
