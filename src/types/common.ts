type ClassNameItem = string | Record<string, boolean | undefined>

export type ClassName = ClassNameItem | ClassNameItem[]

export interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

export type SidebarOptions = SidebarItem[]

export interface NavbarItem {
  text: string
  link?: string
  items?: NavbarItem[]
}

export type NavbarOptions = NavbarItem[]

export interface LinkOptions {
  text?: string
  link: string
}
