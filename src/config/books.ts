import { Books } from './site'
import baiJiaXing from '~/database/baijiaxing.json'
import chuCi from '~/database/chuci.json'
import chunQiu from '~/database/chunqiu.json'
import daXue from '~/database/daxue.json'
import diZiGui from '~/database/dizigui.json'
import guWenGuanZhi from '~/database/guwenguanzhi.json'
import liJi from '~/database/liji.json'
import lunYu from '~/database/lunyu.json'
import mengZi from '~/database/mengzi.json'
import qianJiaShi from '~/database/qianjiashi.json'
import qianZiWen from '~/database/qianziwen.json'
import sanZiJing from '~/database/sanzijing.json'
import shangShu from '~/database/shangshu.json'
import shengLvQiMeng from '~/database/shenglvqimeng.json'
import shiJing from '~/database/shijing.json'
import tangShi300 from '~/database/tang-shi-300.json'
import wenZiMengQiu from '~/database/wenzimengqiu.json'
import youXueQiongLin from '~/database/youxueqionglin.json'
import zengGuangXianWen from '~/database/zengguangxianwen.json'
import zhongYong from '~/database/zhongyong.json'
import zhouYi from '~/database/zhouyi.json'
import zhuZiJiaXun from '~/database/zhuzijiaxun.json'
import type { Book } from '~/types'

export const books = {} as Record<Books, Book>

addBook(Books.lunyu, lunYu)
addBook(Books.daxue, daXue)
addBook(Books.zhongyong, zhongYong)
addBook(Books.mengzi, mengZi)

addBook(Books.shijing, shiJing)
addBook(Books.shangshu, shangShu)
addBook(Books.liji, liJi)
addBook(Books.zhouyi, zhouYi)
addBook(Books.chunqiu, chunQiu)

addBook(Books.sanzijing, sanZiJing)
addBook(Books.baijiaxing, baiJiaXing)
addBook(Books.qianziwen, qianZiWen)

addBook(Books.dizigui, diZiGui)
addBook(Books.youxueqionglin, youXueQiongLin)
addBook(Books.zhuzijiaxun, zhuZiJiaXun)
addBook(Books.qianjiashi, qianJiaShi)
addBook(Books.guwenguanzhi, guWenGuanZhi)
addBook(Books.tangshi300, tangShi300)
addBook(Books.wenzimengqiu, wenZiMengQiu)
addBook(Books.shenglvqimeng, shengLvQiMeng)
addBook(Books.zengguangxianwen, zengGuangXianWen)

addBook(Books.chuci, chuCi)

function addBook(
  id: Books,
  { title, abstract }: { title: string; abstract: string[] },
) {
  books[id] = {
    id,
    title,
    abstract,
  } as Book
}

export {
  baiJiaXing,
  chuCi,
  chunQiu,
  diZiGui,
  guWenGuanZhi,
  liJi,
  lunYu,
  mengZi,
  qianJiaShi,
  shangShu,
  shengLvQiMeng,
  shiJing,
  tangShi300,
  wenZiMengQiu,
  youXueQiongLin,
  zengGuangXianWen,
  zhouYi,
  daXue,
  sanZiJing,
  zhuZiJiaXun,
  qianZiWen,
  zhongYong,
}
