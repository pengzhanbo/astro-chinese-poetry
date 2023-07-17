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

export const books: Record<Books, Book> = {
  [Books.lunyu]: {
    id: Books.lunyu,
    title: lunYu.title,
    abstract: lunYu.abstract,
  },
  [Books.daxue]: {
    id: Books.daxue,
    title: daXue.chapter,
    abstract: daXue.abstract,
  },
  [Books.zhongyong]: {
    id: Books.zhongyong,
    title: zhongYong.chapter,
    abstract: zhongYong.abstract,
  },
  [Books.mengzi]: {
    id: Books.mengzi,
    title: mengZi.title,
    abstract: mengZi.abstract,
  },
  [Books.shijing]: {
    id: Books.shijing,
    title: shiJing.title,
    abstract: shiJing.abstract,
  },
  [Books.shangshu]: {
    id: Books.shangshu,
    title: shangShu.title,
    abstract: shangShu.abstract,
  },
  [Books.liji]: {
    id: Books.liji,
    title: liJi.title,
    abstract: liJi.abstract,
  },
  [Books.zhouyi]: {
    id: Books.zhouyi,
    title: zhouYi.title,
    abstract: zhouYi.abstract,
  },
  [Books.chunqiu]: {
    id: Books.chunqiu,
    title: chunQiu.title,
    abstract: chunQiu.abstract,
  },
  [Books.sanzijing]: {
    id: Books.sanzijing,
    title: sanZiJing.title,
    abstract: sanZiJing.abstract,
  },
  [Books.baijiaxing]: {
    id: Books.baijiaxing,
    title: baiJiaXing.title,
    abstract: baiJiaXing.abstract,
  },
  [Books.qianziwen]: {
    id: Books.qianziwen,
    title: qianJiaShi.title,
    abstract: qianJiaShi.abstract,
  },
  [Books.dizigui]: {
    id: Books.dizigui,
    title: diZiGui.title,
    abstract: diZiGui.abstract,
  },
  [Books.youxueqionglin]: {
    id: Books.youxueqionglin,
    title: youXueQiongLin.title,
    abstract: youXueQiongLin.abstract,
  },
  [Books.zhuzijiaxun]: {
    id: Books.zhuzijiaxun,
    title: zhuZiJiaXun.title,
    abstract: zhuZiJiaXun.abstract,
  },
  [Books.qianjiashi]: {
    id: Books.qianjiashi,
    title: qianJiaShi.title,
    abstract: qianJiaShi.abstract,
  },
  [Books.guwenguanzhi]: {
    id: Books.guwenguanzhi,
    title: guWenGuanZhi.title,
    abstract: guWenGuanZhi.abstract,
  },
  [Books.tangshi300]: {
    id: Books.tangshi300,
    title: tangShi300.title,
    abstract: tangShi300.abstract,
  },
  [Books.wenzimengqiu]: {
    id: Books.wenzimengqiu,
    title: wenZiMengQiu.title,
    abstract: wenZiMengQiu.abstract,
  },
  [Books.shenglvqimeng]: {
    id: Books.shenglvqimeng,
    title: shengLvQiMeng.title,
    abstract: shengLvQiMeng.abstract,
  },
  [Books.zengguangxianwen]: {
    id: Books.zengguangxianwen,
    title: zengGuangXianWen.title,
    abstract: zengGuangXianWen.abstract,
  },
  [Books.chuci]: {
    id: Books.chuci,
    title: chuCi.title,
    abstract: chuCi.abstract,
  },
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
}
