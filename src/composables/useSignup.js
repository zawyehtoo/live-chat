import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null)

const signUp = async(email,password,name) =>{
    error.value =null
    try{
       const res =  await projectAuth.createUserWithEmailAndPassword(email,password)
        if(!res){
            throw new Error('Could not Sign up complete')
        }
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