 import { useState } from "react";
import "./App.css";
import app from "./firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        
      })
      .catch((error) => {
        console.log("error is", error);
      });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      <h2>User Name: {user.displayName}</h2>
      <h4>I Know Your email: {user.email}</h4>
      <img src={user.photoURL} alt="user"/>
    </div>
  );
}

export default App;
