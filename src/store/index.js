import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//定义一个对象
const store = new Vuex.Store({
    //数据池
    state:{
        count:100,
        isLoading:false, //控制正在加载
    },
    //操作state的内容
    mutations:{
        changeLoading(state,bool){
            state.isLoading=bool
        }
    },
    getters:{

    },
    actions:{

    },
    modules:{

    }
});

//导出对象
export default store;