import { toArray } from '@pengzhanbo/utils'
import chunqiu from '../../raw-data/chunqiu.json'
import daxue from '../../raw-data/daxue.json'
import liji from '../../raw-data/liji.json'
import lunyu from '../../raw-data/lunyu.json'
import mengzi from '../../raw-data/mengzi.json'
import shangshu from '../../raw-data/shangshu.json'
import shijing from '../../raw-data/shijing.json'
import zhongyong from '../../raw-data/zhongyong.json'
import zhouyi from '../../raw-data/zhouyi.json'
import { getId } from './persistentId'
import { toSimple, toTradition, writeFile } from './utils'

export async function transformSiShuWuJing() {
  await transformLunyu()
  await transformDaXue()
  await transformZhongyong()
  await transformMengzi()

  await transformShijing()
  await transformShangshu()
  await transformLiji()
  await transformZhouyi()
  await transformChunqiu()
}

async function transformLunyu() {
  const filename = 'lunyu.json'
  lunyu.abstract = toArray(lunyu.abstract)
  lunyu.content = lunyu.content.map(({ chapter, paragraphs }) => {
    return {
      id: getId(filename, chapter),
      title: toSimple(chapter),
      traditional: {
        title: chapter,
        paragraphs,
      },
      simplified: {
        title: toSimple(chapter),
        paragraphs: toSimple(paragraphs),
      },
      translation: [],
    }
  }) as any
  await writeFile(filename, lunyu)
}

async function transformDaXue() {
  const filename = 'daxue.json'
  const data = {
    title: daxue.title,
    abstract: toArray(daxue.abstract),
    traditional: {
      title: daxue.title,
      paragraphs: daxue.paragraphs,
    },
    simplified: {
      title: toSimple(daxue.title),
      paragraphs: toSimple(daxue.paragraphs),
    },
    translation: [],
  }
  await writeFile(filename, data)
}

async function transformZhongyong() {
  const filename = 'zhongyong.json'
  const data = {
    title: zhongyong.title,
    abstract: toArray(zhongyong.abstract),
    traditional: {
      title: zhongyong.title,
      paragraphs: zhongyong.traditional,
    },
    simplified: {
      title: toSimple(zhongyong.title),
      paragraphs: toSimple(zhongyong.traditional),
    },
    translation: zhongyong.translation,
  }
  await writeFile(filename, data)
}

async function transformMengzi() {
  const filename = 'mengzi.json'
  const data = {
    title: mengzi.title,
    abstract: toArray(mengzi.abstract),
    content: mengzi.content.map(({ chapter, paragraphs }) => {
      return {
        id: getId(filename, chapter),
        title: toSimple(chapter),
        traditional: {
          title: chapter,
          paragraphs,
        },
        simplified: {
          title: toSimple(chapter),
          paragraphs: toSimple(paragraphs),
        },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformShijing() {
  const filename = 'shijing.json'
  const data = {
    title: shijing.title,
    abstract: toArray(shijing.abstract),
    content: shijing.content.map(({ chapter, section, title, content }) => {
      return {
        id: getId(filename, chapter, section, title),
        title,
        chapter,
        section,
        traditional: {
          title: toTradition(title),
          chapter: toTradition(chapter),
          section: toTradition(section),
          paragraphs: toTradition(content),
        },
        simplified: {
          title,
          chapter,
          section,
          paragraphs: content,
        },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformShangshu() {
  const filename = 'shangshu.json'
  const data = {
    title: shangshu.title,
    abstract: toArray(shangshu.abstract),
    content: shangshu.content.map(({ title, content }) => {
      return {
        title,
        content: content.map(({ chapter, paragraphs }) => {
          return {
            id: getId(filename, title, chapter),
            title: toSimple(chapter),
            traditional: {
              title: toTradition(chapter),
              paragraphs: toTradition(paragraphs),
            },
            simplified: {
              title: chapter,
              paragraphs,
            },
            translation: [],
          }
        }),
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformLiji() {
  const filename = 'liji.json'
  const data = {
    title: liji.title,
    abstract: toArray(liji.abstract),
    content: liji.content.map(({ chapter, paragraphs }) => {
      return {
        title: chapter,
        id: getId(filename, chapter),
        traditional: {
          title: toTradition(chapter),
          paragraphs: toTradition(paragraphs),
        },
        simplified: { title: chapter, paragraphs },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformZhouyi() {
  const filename = 'zhouyi.json'
  const data = {
    title: zhouyi.title,
    abstract: toArray(zhouyi.abstract),
    content: zhouyi.content.map(({ chapter, paragraphs }) => {
      return {
        id: getId(filename, chapter),
        title: chapter,
        traditional: {
          title: toTradition(chapter),
          paragraphs: toTradition(paragraphs),
        },
        simplified: { title: chapter, paragraphs },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformChunqiu() {
  const filename = 'chunqiu.json'
  const data = {
    title: chunqiu.title,
    abstract: toArray(chunqiu.abstract),
    content: chunqiu.content.map(({ chapter, paragraphs }) => {
      return {
        id: getId(filename, chapter),
        title: chapter,
        traditional: {
          title: toTradition(chapter),
          paragraphs: toTradition(paragraphs),
        },
        simplified: { title: chapter, paragraphs },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}
