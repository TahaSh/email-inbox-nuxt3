<script setup lang="ts">
import { useEmailStore } from '~/stores/emails'

const props = defineProps<{ emailIds: Array<string> }>()

const emit = defineEmits<{ (e: 'done'): void }>()

const emailStore = useEmailStore()

function onKeyPress(e: KeyboardEvent) {
  if (e.key === 'a') {
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
    emailStore.updateArchived(props.emailIds, true)
    emit('done')
  }
}
</script>

<template>
  <ActionButton @click="execute">
    <template #icon>
      <IconDelete class="action-button__icon" />
    </template>
    <template #title>
      <span>Archive (a)</span>
    </template>
  </ActionButton>
</template>
