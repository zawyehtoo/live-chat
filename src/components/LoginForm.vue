<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
        <input type="email" v-model="email" required placeholder="Enter email" >
        <input type="password" v-model="password" required placeholder="Enter password" >
        <button  type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue"

const email = ref('');
const password = ref('');
const handleSubmit = () =>{

}

</script>

<style>

</style>