import { toArray } from '@pengzhanbo/utils'
import dizigui from '../../raw-data/dizigui.json'
import guwenguanzhi from '../../raw-data/guwenguanzhi.json'
import qianjiashi from '../../raw-data/qianjiashi.json'
import shenglvqimeng from '../../raw-data/shenglvqimeng.json'
import wenzimengqiu from '../../raw-data/wenzimengqiu.json'
import youxueqionglin from '../../raw-data/youxueqionglin.json'
import zengguangxianwen from '../../raw-data/zengguangxianwen.json'
import zhuzijiaxun from '../../raw-data/zhuzijiaxun.json'
import { getId } from './persistentId'
import { toSimple, writeFile } from './utils'

export async function transformSanzijingExtension() {
  await transformDizigui()
  await transformYouxueqionglin()
  await transformZhuzijiaxun()
  await transformQianjiashi()
  await transformGuwenguanzhi()
  await transformShenglvqimeng()
  await transformWenzimengqiu()
  await transformZengguangxianwen()
}

async function transformDizigui() {
  const filename = 'dizigui.json'
  const data = {
    title: dizigui.title,
    abstract: toArray(dizigui.abstract),
    content: dizigui.content.map(({ chapter, paragraphs }) => {
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

async function transformYouxueqionglin() {
  const filename = 'youxueqionglin.json'
  const data = {
    title: youxueqionglin.title,
    abstract: toArray(youxueqionglin.abstract),
    content: youxueqionglin.content.map(({ title, content }) => {
      return {
        title: toSimple(title),
        content: content.map(({ chapter, paragraphs }) => {
          return {
            id: getId(filename, title, chapter),
            title: toSimple(chapter),
            traditional: { title: chapter, paragraphs },
            simplified: {
              title: toSimple(chapter),
              paragraphs: toSimple(paragraphs),
            },
            translation: [],
          }
        }),
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformZhuzijiaxun() {
  const filename = 'zhuzijiaxun.json'
  const data = {
    title: toSimple(zhuzijiaxun.title),
    author: zhuzijiaxun.author,
    abstract: toArray(zhuzijiaxun.abstract),
    traditional: {
      title: zhuzijiaxun.title,
      paragraphs: zhuzijiaxun.paragraphs,
    },
    simplified: {
      title: toSimple(zhuzijiaxun.title),
      paragraphs: toSimple(zhuzijiaxun.paragraphs),
    },
    translation: [],
  }
  await writeFile(filename, data)
}

async function transformQianjiashi() {
  const filename = 'qianjiashi.json'
  const data = {
    title: toSimple(qianjiashi.title),
    author: qianjiashi.author,
    abstract: toArray(qianjiashi.abstract),
    content: qianjiashi.content.map(({ type, content }) => {
      return {
        title: toSimple(type),
        content: content.map(({ chapter, author, paragraphs }) => {
          if (typeof paragraphs[0] === 'string') {
            return {
              id: getId(filename, type, chapter, author),
              title: toSimple(chapter),
              author: toSimple(author),
              traditional: {
                title: chapter,
                author,
                paragraphs,
              },
              simplified: {
                title: toSimple(chapter),
                author: toSimple(author),
                paragraphs: toSimple(paragraphs as string[]),
              },
              translation: [],
            }
          }
          return {
            title: toSimple(chapter),
            content: (
              paragraphs as { subchapter: string, paragraphs: string[] }[]
            ).map(({ subchapter, paragraphs }) => {
              return {
                id: getId(filename, type, chapter, subchapter, author),
                title: toSimple(subchapter),
                author: toSimple(author),
                traditional: {
                  title: subchapter,
                  author,
                  paragraphs,
                },
                simplified: {
                  title: toSimple(subchapter),
                  author: toSimple(author),
                  paragraphs: toSimple(paragraphs as string[]),
                },
                translation: [],
              }
            }),
          }
        }),
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformGuwenguanzhi() {
  const filename = 'guwenguanzhi.json'
  const data = {
    title: toSimple(guwenguanzhi.title),
    abstract: toArray(guwenguanzhi.abstract),
    content: guwenguanzhi.content.map(({ title, content }) => {
      return {
        title: toSimple(title),
        content: content.map(({ chapter, source, author, paragraphs }) => {
          return {
            id: getId(filename, title, source, chapter, author),
            title: toSimple(chapter),
            traditional: {
              title: chapter,
              source,
              author,
              paragraphs,
            },
            simplified: {
              title: toSimple(chapter),
              source: toSimple(source),
              author: toSimple(author),
              paragraphs: toSimple(paragraphs),
            },
            translation: [],
          }
        }),
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformShenglvqimeng() {
  const filename = 'shenglvqimeng.json'
  const data = {
    title: toSimple(shenglvqimeng.title),
    author: shenglvqimeng.author,
    abstract: toArray(shenglvqimeng.abstract),
    content: shenglvqimeng.content.map(({ title, content }) => {
      return {
        title: toSimple(title),
        content: content.map(({ chapter, paragraphs }) => {
          return {
            id: getId(filename, title, chapter),
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
    }),
  }
  await writeFile(filename, data)
}

async function transformWenzimengqiu() {
  const filename = 'wenzimengqiu.json'
  const data = {
    title: toSimple(wenzimengqiu.title),
    author: toSimple(wenzimengqiu.author),
    abstract: toSimple(toArray(wenzimengqiu.abstract)),
    content: wenzimengqiu.content.map(({ title, paragraphs }) => {
      return {
        id: getId(filename, title),
        title: toSimple(title),
        traditional: {
          title,
          paragraphs,
        },
        simplified: {
          title: toSimple(title),
          paragraphs: toSimple(paragraphs),
        },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformZengguangxianwen() {
  const filename = 'zengguangxianwen.json'
  const data = {
    title: toSimple(zengguangxianwen.title),
    author: zengguangxianwen.author,
    abstract: toArray(zengguangxianwen.abstract),
    content: zengguangxianwen.content.map(({ chapter, paragraphs }) => {
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
