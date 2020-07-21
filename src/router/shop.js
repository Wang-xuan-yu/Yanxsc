import Register from "@/views/login/register";
import Login from "@/views/login/login";

import Index from "@/views/Index";
import Home from "@/views/home/Home";
import Fei from "@/views/home/Fei";
import Shop from "@/views/home/Shop";
import Person from "@/views/home/Person";

import Kanj from '@/components/details/Kanj'
import Tuij from '@/components/details/Tuij'
import Fenlxq from '@/components/details/Fenlxq'
import Search from '@/components/details/search'

import Special from "@/views/article/special";
import articleDetail from "@/views/article/detail";

import GoodsInfo from '@/components/details/goodsInfo'
import bargan from "@/components/details/bargan";//商品砍价页面
import cutInfo from "@/components/details/cutInfo";//砍价详情页面

import orderConfirm from "@/views/order/orderConfirm";
import orderPay from "@/views/order/orderPay";

import MineOrder from "@/views/mine/order"

// 定义一个变量
const shop = [
  //注册页面的路由
  {
    path: "/shop/register",
    name: "shop_register",
    component: Register,
    meta: {
      title: "严选商城-注册"
    }
  },
  //登陆页面的路由地址
  {
    path: "/shop/login",
    name: "shop_login",
    component: Login,

    meta: {
      title: "严选商城-登陆"
    }
  },

  //严选商城首页
  {
    path: "/",
    name: "Index",
    component: Index,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "严选商城-首页"
        }
      },
      {
        path: "fei",
        name: "Fei",
        component: Fei,
        meta: {
          title: "严选商城-分类"
        }
      },
      {
        path: "shop",
        name: "Shop",
        component: Shop,
        meta: {
          title: "严选商城-购物车"
        }
      },
      {
        path: "person",
        name: "Person",
        component: Person,
        meta: {
          title: "严选商城-我的"
        }
      }
    ]
  },
  {
    path: "/Kanj",
    name: "Kanj",
    component: Kanj,
    meta: {
      title: "严选商城-砍价"
    }
  },
  {
    path: "/Tuij",
    name: "Tuij",
    component: Tuij,
    meta: {
      title: "严选商城-人气推荐"
    }
  },
  {
    path: "/Fenlxq/:id",
    name: "Fenlxq",
    component: Fenlxq,
    meta: {
      title: "严选商城-分类详情"
    }
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      title: "严选商城-搜索"
    }
  },
  {
    path: "/special",
    name: "Special",
    component: Special,
    meta: {
      title: "严选商城-严选专栏"
    }
  },
  {
    path: "/detail/:id",
    name: "article",
    component: articleDetail,
    meta: {
      title: "严选商城-文章详情"
    }
  },
  {
    path: "/goodsInfo/:id",
    name: "GoodsInfo",
    component: GoodsInfo,
    meta: {
      title: "严选商城-商品详情页面"
    }
  },
  {
    path: "/bargan/:id",
    name: "bargan",
    component: bargan,
    meta: {
      title: "严选商城-商品砍价页面"
    }
  },
  {
    path: "/cutinfo",
    name: "cutinfo",
    component: cutInfo,
    meta: {
      title: "严选商城-砍价详情页面"
    }
  },
  {
    path: "/order/confirm",
    name: "order_confirm",
    component: orderConfirm,
    meta: {
      title: "严选商城-订单确认"
    }
  },
  {
    path: "/order/pay",
    name: "order_pay",
    component: orderPay,
    meta: {
      title: "严选商城-确认付款"
    }
  },
  {
    path: "/mine/order",
    name: "order_mine",
    component: MineOrder,
    meta: {
      title: "严选商城-我的订单"
    }
  }
];

//抛出shop对象
export default shop;