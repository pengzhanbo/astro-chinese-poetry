type ClassNameItem = string | Record<string, boolean | undefined>

export type ClassName = ClassNameItem | ClassNameItem[]

export interface BaseProps {
  'class'?: string
  'class:list'?: ClassName
}

export interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

export type SidebarOptions = SidebarItem[]

export interface NavItemWithLink {
  text: string
  link: string
  activeMatch?: string
  rel?: string
  target?: string
}

export interface NavItemChildren {
  text?: string
  items: NavItemWithLink[]
}

export interface NavItemWithChildren {
  text?: string
  items: (NavItemChildren | NavItemWithLink)[]
  activeMatch?: string
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export type NavOptions = NavItem[]

export interface LinkOptions {
  text?: string
  link: string
}
