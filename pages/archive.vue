<script setup lang="ts">
useHead({
  title: 'Archive'
})
</script>

<template>
  <EmailListView view-for="archived">
    <template #page-title> Archive </template>
  </EmailListView>
</template>
