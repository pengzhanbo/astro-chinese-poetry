import { chunk } from '@pengzhanbo/utils'
import chuCi from '~/database/chuci.json'
import chunQiu from '~/database/chunqiu.json'
import diZiGui from '~/database/dizigui.json'
import guWenGuanZhi from '~/database/guwenguanzhi.json'
import lunYu from '~/database/lunyu.json'
import mengZi from '~/database/mengzi.json'
import qianJiaShi from '~/database/qianjiashi.json'
import shangShu from '~/database/shangshu.json'
import shengLvQiMeng from '~/database/shenglvqimeng.json'
import shiJing from '~/database/shijing.json'
import tangShi300 from '~/database/tang-shi-300.json'
import wenZiMengQiu from '~/database/wenzimengqiu.json'
import youXueQiongLin from '~/database/youxueqionglin.json'
import zengGuangXianWen from '~/database/zengguangxianwen.json'
import type { SidebarOptions } from '~/types'
import { slugify } from '~/utils'

export const sidebarConfig: Record<string, SidebarOptions> = {
  '/lun-yu': lunYu.map(({ chapter }) => ({
    text: chapter,
    link: `/lun-yu/${slugify(chapter)}`,
  })),
  '/shi-jing': shiJing.reduce((res, item) => {
    const cate = `${item.chapter} · ${item.section}`
    let chapters = res.find((s) => s.text === cate)
    if (!chapters) {
      chapters = { text: cate, items: [], collapsed: false }
      res.push(chapters)
    }
    chapters.items?.push({
      text: item.title,
      link: `/shi-jing/${slugify(item.chapter, item.section, item.title)}`,
    })
    return res
  }, [] as SidebarOptions),
  '/meng-zi': mengZi.map(({ chapter }) => ({
    text: chapter,
    link: `/meng-zi/${slugify(chapter)}`,
  })),
  '/shang-shu': shangShu.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: `/shang-shu/${slugify(title, chapter)}`,
    })),
  })),
  '/chun-qiu': chunQiu.content.map(({ chapter }) => ({
    text: chapter,
    link: `/chun-qiu/${slugify(chapter)}`,
  })),
  '/san-zi-jing': [
    { text: '新版', link: '/san-zi-jing/new' },
    { text: '传统版', link: '/san-zi-jing/traditional' },
  ],
  '/di-zi-gui': diZiGui.content.map(({ chapter }) => ({
    text: chapter,
    link: `/di-zi-gui/${slugify(chapter)}`,
  })),
  '/you-xue-qiong-lin': youXueQiongLin.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: `/you-xue-qiong-lin/${slugify(title, chapter)}`,
    })),
  })),
  '/qian-jia-shi': qianJiaShi.content.map(({ type, content }) => ({
    text: type,
    items: content.map(({ chapter, paragraphs }) => ({
      text: chapter,
      link:
        typeof paragraphs[0] !== 'string'
          ? undefined
          : `/qian-jia-shi/${slugify(type, chapter)}`,
      items:
        typeof paragraphs[0] !== 'string'
          ? (paragraphs as { subchapter: string }[]).map(({ subchapter }) => ({
              text: subchapter,
              link: `/qian-jia-shi/${slugify(type, chapter, subchapter)}`,
            }))
          : undefined,
    })),
  })),
  '/gu-wen-guan-zhi': guWenGuanZhi.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: `/gu-wen-guan-zhi/${slugify(title, chapter)}`,
    })),
  })),
  '/sheng-lv-qi-meng': shengLvQiMeng.content.map(({ title, content }) => ({
    text: title,
    items: content.map(({ chapter }) => ({
      text: chapter,
      link: `/sheng-lv-qi-meng/${slugify(chapter)}`,
    })),
  })),
  '/wen-zi-meng-qiu': wenZiMengQiu.content.map(({ title }) => ({
    text: title,
    link: `/wen-zi-meng-qiu/${slugify(title)}`,
  })),
  '/zeng-guang-xian-wen': zengGuangXianWen.content.map(({ chapter }) => ({
    text: chapter,
    link: `/zeng-guang-xian-wen/${slugify(chapter)}`,
  })),
  '/tang-shi-300': chunk(
    tangShi300.map(({ id, title }) => ({
      link: `/tang-shi-300/${id}`,
      text: title,
    })),
    50,
  ).map((items, index) => ({
    items,
    collapsed: true,
    text: `第${index * 50 + 1} - ${index * 50 + items.length}首`,
  })),
  '/chu-ci': chuCi.reduce((res, item) => {
    let sections = res.find((s) => s.text === item.section)
    if (!sections) {
      sections = { text: item.section, items: [] }
      res.push(sections)
    }
    sections.items?.push({
      text: item.title,
      link: `/chu-ci/${slugify(item.title)}`,
    })
    return res
  }, [] as SidebarOptions),
}
