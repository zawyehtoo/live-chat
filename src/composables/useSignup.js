import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null)

const signUp = async(email,password,displayName) =>{
    error.value =null
    try{
       const res =  await projectAuth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error('Could not Sign up complete')
        }
        await res.user.updateProfile({displayName})
        error.value=null
        console.log(res.user)
    }catch(err){
        error.value =err.message
        console.log(err.message)
    }
}
const useSignup = ()=>{
    return {error,signUp}
}

export default useSignup