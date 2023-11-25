import { ensureStartingSlash } from '../utils/link'
import { sidebarConfig } from '~/config/sidebar'

export function getSidebar(url: string) {
  url = decodeURIComponent(url)
  const keys = Object.keys(sidebarConfig)
  const current = keys.find(key => url.startsWith(ensureStartingSlash(key)))
  return current ? sidebarConfig[current] : null
}

export function hasSidebar(url: string) {
  url = decodeURIComponent(url)
  const keys = Object.keys(sidebarConfig)
  return keys.some(key => url.startsWith(ensureStartingSlash(key)))
}
