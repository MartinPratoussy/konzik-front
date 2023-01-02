<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';

const username = ref("")
const userrole =  ref("")
const authStore = useAuthStore()

</script>

<template>
<div class="text-center mt-8">
  <img
    src="@/images/profile/user.png"
    class="rounded-full w-32 mb-4 mx-auto"
    alt="avatar"
  />
  <h5 class="text-xl font-medium leading-tight mb-2">Name</h5>
  <p class="text-gray-500">User</p>
</div>
</template>