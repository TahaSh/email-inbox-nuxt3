<script setup lang="ts">
import { type EmailItem } from '~/types'

defineProps<{ email: EmailItem | undefined }>()
</script>

<template>
  <div class="email-drawer">
    <DrawerTransition>
      <template #fade>
        <div
          v-show="email"
          class="email-drawer__overlay"
          @click="$emit('close')"
        ></div>
      </template>
      <template #slide>
        <div v-if="email" class="email-drawer__container">
          <div class="email-drawer__content">
            <div class="email-drawer__header">
              <CloseEmailButton @close="$emit('close')" />
              <div class="email-drawer__action-buttons">
                <MarkAsReadButton
                  :email-ids="[email.id]"
                  @done="$emit('close')"
                />
                <ArchiveButton
                  v-if="!email.archived"
                  :email-ids="[email.id]"
                  @done="$emit('close')"
                />
                <UnarchiveButton
                  v-else
                  :email-ids="[email.id]"
                  @done="$emit('close')"
                />
              </div>
            </div>
            <div class="email-drawer__email-content">
              <h2 class="email-drawer__title">
                {{ email.title }}
              </h2>
              <p class="email-drawer__body">{{ email.body }}</p>
            </div>
          </div>
        </div>
      </template>
    </DrawerTransition>
  </div>
</template>

<style scoped>
.email-drawer {
  position: fixed;
  z-index: 1;
}
.email-drawer__overlay {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(76, 87, 100, 0.8);
  will-change: opacity;
}

.email-drawer__container {
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 752px;
  height: 100%;
  background: white;
  padding: 32px;
  will-change: transform;
}

.email-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.email-drawer__action-buttons {
  display: flex;
  align-items: center;
  gap: 0 32px;
}

.email-drawer__email-content {
  margin-top: 32px;
}

.email-drawer__title {
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: #121829;
  font-weight: 600;
}

.email-drawer__body {
  margin: 20px 0 0;
  padding: 0;
  color: #4b5563;
  font-size: 14px;
}
</style>
