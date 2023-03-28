<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import {socket, state} from "../client";

const router = useRouter();
const roomId = ref('');

const goToDashboard = () => {
  /*
  if (isAuthenticated) {
    router.push('/dashboard')
  } else {
    router.push('/login')
  }*/
}
const joinRoom = () => {
  console.log('roomId', roomId.value);
  socket.emit('join', roomId.value);
}
</script>
<template>
  <div>
    <h1>Home</h1>
    <div>State : {{ state.connected }}</div>
    <form @submit.prevent="joinRoom">
      <label for="roomId">Room id :</label>
      <input type="text" name="roomId" v-model="roomId">
      <button type="submit">Joindre la room</button>
    </form>
  </div>
</template>
<style scoped>

</style>