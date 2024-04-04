<script setup lang="ts">
import type { AppSidebarItem } from '~/types'
import { IconInbox, IconArchived, IconLogout } from '#components'
import { useEmailStore } from '~/stores/emails'

const emailStore = useEmailStore()

await callOnce('fetchEmails', emailStore.fetch)

const items = computed<Array<AppSidebarItem>>(() => [
  {
    title: 'Inbox',
    link: '/inbox',
    iconComponent: IconInbox,
    count: emailStore.inboxCount
  },
  {
    title: 'Archive',
    link: '/archive',
    iconComponent: IconArchived,
    count: emailStore.archivedCount
  }
])

const logoutItem: AppSidebarItem = {
  title: 'Logout',
  iconComponent: IconLogout,
  link: '/logout'
}
</script>

<template>
  <div class="app-sidebar">
    <Logo />

    <div class="app-sidebar__menu">
      <ul class="app-sidebar__items">
        <li v-for="item in items" :key="item.link" class="app-sidebar__item">
          <NuxtLink class="app-sidebar__link" :to="item.link">
            <AppSidebarItem :item="item" />
          </NuxtLink>
        </li>
      </ul>
      <ul class="app-sidebar__items">
        <a class="app-sidebar__link" href="#">
          <AppSidebarItem :item="logoutItem" />
        </a>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.app-sidebar {
  padding: 20px 10px;
  background: #f8fafc;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
}

.logo {
  width: 40px;
  margin-left: 14px;
}

.app-sidebar__menu {
  margin-top: 32px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app-sidebar__items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px 0;
}

.app-sidebar__link {
  text-decoration: none;
}
</style>
