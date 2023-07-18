import { toArray } from '@pengzhanbo/utils'
import baijiaxing from '../../raw-data/baijiaxing.json'
import qianziwen from '../../raw-data/qianziwen.json'
import sanzijing from '../../raw-data/sanzijing.json'
import tangshi from '../../raw-data/tang-shi-300.json'
import { getId } from './persistentId'
import { toSimple, writeFile } from './utils'

export async function transformSanzijingBasic() {
  await transformSanzijing()
  await transformBaijiaxing()
  await transformQianziwen()

  await transformTangshi()
}

async function transformSanzijing() {
  const filename = 'sanzijing.json'
  const data = {
    title: sanzijing.title,
    abstract: toArray(sanzijing.abstract),
    content: sanzijing.content.map(({ chapter, paragraphs }) => {
      return {
        id: getId(filename, chapter),
        title: toSimple(chapter),
        traditional: {
          title: chapter,
          author: sanzijing.author,
          paragraphs,
        },
        simplified: {
          title: toSimple(chapter),
          author: toSimple(sanzijing.author),
          paragraphs: toSimple(paragraphs),
        },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}

async function transformBaijiaxing() {
  const filename = 'baijiaxing.json'
  const data = {
    title: baijiaxing.title,
    tags: baijiaxing.tags,
    author: baijiaxing.author,
    abstract: toArray(baijiaxing.abstract),
    traditional: {
      title: baijiaxing.title,
      author: baijiaxing.author,
      tags: baijiaxing.tags,
      paragraphs: baijiaxing.paragraphs,
    },
    simplified: {
      title: baijiaxing.title,
      author: baijiaxing.author,
      tags: baijiaxing.tags,
      paragraphs: toSimple(baijiaxing.paragraphs),
    },
    translation: [],
  }
  await writeFile(filename, data)
}

async function transformQianziwen() {
  const filename = 'qianziwen.json'
  const data = {
    title: qianziwen.title,
    author: qianziwen.author,
    abstract: toArray(qianziwen.abstract),
    tags: qianziwen.tags,
    traditional: {
      title: qianziwen.title,
      paragraphs: qianziwen.paragraphs,
    },
    simplified: {
      title: qianziwen.title,
      paragraphs: toSimple(qianziwen.paragraphs),
    },
    spells: qianziwen.spells,
    translation: [],
  }
  await writeFile(filename, data)
}

async function transformTangshi() {
  const filename = 'tang-shi-300.json'
  const data = {
    title: tangshi.title,
    abstract: toArray(tangshi.abstract),
    content: tangshi.content.map(({ title, author, tags, paragraphs }) => {
      return {
        id: getId(filename, title, author),
        title: toSimple(title),
        traditional: { title, author, tags, paragraphs },
        simplified: {
          title: toSimple(title),
          author: toSimple(author),
          paragraphs: toSimple(paragraphs),
          tags: toSimple(tags),
        },
        translation: [],
      }
    }),
  }
  await writeFile(filename, data)
}
