<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <h1>Test</h1>
  {{ config.public.logLevel }}
</template>
