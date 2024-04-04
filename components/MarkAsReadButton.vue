<script setup lang="ts">
import { useEmailStore } from '~/stores/emails'

const props = defineProps<{ emailIds: Array<string> }>()

const emit = defineEmits<{ (e: 'done'): void }>()

const emailStore = useEmailStore()

function onKeyPress(e: KeyboardEvent) {
  if (e.key === 'r') {
    execute()
  }
}

onMounted(() => {
  window.addEventListener('keypress', onKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keypress', onKeyPress)
})

function execute() {
  if (props.emailIds?.length) {
    emailStore.markAsRead(props.emailIds)
    emit('done')
  }
}
</script>

<template>
  <ActionButton @click="execute">
    <template #icon>
      <IconMail class="action-button__icon" />
    </template>
    <template #title>
      <span>Mark as read (r)</span>
    </template>
  </ActionButton>
</template>
