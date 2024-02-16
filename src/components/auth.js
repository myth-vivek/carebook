import { useState } from "react";
import { auth, googleAuthProvider } from "./Firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const Auth = () => {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, Email, Password);
        } catch(err) {
            console.error(err)
        }  
    };

    
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleAuthProvider);
        } catch(err) {
            console.error(err)
        }  
    };

    const logout = async () => {
        try{
            await signOut(auth);
        } catch(err) {
            console.error(err)
        }  
    };

   return (
    <div>
        <input placholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
        <input placholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}> Sign In</button>
        <button onClick={signInWithGoogle}> Sign In with Google</button>
        <button onClick={logout}>Logout</button>
    </div>
   )
}

export default Auth;