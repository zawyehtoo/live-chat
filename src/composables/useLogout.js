import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const error = ref(null)

const Logout =async ()=>{
    try{
        error.value=null
        await projectAuth.signOut();
    }catch(err){
        error.value = err.message
        console.log(err.message)
    }

}

const useLogout = () =>{
    return {error,Logout}
}

export default useLogout;