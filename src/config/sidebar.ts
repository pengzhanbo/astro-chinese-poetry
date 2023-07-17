import { chunk, combineURLs } from '@pengzhanbo/utils'
import {
  chuCi,
  chunQiu,
  diZiGui,
  guWenGuanZhi,
  liJi,
  lunYu,
  mengZi,
  qianJiaShi,
  sanZiJing,
  shangShu,
  shengLvQiMeng,
  shiJing,
  tangShi300,
  wenZiMengQiu,
  youXueQiongLin,
  zengGuangXianWen,
  zhouYi,
} from './books'
import { Books } from './site'
import type { SidebarOptions } from '~/types'
import { slugify } from '~/utils'

export const sidebarConfig: Record<string, SidebarOptions> = {}

addSideBarConfig(Books.lunyu, normalSidebar(Books.lunyu, lunYu.content))
addSideBarConfig(Books.mengzi, normalSidebar(Books.mengzi, mengZi.content))
addSideBarConfig(Books.liji, normalSidebar(Books.liji, liJi.content))
addSideBarConfig(Books.zhongyong, normalSidebar(Books.zhouyi, zhouYi.content))
addSideBarConfig(Books.chunqiu, normalSidebar(Books.chunqiu, chunQiu.content))

addSideBarConfig(
  Books.shijing,
  shiJing.content.reduce((res, item) => {
    const cate = `${item.chapter} · ${item.section}`
    let chapters = res.find((s) => s.text === cate)
    if (!chapters) {
      chapters = { text: cate, items: [], collapsed: false }
      res.push(chapters)
    }
    chapters.items?.push({
      text: item.title,
      link: combine(
        Books.shijing,
        slugify(item.chapter, item.section, item.title),
      ),
    })
    return res
  }, [] as SidebarOptions),
)

addSideBarConfig(
  Books.shangshu,
  shangShu.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: combine(Books.shangshu, slugify(title, chapter)),
    })),
  })),
)

addSideBarConfig(
  Books.sanzijing,
  normalSidebar(Books.sanzijing, sanZiJing.content),
)
addSideBarConfig(Books.dizigui, normalSidebar(Books.dizigui, diZiGui.content))
addSideBarConfig(
  Books.youxueqionglin,
  youXueQiongLin.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: combine(Books.youxueqionglin, slugify(title, chapter)),
    })),
  })),
)

addSideBarConfig(
  Books.qianjiashi,
  qianJiaShi.content.map(({ type, content }) => ({
    text: type,
    items: content.map(({ chapter, paragraphs }) => ({
      text: chapter,
      link:
        typeof paragraphs[0] !== 'string'
          ? undefined
          : combine(Books.qianjiashi, slugify(type, chapter)),
      items:
        typeof paragraphs[0] !== 'string'
          ? (paragraphs as { subchapter: string }[]).map(({ subchapter }) => ({
              text: subchapter,
              link: combine(
                Books.qianjiashi,
                slugify(type, chapter, subchapter),
              ),
            }))
          : undefined,
    })),
  })),
)

addSideBarConfig(
  Books.guwenguanzhi,
  guWenGuanZhi.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: combine(Books.guwenguanzhi, slugify(title, chapter)),
    })),
  })),
)

addSideBarConfig(
  Books.shenglvqimeng,
  shengLvQiMeng.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: combine(Books.shenglvqimeng, slugify(chapter)),
    })),
  })),
)

addSideBarConfig(
  Books.wenzimengqiu,
  normalSidebar(Books.wenzimengqiu, wenZiMengQiu.content),
)

addSideBarConfig(
  Books.zengguangxianwen,
  normalSidebar(Books.zengguangxianwen, zengGuangXianWen.content),
)

addSideBarConfig(
  Books.tangshi300,
  chunk(
    tangShi300.content.map(({ id, title }) => ({
      link: combine(Books.tangshi300, id),
      text: title,
    })),
    50,
  ).map((items, index) => ({
    items,
    collapsed: true,
    text: `第${index * 50 + 1} - ${index * 50 + items.length}首`,
  })),
)

addSideBarConfig(
  Books.chuci,
  chuCi.content.reduce((res, item) => {
    let sections = res.find((s) => s.text === item.section)
    if (!sections) {
      sections = { text: item.section, items: [] }
      res.push(sections)
    }
    sections.items?.push({
      text: item.title,
      link: combine(Books.chuci, slugify(item.title)),
    })
    return res
  }, [] as SidebarOptions),
)

function addSideBarConfig(id: string, config: SidebarOptions) {
  sidebarConfig[`/${id}`] = config
}

function combine(...args: string[]) {
  return combineURLs('/', ...args)
}

function normalSidebar(
  id: Books,
  content: ({ chapter: string } | { title: string })[],
) {
  return content.map((item: any) => {
    const text = item.title || item.chapter
    return {
      text,
      link: combine(id, slugify(text)),
    }
  })
}
