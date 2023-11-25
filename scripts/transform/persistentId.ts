import fs from 'node:fs'
import { customAlphabet } from 'nanoid'
import { targetPath } from './utils'

let cache!: Record<string, string>
const filename = 'persistent-id.json'
const nanoid = customAlphabet('1234567890', 10)

export function getId(...args: string[]): string {
  const key = args.join('/')
  if (!cache[key])
    cache[key] = nanoid()

  return cache[key]
}

export async function loadPersistentId(): Promise<typeof cache> {
  if (cache)
    return cache

  try {
    const content = await fs.promises.readFile(targetPath(filename), 'utf-8')
    cache = JSON.parse(content || '{}')
    return cache
  }
  catch (e) {
    // console.error(e)
    return (cache = {})
  }
}

export async function savePersistentId() {
  await loadPersistentId()
  checkIds()
  await fs.promises.writeFile(
    targetPath(filename),
    JSON.stringify(cache, null, '  '),
  )
}

function checkIds() {
  const map: Record<string, string[]> = {}
  Object.keys(cache).forEach((key) => {
    const id = cache[key]
    if (!map[id])
      map[id] = []

    map[id].push(key)
  })
  Object.keys(map).forEach((key) => {
    const keys = map[key]
    if (keys.length > 1)
      console.warn('warn ids:: ', keys)
  })
}
