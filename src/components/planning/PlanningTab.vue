<script setup>
import PlanningElement from "./PlanningElement.vue";
import { ref } from "vue";
import { useAuthStore } from '@/stores/auth';

const eventStore = useAuthStore()
eventStore.reloadUserEvents()

const listEvents = ref(eventStore.getUserEvents);
</script>

<template>
  <div class="flex flex-col place-items-center mt-7">
    <div class="my-2" v-for="ev of listEvents">
      <PlanningElement :currentEvent="ev" />
    </div>
  </div>
</template>
