<template>
   <div class="container">
     <Navbar />
     <ChatWindow />
    <NewChatForm />
   </div>
</template>

<script setup>
import ChatWindow from '../components/ChatWindow.vue'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import {projectAuth}  from '../firebase/config'
import getUser  from  '../composables/getUser'
import { useRouter} from 'vue-router'
import { watch } from 'vue';

const {user} = getUser();
const router = useRouter()
projectAuth.onAuthStateChanged((user) => {
  if (!user) {
    router.push({ name: 'Welcome' });
  }
});

</script>

<style>

</style>