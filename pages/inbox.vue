<script setup lang="ts">
useHead({
  title: 'Inbox'
})
</script>

<template>
  <EmailListView view-for="inbox">
    <template #page-title> Inbox </template>
  </EmailListView>
</template>
