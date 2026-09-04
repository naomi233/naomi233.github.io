<script setup lang="ts">
import { Blog } from "vuepress-theme-hope/blog"
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js"
</script>

<template>
  <Blog>
    <template #heroInfo="data">
      <HitokotoBlogHero v-bind="data" />
    </template>
  </Blog>
</template>
