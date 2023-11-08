<template>
  <nav v-if="user">
    <div >
      <p>Hey there.... {{ user.displayName }}</p>
      <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">logout</button>
  </nav>
</template>

<script setup>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
const { error, Logout } = useLogout();
const { user } = getUser();

const handleClick = async () => {
  await Logout();
  if (!error.value) {
    console.log("logout successfully");
  }
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
nav p {
  margin: 2px auto;
  color: #444;
  font-size: 16px;
  text-align: left;

}
.email {
  font-size: 14px;
  color: #999;
}
</style>
