<script setup lang="ts">
import { MButton, MScaffold, MTopAppbar, symbols } from 'manatsu';

const darkMode = inject(symbols.darkMode);
</script>

<template>
  <m-scaffold>
    <template #top>
      <m-top-appbar>
        <template #start>
          <span>Vue Template for Manatsu</span>
        </template>
        <template #end>
          <m-button variant="outlined" @click="$mana.toggleDarkMode()">
            {{ darkMode ? 'Light' : 'Dark' }}
          </m-button>
        </template>
      </m-top-appbar>
    </template>

    <template #default>
      <router-view #default="{ Component }">
        <template v-if="Component">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </template>
      </router-view>
    </template>
  </m-scaffold>
</template>
