import './App.css';
import Profile from './profile/Profile_component'
import ProfileImg from "./profile/ProfileImg.jpg";

function App() {
  const handleName = (name) => {

    alert(`Name of profile user is ${name}`)

  }
  return (
    <div className="App">
      {/* Props to profileComponent */}
      <Profile
        fullName="Afaf kelai "
        profession=" Developer"
        bio="Google developers Lead Women Techmakers Ambassador Web (Reactjs, Node) Mobile (Kotlin) Developer , Data Science , ML,Cloud Computing ."
        handleName={handleName}
      >
        {/* Pass as Children Props to profileComponent */}
        <img src={ProfileImg} alt="img" />
      </Profile>
      
    </div >
  );
}

export default App;
