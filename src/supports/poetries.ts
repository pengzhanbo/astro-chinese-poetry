import { poetries } from '~/config/poetries'
import type { PoetryItem, PoetryOptions } from '~/types'

export const getPoetriesConfig = (
  id: string,
  list: PoetryOptions = poetries,
): PoetryItem | null => {
  for (let i = 0, len = list.length; i < len; i++) {
    const poetry = list[i]
    if (poetry.id === id) {
      return poetry as PoetryItem
    }
    if (poetry.items && poetry.items.length) {
      const res = getPoetriesConfig(id, poetry.items)
      if (res) return res
    }
  }
  return null
}
