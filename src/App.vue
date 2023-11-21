<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <RouterView #default="{ Component }">
      <template v-if="Component">
        <Transition name="fade" mode="out-in">
          <Suspense>
            <component :is="Component" />
          </Suspense>
        </Transition>
      </template>
    </RouterView>
  </main>
</template>
