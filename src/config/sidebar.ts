import { chunk } from '@pengzhanbo/utils'
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
import { combine } from '~/utils'

export const sidebarConfig: Record<string, SidebarOptions> = {}

addSideBarConfig(Books.lunyu, normalSidebar(Books.lunyu, lunYu.content))
addSideBarConfig(Books.mengzi, normalSidebar(Books.mengzi, mengZi.content))
addSideBarConfig(Books.liji, normalSidebar(Books.liji, liJi.content))
addSideBarConfig(Books.zhouyi, normalSidebar(Books.zhouyi, zhouYi.content))
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
      link: combine(Books.shijing, item.id),
    })
    return res
  }, [] as SidebarOptions),
)

addSideBarConfig(
  Books.shangshu,
  shangShu.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ title, id }) => ({
      text: title,
      link: combine(Books.shangshu, id),
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
    items: content.map(({ title, id }) => ({
      text: title,
      link: combine(Books.youxueqionglin, id),
    })),
  })),
)

addSideBarConfig(
  Books.qianjiashi,
  qianJiaShi.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ title, content, id }) => ({
      text: title,
      link: id && !content ? combine(Books.qianjiashi, id) : undefined,
      items: content
        ? content.map(({ title, id }) => ({
            text: title,
            link: combine(Books.qianjiashi, id),
          }))
        : undefined,
    })),
  })),
)

addSideBarConfig(
  Books.guwenguanzhi,
  guWenGuanZhi.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ title, id }) => ({
      text: title,
      link: combine(Books.guwenguanzhi, id),
    })),
  })),
)

addSideBarConfig(
  Books.shenglvqimeng,
  shengLvQiMeng.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ title, id }) => ({
      text: title,
      link: combine(Books.shenglvqimeng, id),
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
      link: combine(Books.chuci, item.id),
    })
    return res
  }, [] as SidebarOptions),
)

function addSideBarConfig(id: string, config: SidebarOptions) {
  sidebarConfig[`/${id}`] = config
}

function normalSidebar(id: Books, content: { title: string; id: string }[]) {
  return content.map((item) => {
    const text = item.title
    return {
      text,
      link: combine(id, item.id),
    }
  })
}
