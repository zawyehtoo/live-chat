<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" v-model="name" required placeholder="Enter name" />
    <input type="email" v-model="email" required placeholder="Enter email" />
    <input
      type="password"
      v-model="password"
      required
      placeholder="Enter password"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import useSignup from "../composables/useSignup";
const { error, singUp } = useSignup();

const name = ref("");
const email = ref("");
const password = ref("");
const handleSubmit = async () => {
  await singUp(name.value,email.value, password.value);
};
</script>

<style></style>
