import { type DefineComponent } from 'vue'

export interface AppSidebarItem {
  title: string
  iconComponent: DefineComponent<{}, {}, any>
  count?: number
  link: string
}

export interface EmailItem {
  id: string
  title: string
  body: string
  archived: boolean
  read: boolean
}
