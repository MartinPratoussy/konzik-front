<script setup>
import EventElement from "./EventElement.vue";
import { ref } from "vue";
import { useEventStore } from "@/stores/events"

const eventStore = useEventStore()
eventStore.reloadEvents()

const listEvents = ref(eventStore.getEvents);
</script>

<template>
  <div class="flex flex-col place-items-center mt-7">
    <div class="my-2" v-for="ev of listEvents">
      <EventElement :currentEvent="ev" />
    </div>
  </div>
</template>
