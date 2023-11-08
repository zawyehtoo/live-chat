<template>
  <form @submit.prevent="handleSubmit">
    <textarea v-model="message" @keypress.enter.prevent="handleSubmit" placeholder="Type message and Hit enter..." required></textarea>
    <div style="text-align:right">
      <button style="margin-bottom:10px;cursor:pointer" type="submit">Send</button>
    </div>
  </form>
</template>

<script setup>
import getUser from "@/composables/getUser";
import { ref } from "vue";
import { timestamp } from "../firebase/config";
import  useCollection  from "../composables/useCollection";
const { addDoc, error } = useCollection("messages");
const { user } = getUser();
const message = ref("");

const handleSubmit = async () => {
  const chat = {
    name: user.value.displayName,
    message: message.value,
    createdAt: timestamp(),
  };
  await addDoc(chat);
  if (!error.value) {
    message.value = "";
  }
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid lightgray;
  border-radius: 20px;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
}
</style>