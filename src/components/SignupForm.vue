<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" v-model="displayName" required placeholder="Enter name" />
    <input type="email" v-model="email" required placeholder="Enter email" />
    <input
      type="password"
      v-model="password"
      required
      placeholder="Enter password"
    />
    <div v-if="error" class="error">{{error}}</div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref,defineEmits } from "vue";
import useSignup from "../composables/useSignup";
const emits = defineEmits(["signup"]);
const { error, signUp } = useSignup();

const displayName = ref("");
const email = ref("");
const password = ref("");
const handleSubmit = async () => {
  await signUp(email.value, password.value,displayName.value);
  if (!error.value) {
    emits("signup");
  }
};
</script>

<style></style>
