import { projectFirestore } from "@/firebase/config";
import {ref, watchEffect} from 'vue'

const getCollection = (collection)=>{
    const document=ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection)
        .orderBy('createdAt')

   const unsub = collectionRef.onSnapshot((snap) =>{
        let result = []
        snap.docs.forEach((doc) =>{
            doc.data().createdAt && result.push({...doc.data(),id:doc.id})
        })
        document.value=result
        error.value=null
    },(err)=>{
        error.value='Could not fetch data'
        document.value=null
        console.log(err.message)
    })
    watchEffect((onInvalidate)=>{
        //unsub from prev collection when watcher is stopped
        onInvalidate(()=>unsub())
    })
    return {document,error}
}


export default getCollection