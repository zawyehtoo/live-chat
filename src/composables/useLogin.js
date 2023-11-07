import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null)

const LogIn = async(email,password)=>{
    error.value= null
    try{
        const res = await projectAuth.signInWithEmailAndPassword(email,password);
        if(!res){
            throw new Error('Could not Login complete')
        }
        error.value=null
        console.log(res.user)
    }catch(err){
        error.value = 'Incorrect login credentials'
        console.log(err.message)
    }
}

const useLogIn = ()=>{
    return {error,LogIn}
}

export default useLogIn;