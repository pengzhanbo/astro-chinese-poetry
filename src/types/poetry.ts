export interface PoetryItem {
  title: string
  id: string
  simplified: ChapterItem
  traditional: ChapterItem
  translation: string[]
}

export type PoetryOptions = PoetryItem[]

export interface ContentItem {
  title: string
  content: PoetryItem[]
}

export interface Book {
  title: string
  id: string
  abstract: string[]
}

export interface ChapterItem {
  title: string
  paragraphs: string[]
}
