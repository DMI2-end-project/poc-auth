<script setup lang="ts">
import {socket, state} from "./socket";

</script>

<template>
  <div>State : {{ state.connected }}</div>
</template>
