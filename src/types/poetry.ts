export interface PoetryItem {
  title: string
  include?: string | string[]
  id: string
  description?: string | string[]
  items?: PoetryItem[]
}

export type PoetryOptions = PoetryItem[]

export interface ChapterItem {
  chapter: string
  paragraphs: string[]
}

export interface ArticleItem {
  title: string
  paragraphs: string[]
}

// 三字经
export interface SanZiJing extends ArticleItem {
  author: string
  tags: string
}
// 百家姓
export interface BaiJiaXing extends ArticleItem {
  author: string
  tags: string
}
// 千字文
export interface QianZiWen extends ArticleItem {
  author: string
  tags: string
  spells: string[]
}

// 弟子规
export interface DiZiGui {
  title: string
  author: string
  content: ChapterItem[]
}

// 幼学琼林
export interface YouXueQiongLin {
  title: string
  author: string
  abstract: string
  content: {
    title: string
    content: ChapterItem[]
  }[]
}

// 朱子家训
export interface ZhuZiJiaXin {
  title: string
  author: string
  paragraphs: string[]
}

// 千家诗
export interface QianJiaShiContent {
  chapter: string
  author: string
  paragraphs: string[] | { subchapter: string; paragraphs: string[] }[]
}
export interface QianJiaShi {
  title: string
  author: string
  content: {
    type: string
    content: QianJiaShiContent[]
  }[]
}

// 古文观止
export interface GuWenGuanZhiContent extends ChapterItem {
  author: string
  source: string
}
export interface GuWenGuanZhi {
  title: string
  abstract: string
  content: {
    title: string
    content: GuWenGuanZhiContent[]
  }[]
}

// 声律启蒙
export interface ShengLingQunMeng {
  title: string
  author: string
  abstract: string
  content: {
    title: string
    content: ChapterItem[]
  }[]
}

// 文字蒙求
export interface WenZiMengQiuItem {
  title: string
  paragraphs: string[]
}
export interface WenZiMengQiu {
  title: string
  author: string
  abstract: string
  preface: string[]
  content: WenZiMengQiuItem[]
}

// 增广贤文
export interface ZengGuangXianWen {
  title: string
  author: string
  abstract: string
  content: ChapterItem[]
}

// 论语
export type LunYu = ChapterItem[]

// 诗经
export interface ShiJingItem {
  title: string
  chapter: string
  section: string
  content: string[]
}
export type ShiJing = ShiJingItem[]

// 楚辞
export interface ChuCiItem {
  title: string
  section: string
  author: string
  content: string[]
}
export type ChuCi = ChuCiItem[]

// 唐诗300首
export interface TangShi300Item {
  id: string
  title: string
  author: string
  paragraphs: string[]
  tags: string[]
}
export type TangShi300 = TangShi300[]

// 大学
export interface DaXue extends ChapterItem {}

// 中庸
export interface ZhongYong extends ChapterItem {}

// 孟子
export type MengZi = ChapterItem[]
