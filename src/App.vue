<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from '@/stores/auth';

const disconnect = () => {
    const authStore = useAuthStore()
    return authStore.logout()
}
</script>

<template>
  <body>
  <header>
    <div class="bg-gradient-to-r from-teal-600 to-cyan-700">
      <div class="text-4xl py-1 text-center text-white">
        <h1>Konzik</h1>
      </div>
      <nav class="text-center shadow-xl">
        <RouterLink class="p-2 mx-3 hover:bg-teal-400 rounded-md" to="/"
          >Menu</RouterLink
        >
        <RouterLink class="p-2 mx-3 hover:bg-teal-400 rounded-md" to="/planning"
          >Planning</RouterLink
        >
        <RouterLink class="p-2 mx-3 hover:bg-teal-400 rounded-md" to="/event"
          >Evenement</RouterLink
        >
        <RouterLink class="p-2 mx-3 hover:bg-teal-400 rounded-md" to="/profile"
          >Profil</RouterLink
        >
        <button @click="disconnect" class="p-2 mx-3 hover:bg-teal-400 rounded-md">Se déconnecter</button>
      </nav>
    </div>
  </header>
  <RouterView/>
</body>
</template>
