<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="not-found">
    <h1>Not Found</h1>
    <p>{{ router.currentRoute.value.params.pathMatch }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .not-found {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
