import type { NavOptions } from '~/types'

export const navConfig: NavOptions = [
  { text: '首页', link: '/' },
  {
    text: '蒙学',
    items: [
      {
        text: '基础读物',
        items: [
          {
            text: '三字经',
            link: '/san-zi-jing',
            activeMatch: '^/san-zi-jing',
          },
          { text: '百家姓', link: '/bai-jia-xing' },
          { text: '千字文', link: '/qian-zi-wen' },
        ],
      },
      {
        text: '扩展读物',
        items: [
          { text: '弟子规', link: '/di-zi-gui', activeMatch: '^/di-zi-gui' },
          {
            text: '幼学琼林',
            link: '/you-xue-qiong-lin',
            activeMatch: '^/you-xue-qiong-lin',
          },
          { text: '朱子家训', link: '/zhu-zi-jia-xun' },
          {
            text: '千家诗',
            link: '/qian-jia-shi',
            activeMatch: '^/qian-jia-shi',
          },
          {
            text: '古文观止',
            link: '/gu-wen-guan-zhi',
            activeMatch: '^/gu-wen-guan-zhi',
          },
          {
            text: '声律启蒙',
            link: '/sheng-lv-qi-meng',
            activeMatch: '^/sheng-lv-qi-meng',
          },
          {
            text: '文字蒙求',
            link: '/wen-zi-meng-qiu',
            activeMatch: '^/wen-zi-meng-qiu',
          },
          {
            text: '增广贤文',
            link: '/zeng-guang-xian-wen',
            activeMatch: '^/zeng-guang-xian-wen',
          },
          {
            text: '唐诗300首',
            link: '/tang-shi-300',
            activeMatch: '^/tang-shi-300',
          },
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
          { text: '论语', link: '/lun-yu', activeMatch: '^/lun-yu' },
          { text: '大学', link: '/da-xue' },
          { text: '中庸', link: '/zhong-yong' },
          { text: '孟子', link: '/meng-zi', activeMatch: '^/meng-zi' },
        ],
      },
      {
        text: '五经',
        items: [
          { text: '诗经', link: '/shi-jing', activeMatch: '^/shi-jing' },
          { text: '尚书', link: '/shang-shu', activeMatch: '^/shang-shu' },
          { text: '礼记', link: '/li-ji', activeMatch: '^/li-ji' },
          { text: '周易', link: '/zhou-yi', activeMatch: '^/zhou-yi' },
          { text: '春秋', link: '/chun-qiu', activeMatch: '^/chun-qiu' },
        ],
      },
    ],
  },
  {
    text: '更多',
    activeMatch: '^/(chu-ci)',
    items: [{ text: '楚辞', link: '/chu-ci', activeMatch: '^/chu-ci' }],
  },
]
