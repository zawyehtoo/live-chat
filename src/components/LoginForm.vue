<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" v-model="email" required placeholder="Enter email" />
    <input
      type="password"
      v-model="password"
      required
      placeholder="Enter password"
    />
    <div v-if="error" class="error">{{ error }}</div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import useLogIn from "../composables/useLogin";

const { error, LogIn } = useLogIn();
const emits = defineEmits(["login"]);
const email = ref("");
const password = ref("");
const handleSubmit = async () => {
  await LogIn(email.value, password.value);
  if (!error.value) {
    emits("login");
  }
};
</script>

<style>
</style>