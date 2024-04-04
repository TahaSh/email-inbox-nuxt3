<script setup lang="ts">
import { useEmailStore } from '~/stores/emails'
import { type EmailItem } from '~/types'

const props = defineProps<{ viewFor: 'inbox' | 'archived' }>()

const emailStore = useEmailStore()
await callOnce('fetchEmails', emailStore.fetch)

const viewEmails = computed<Array<EmailItem>>(() =>
  props.viewFor === 'archived'
    ? emailStore.archivedEmails
    : emailStore.inboxEmails
)

const selectedEmails = ref<Array<string>>([])

const openEmail = ref<EmailItem>()

const selectAllChecked = ref(false)

function clearSelectedEmails() {
  selectedEmails.value = []
  selectAllChecked.value = false
}

function toggleAll(e: Event) {
  const target = e.target as HTMLInputElement
  const isChecked = target.checked
  selectAllChecked.value = isChecked
  selectedEmails.value = isChecked
    ? viewEmails.value.map((email) => email.id)
    : []
}
</script>

<template>
  <Teleport to="body">
    <EmailDrawer
      :show="!!openEmail"
      :email="openEmail"
      @close="openEmail = undefined"
    />
  </Teleport>

  <EmailListLayout>
    <template #title> <slot name="page-title" /> </template>

    <div class="email-list-toolbar">
      <label class="email-list-toolbar__select-all">
        <input
          type="checkbox"
          :checked="selectAllChecked"
          @change="toggleAll"
        />
        <span>Email Selected ({{ selectedEmails.length }})</span>
      </label>
      <div v-if="selectedEmails.length" class="email-list-toolbar__buttons">
        <MarkAsReadButton
          :email-ids="selectedEmails"
          @done="clearSelectedEmails"
        />
        <UnarchiveButton
          v-if="viewFor === 'archived'"
          :email-ids="selectedEmails"
          @done="clearSelectedEmails"
        />
        <ArchiveButton
          v-else-if="viewFor === 'inbox'"
          :email-ids="selectedEmails"
          @done="clearSelectedEmails"
        />
      </div>
    </div>

    <div class="email-list">
      <div v-if="!viewEmails.length" class="email-list__empty-state">
        Nothing to show here.
      </div>
      <div
        v-else
        v-for="email in viewEmails"
        :key="email.id"
        :class="[
          'email-list__item',
          email.read ? 'email-list__item--read' : ''
        ]"
        @click="openEmail = email"
      >
        <label class="email-list__select" @click.stop>
          <input v-model="selectedEmails" type="checkbox" :value="email.id" />
        </label>
        <div class="email-list__title">
          {{ email.title }}
        </div>
      </div>
    </div>
  </EmailListLayout>
</template>

<style scoped>
.email-list-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.email-list-toolbar__buttons {
  display: flex;
  align-items: center;
  gap: 0 32px;
}

.email-list-toolbar__select-all {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 0 8px;
  user-select: none;
  cursor: pointer;
}

.email-list {
  display: flex;
  flex-direction: column;
}

.email-list__item {
  display: flex;
  align-items: center;
  gap: 0 10px;
  color: #121829;
  font-size: 14px;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-in-out background;
}

.email-list__item--read {
  opacity: 0.5;
}

.email-list__item:hover {
  background: #d1e2ff;
}

.email-list__item:not(:hover):nth-child(2n) {
  background: #f3f6fb;
}

.email-list__select {
  cursor: pointer;
}

.email-list__empty-state {
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  color: #4b5563;
  font-size: 14px;
}
</style>
