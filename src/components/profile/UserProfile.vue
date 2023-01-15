<script setup>
import { ref } from 'vue';

const username = ref(localStorage.getItem('user'))

</script>

<template>
<div class="text-center mt-8">
  <img
    src="@/images/profile/user.png"
    class="rounded-full w-32 mb-4 mx-auto"
    alt="avatar"
  />
  <h5 class="text-xl font-medium leading-tight mb-2">{{ username }}</h5>
  <p class="text-gray-500">user</p>
</div>
</template>