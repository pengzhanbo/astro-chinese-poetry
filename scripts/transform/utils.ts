import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isArray } from '@pengzhanbo/utils'
import {
  simpleToTradition,
  traditionToSimple,
} from 'chinese-simple2traditional'

export const dirname = path.dirname(fileURLToPath(import.meta.url))
export const sourcePath = (url: string) =>
  path.join(dirname, '../../raw-data', url)
export const targetPath = (url: string) =>
  path.join(dirname, '../../src/database', url)

export async function readFile<T>(url: string): Promise<T> {
  try {
    const content = await fs.promises.readFile(sourcePath(url), 'utf-8')
    return JSON.parse(content)
  } catch (e) {
    console.error(e)
    return {} as T
  }
}

export async function writeFile(url: string, content: any) {
  try {
    await fs.promises.writeFile(
      targetPath(url),
      JSON.stringify(content, null, '  '),
    )
  } catch (e) {
    console.error(e)
  }
}

export function toTradition(content: string | string[]): typeof content {
  if (isArray(content)) {
    return content.map(simpleToTradition)
  }
  return simpleToTradition(content)
}

export function toSimple(content: string | string[]): typeof content {
  if (isArray(content)) {
    return content.map(traditionToSimple)
  }
  return traditionToSimple(content)
}
