import app from './firebase.init';
import logo from './logo.svg';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'

const auth = getAuth(app);



function App() {
  const provider = new GoogleAuthProvider();
  // Google auth provider end 
  const handleGoogleSign = () => {
    console.log('clicked')
    signInWithPopup(auth, provider)
    .then(resut => {
      const user = resut.user;
      console.log(user)
    })
    .catch (error => {
      console.log(error, 'error khaisi')
    })
  }


  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGoogleSign}>Google Sign in</button>
      </header>
    </div>
  );
}

export default App;
