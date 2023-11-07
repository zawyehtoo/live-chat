<template>
  <div class="welcome container">
    <div v-if="showLogin">
        <LoginForm @login="enterChat"/>
        <p>Don't have account?<span style="color:blue;cursor:pointer" @click="showLogin = false">Create New one.</span></p>
    </div>
    <div v-else>
        <SignupForm @signup="enterChat"/>
        <p>Already have an account?<span style="color:blue;cursor:pointer" @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script setup>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import {useRouter} from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const showLogin =ref(true);
const enterChat = ()=>{
    router.push({name:'Chatroom'})
}

</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
.welcome form{
    width: 300px;
    margin: 20px auto;
}
.welcome label{
    display: block;
    margin: 20px 0 10px;
}
.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid lightblue;
    outline: none;
    color: #999;
    margin: 10px auto;
}
</style>