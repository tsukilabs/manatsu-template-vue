<script setup lang="ts">
import { MNavbar, MScaffold } from 'manatsu';
import MainView from './views/MainView.vue';
</script>

<template>
  <MScaffold navbar>
    <template #navbar>
      <MNavbar title="Hello, Manatsu!" />
    </template>

    <MainView />
  </MScaffold>
</template>
