import { books } from './books'
import { Books } from './site'
import type { NavItemWithLink, NavOptions } from '~/types'

function item(id: Books, active = true): NavItemWithLink {
  const book = books[id]
  const link = `/${id}`
  return {
    text: book.title,
    link,
    activeMatch: active ? `^${link}` : undefined,
  }
}

export const navConfig: NavOptions = [
  { text: '首页', link: '/' },
  {
    text: '蒙学',
    items: [
      {
        text: '基础',
        items: [
          item(Books.sanzijing),
          item(Books.baijiaxing),
          item(Books.qianziwen),
        ],
      },
      {
        text: '扩展',
        items: [
          item(Books.dizigui),
          item(Books.youxueqionglin),
          item(Books.zhuzijiaxun),
          item(Books.qianjiashi),
          item(Books.guwenguanzhi),
          item(Books.shenglvqimeng),
          item(Books.wenzimengqiu),
          item(Books.zengguangxianwen),
          item(Books.tangshi300),
        ],
      },
    ],
  },
  {
    text: '四书五经',
    items: [
      {
        text: '四书',
        items: [
          item(Books.lunyu),
          item(Books.daxue),
          item(Books.zhongyong),
          item(Books.mengzi),
        ],
      },
      {
        text: '五经',
        items: [
          item(Books.shijing),
          item(Books.shangshu),
          item(Books.liji),
          item(Books.zhouyi),
          item(Books.chunqiu),
        ],
      },
    ],
  },
  {
    text: '更多',
    activeMatch: `^/(${Books.chuci})`,
    items: [item(Books.chuci)],
  },
]
