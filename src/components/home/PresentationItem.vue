<template>
  <div class=" p-2 bg-stone-100 hover:bg-stone-200/[.5] shadow-lg rounded-xl max-w-5xl mx-auto item">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3 class="text-xl font-medium mb-1">
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}
</style>
