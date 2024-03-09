<script setup lang="ts">
import { inject } from 'vue';
import { MButton, MScaffold, MTopAppbar, symbols } from 'manatsu';

const darkMode = inject(symbols.darkMode);
</script>

<template>
  <m-scaffold default-border="none">
    <template #top>
      <m-top-appbar title="Hello, Manatsu!">
        <template #end>
          <m-button variant="outlined" @click="$mana.toggleDarkMode()">
            {{ darkMode ? 'Light' : 'Dark' }}
          </m-button>
        </template>
      </m-top-appbar>
    </template>

    <router-view #default="{ Component }">
      <template v-if="Component">
        <transition mode="out-in">
          <keep-alive>
            <suspense>
              <component :is="Component" />
              <template #fallback>Loading...</template>
            </suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </m-scaffold>
</template>
