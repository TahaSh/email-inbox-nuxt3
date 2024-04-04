<script setup lang="ts">
const emit = defineEmits<{ (e: 'close'): void }>()

function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    execute()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})

function execute() {
  emit('close')
}
</script>

<template>
  <ActionButton @click="execute">
    <template #icon>
      <IconClose class="email-drawer__close-icon" />
    </template>
    <template #title> Close (Esc) </template>
  </ActionButton>
</template>

<style scoped>
.email-drawer__close-icon {
  width: 11px;
  color: #88909b;
}
</style>
