import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from "../Components/Login/Firebase/firebase.init"

initializeAuthentication()

const useFirebase = () =>{
    const [user , setUser] = useState()
    const auth = getAuth()
    const [error , setError] = useState()
    const googleProvider = new GoogleAuthProvider();



    const signinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
        
        .catch(error=>{
            setError(error.message);
        })
    }
    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .catch(error=>{
            setError(error.message)
        })
    }
// Observer For User's Current Situtation
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{

            }
        })
    },[])
    return{
        user,
        signinWithGoogle,
        logOut,
        error,
    }

}
export default useFirebase;