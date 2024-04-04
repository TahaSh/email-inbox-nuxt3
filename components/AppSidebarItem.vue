<script setup lang="ts">
import { type AppSidebarItem } from '~/types'

defineProps<{ item: AppSidebarItem }>()
</script>

<template>
  <div class="app-sidebar-item">
    <div class="app-sidebar-item__icon-title">
      <component class="app-sidebar-item__icon" :is="item.iconComponent" />
      <span class="app-sidebar-item__title">
        {{ item.title }}
      </span>
    </div>
    <div class="app-sidebar-item__count">
      {{ item.count }}
    </div>
  </div>
</template>

<style scoped>
.app-sidebar-item {
  color: #121829;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 54px;
  padding: 12px 24px;
  color: #4b5563;
}

.router-link-active .app-sidebar-item {
  background: #d6e2fb;
  color: #121829;
}

.app-sidebar-item:hover {
  color: #121829;
}

.app-sidebar-item__icon-title {
  display: flex;
  align-items: center;
  gap: 0 12px;
}

.app-sidebar-item__title {
  font-weight: 600;
}

.app-sidebar-item__count {
  font-weight: 600;
}
</style>
