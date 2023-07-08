import type { LinkOptions } from '~/types'

export const pervNext = <T>(
  data: T[],
  currentIndex: number,
  transformer: (item: T, type: 'prev' | 'next') => LinkOptions,
) => {
  const prev = currentIndex - 1 < 0 ? undefined : data[currentIndex - 1]
  const next =
    currentIndex + 1 > data.length - 1 ? undefined : data[currentIndex + 1]
  return {
    prev: prev ? transformer(prev, 'prev') : undefined,
    next: next ? transformer(next, 'next') : undefined,
  }
}
