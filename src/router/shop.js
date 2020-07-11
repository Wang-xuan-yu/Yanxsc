import Register  from  "@/views/login/register";
import Login  from  "@/views/login/login";

import Index from "@/views/Index";
import Home from "@/views/home/Home";
import Fei from "@/views/home/Fei";
import Shop from "@/views/home/Shop";
import Person from "@/views/home/Person";
// 定义一个变量
const shop = [
    //注册页面的路由
    {
        path: "/shop/register",
        name: "shop_register",
        component: Register,
        meta:{
            title:"严选商城-注册"
        }
    },
    //登陆页面的路由地址
    {
        path: "/shop/login",
        name: "shop_login",
        component:Login,

        meta:{
            title:"严选商城-登陆"
        }
    },

    //严选商城首页
    {
        path: "/",
        name: "Index",
        component: Index,
        redirect:"/home",
        children:[
            {
              path:"home",
              name:"Home",
              component:Home,
              meta:{
                title:"严选商城-首页"
              },
            },
            {
              path:"fei",
              name:"Fei",
              component:Fei
            },
            {
              path:"shop",
              name:"Shop",
              component:Shop
            },
            {
              path:"person",
              name:"Person",
              component:Person
            }
          ]
    }
];

//抛出shop对象
export default shop;