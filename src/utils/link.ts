import { isBrowser } from '@pengzhanbo/utils'

export const EXTERNAL_URL_RE = /^[a-z]+:/i
export const HASH_RE = /#.*$/

export const normalizeLink = (link: string) => {
  if (EXTERNAL_URL_RE.test(link)) {
    return link
  }
  const { pathname, hash, search } = new URL(link, 'http://example.com')

  return link.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname}${search}${hash}`)
}

export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}

export function normalize(path: string): string {
  return decodeURI(path).replace(HASH_RE, '')
}

export function isActive(
  currentPath: string,
  matchPath?: string,
  asRegex = false,
): boolean {
  if (!matchPath) {
    return false
  }

  currentPath = normalize(`/${decodeURI(currentPath).replace(/^\/|\/$/g, '')}`)

  if (asRegex) {
    return new RegExp(matchPath).test(currentPath)
  }

  if (normalize(matchPath) !== currentPath) {
    return false
  }

  const hashMatch = matchPath.match(HASH_RE)

  if (hashMatch) {
    return (isBrowser() ? location.hash : '') === hashMatch[0]
  }

  return true
}

export function ensureStartingSlash(path: string): string {
  return /^\//.test(path) ? path : `/${path}`
}

export function slugify(...texts: string[]): string {
  return texts
    .map((t) => t.trim())
    .join('-')
    .toLowerCase()
    .replace(/[:\\?*'"<>|]/g, '')
    .replace(/^-+|-+$/g, '')
}

export function slugifyParams<T = Record<string, string>>(params: T): T {
  const res = {} as T
  for (const key in params) {
    res[key] = slugify(params[key] as unknown as string) as any
  }
  return res
}
