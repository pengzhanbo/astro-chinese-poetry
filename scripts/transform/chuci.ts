import { toArray } from '@pengzhanbo/utils'
import data from '../../raw-data/chuci.json'
import { getId } from './persistentId'
import { toSimple, writeFile } from './utils'

export async function transformChuci() {
  const filename = 'chuci.json'
  data.abstract = toArray(data.abstract)
  data.content = data.content.map(({ title, section, content, author }) => {
    return {
      id: getId(filename, section, title),
      title,
      section,
      traditional: {
        title,
        section,
        author,
        paragraphs: content,
      },
      simplified: {
        title: toSimple(title),
        section: toSimple(title),
        author,
        paragraphs: toSimple(content),
      },
      translation: [],
    }
  }) as any
  await writeFile(filename, data)
}
