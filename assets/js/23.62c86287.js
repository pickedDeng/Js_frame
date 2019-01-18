(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(t,n,e){"use strict";e.r(n);var o=e(0),s=Object(o.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("ul",[e("li",[e("p",[t._v("资料参考网址")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex中文官网"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex项目结构示例 -- 购物车"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"http://www.jianshu.com/p/caff7b8ab2cf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex 通俗版教程"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zh.nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nuxt.js -- vuex的服务器端渲染"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._m(1),t._v(" "),e("ul",[e("li",[t._v("Vuex 是一个类似 Redux 的状态管理器，专为 Vue.js 应用程序开发，采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化，并集成到了Vue的官方调试工具 "),e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools",target:"_blank",rel:"noopener noreferrer"}},[t._v("devtools extension"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("Vuex的使用情况： 当开发大型单页面应用（SPA）时,会出现多个视图组件依赖同一个状态，来自不同视图的行为需要变更同一个状态。")])])]),t._v(" "),t._m(2),t._v(" "),e("li",[e("p",[t._v("Vuex.Store 组件绑定的辅助函数\n- mapState(namespace?: string, map: Array"),e("string",[t._v(" | Object), 第一个参数可选。当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。使用 "),e("code",[t._v("mapState")]),t._v(" 辅助函数可以帮助我们批量生成计算属性。")])],1),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"vuex-的学习记录"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuex-的学习记录","aria-hidden":"true"}},[this._v("#")]),this._v(" Vuex 的学习记录")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Vuex的简介"),n("br")])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("基础使用及API说明")]),this._v(" "),n("ul",[n("li",[n("p",[this._v("常用api及基础写法")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("// func 指代 Function，函数\nconst store = new Vuex.Store(\n\t{\n\t    state: {} | func,   // 根state对象，初始数据或状态赋值\n\t    mutations: {},      // 纯函数修改数据的方法，处理函数总是接受 state 作为第一个，payload 作为第二个参数(可选)\n\t    actions: {},        // 事件，动作， 处理函数总是接受 context 作为第一个参数，payload 作为第二个参数（可选）。\n\t    getters: {},        // store 的计算属性，返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生改变才会被重新计算\n\t    modules: {},        // 包含子模块的对象，会被合并到 store\n\t    plugins: [],        // 包含应用在store上的插件方法，这些插件接受store作为唯一参数，可以监听 mutation(用于外部地数据持久化、记录或调试)或者提交 mutation(用于内部数据，例如 websocket 或 某些观察者)\n\t    strict: Boolean,    // 默认值：false, 使Vuex store进入严格模式，任何 mutation 处理函数以外修改 Vuex state 都会抛出错误。\n\t}\n);\n")])])])])]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("- 最简单的 Vuex 示例 \n\n\t```\n\timport Vue from 'vue';\n\timport Vuex from 'vuex';\n\tVue.use(Vuex);\n\t\n\tconst store = new Vuex.Store({\n\t    state: {\n\t        count: 0\n\t    },\n\t    mutations: {\n\t        increment (state) {\n\t            state.count++\n\t        }\n\t    }\n\t});\n\t\n\tstore.commit('increment');\n\tconsole.log(store.state.count)  // 1\n\t```\n\t\n\t注明：每一个Vuex应用就是一个store,在store中包含组件的共享状态 `state` 和改变状态的方法 `mutations`，且只能通过 `mutations` 改变store的 `state` 的状态，不能通过类似 `store.state.count = 5` 的方式直接更改(直接修改，状态不会被同步，组件也不会重新渲染)\n\n- 在Vue组件使用Vuex\n\t- 在<b>根组件</b>，将store 注入到每一个子组件中，在子组件就可以通过 `this.$store` 访问：\n\n\t```\n\t// 根组件\n\timport store from './store';\n\tnew Vue({\n\t  el: '#app',\n\t  router,\n\t  store,\n\t  render: h => h(App)\n\t})\n\t\n\t// Counter 组件\n\texport default {\n\t\t  name: 'counter',\n\t\t  computed: {\n\t\t  \t count () {\n        \t   return this.$store.state.count\n   \t\t\t}\n    \t  }\n\t\t}\n\t```\n\t- <b>Getters</b>: Vuex 中`getters` 对象，接受state作为第一个参数，可以方便我们在 store 对 state 进行处理计算。Getter也可以接受其他 <b>getters</b> 作为第二参数\n\t\n\t```\n\tconst store = new Vuex.Store({\n\t\t  state: {\n\t\t    todos: [\n\t\t      { id: 1, text: '...', done: true },\n\t\t      { id: 2, text: '...', done: false }\n\t\t    ]\n\t\t  },\n\t\t  getters: {\n\t\t    doneTodos: state => {\n\t\t      return state.todos.filter(todo => todo.done)\n\t\t    }\n\t\t  }\n\t\t})\n\t// 在Vue中通过 store.getters对象调用\n\tcomputed: {\n\t  doneTodos () {\n\t    return this.$store.getters.doneTodos\n\t  }\n\t}\n\t// Getter也可以接受其他getters作为第二个参数\n\tgetters: {\n\t  doneTodos: state => {\n\t      return state.todos.filter(todo => todo.done)\n\t  },\n\t  doneTodosCount: (state, getters) => {\n\t    return getters.doneTodos.length\n\t  }\n\t}\n\t```\n\t- <b>Mutations</b>: 每一个mutation都有一个事件类型type和一个回调函数handler，`Mutations`必须是同步函数，若需要异步操作，就需要 `Actions`了。\n\t\n\t```\n\tconst store = new Vuex.Store({\n\t  state: {\n\t    count: 1\n\t  },\n\t  mutations: {\n\t    increment (state) {\n\t      state.count++;   // 变更state状态\n\t    }\n\t  }\n\t})\n\t// 调用mutation，需要通过store.commit方法调用mutation type\n\tstore.commit('increment');\n\t// 可以向store.commit传入第二参数，也就是mutation的payload(多数情况传对象)\n\tmutaion: {\n\t    increment (state, n) {\n\t        state.count += n;\n\t    },\n\t    outcrement (state, payload) {\n\t        state.totalPrice += payload.price + payload.count;\n\t    }\n\t}\n\t\n\tstore.commit('increment', 10);\n\tstore.commit('outcrement', {\n\t    price: 10,\n\t    count: 8\n\t});\n\t```\n")])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("pre",[n("code",[this._v("  ```\n  // 在单独构建的版本中辅助函数为 Vuex.mapState\n  import { mapState } from 'vuex'\n  \n  export default {\n    computed: mapState({\n      // 箭头函数可使代码更简练\n      count: state => state.count,  // 不使用mapState辅助函数的写法\n  \n      // 传字符串参数 'count' 等同于 `state => state.count`\n      countAlias: 'count',          // 写法一，使用别名方式\n  \n      // 为了能够使用 `this` 获取局部状态，必须使用常规函数\n      countPlusLocalState (state) {\n        return state.count + this.localCount  // 写法二，常规函数方式\n      }\n      \n      // \n    })\n  }\n  \n  // 当映射的计算属性的名称与state的子节点名称相同时，可用字符串数组的写法\n  export default { \n  \tcomputed: mapState(['count'])  // 映射 this.count 为 store.state.count\n  }\n  \n  // 使用 ES6 的 对象展开运算符 的写法去简化\n  export default { \n  \tcomputed: { ...mapState(['count','total']) }\t} \n  ```\n  - mapGetters(namespace?: string, map: Array<string> | Object) : 将 store 中的 getter 映射到局部计算属性。\n  \n  ```\n  import { mapGetters } from 'vuex'\n  export default {\n  \tcomputed: {\n      // 使用对象展开运算符将 getter 混入 computed 对象中\n      ...mapGetters([\n        'doneTodosCount',\n        'anotherGetter'\n      ])\n    }\n  }\n  // 想将getter属性另取一个名字，需使用对象形式\n  export default {\n  \tcomputed: {\n      mapGetters({\n  \t    doneCount: 'doneTodosCount' // 映射 `this.doneCount` 为`store.getters.doneTodosCount`\n  \t})\n    }\n  }\n  ```\n  - mapActions(namespace?: string, map: Array<string> | Object): 将组件的 methods 映射为 store.dispatch 调用\n  \n  ```\n  import { mapActions } from 'vuex'\n\n  export default {\n    methods: {\n      ...mapActions([\n        'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`\n  \n        // `mapActions` 也支持载荷：\n        'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`\n      ]),\n      \n      ...mapActions({\n        add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`\n      })\n    }\n  }\n  ```\n  - mapMutations(namespace?: string, map: Array<string> | Object): 将组件中的 methods 映射为 store.commit 调用\n  \n  ```\n  import { mapMutations } from 'vuex'\n  export default {\n  \tmethods: {\n  \t\t...mapMutions([\n  \t\t\t'increment',  // 将`this.increment()` 映射为 'this.$store.commit('increment')'\n  \t\t\t\n  \t\t\t// `mapMutations` 也支持载荷：\n  \t\t\t'incrementBy'  // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`\n  \t\t]),\n  \t\t...mapMutations({\n  \t\t\tadd: 'increment',  // 将 `this.add()`映射为`this.$store.commit('increment')`\n  \t\t})\n  \t}\n  }\n  ```\n  - createNamespacedHelpers(namespace: string): 建基于某个命名空间辅助函数\n  \n  ```\n  \timport { createNamespacedHelpers } from 'vuex'\n  \tconst { mapState, mapActions } = createNamespacedHelpers('some/nested/module')\n  \t\n  \texport default {\n  \t  computed: {\n  \t    // 在 `some/nested/module` 中查找\n  \t    ...mapState({\n  \t      a: state => state.a,\n  \t      b: state => state.b\n  \t    })\n  \t  },\n  \t  methods: {\n  \t    // 在 `some/nested/module` 中查找\n  \t    ...mapActions([\n  \t      'foo',\n  \t      'bar'\n  \t    ])\n  \t  }\n  \t}\n  ```\n")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("li",[n("p",[this._v("Vuex.Store 的实例属性\n- store.commit( '', { } ) : 提交 mutation\n- store.dispatch( '', { } ) : 分发 actions\n- store.replaceState(newstate): 替换 store 的根状态，仅用状态合并或时光调试。\n- store.watch( getter, cb ) : 响应式地监测一个 getter 方法的返回值，当值改变时调用回调函数。\n- store.subscribe(Function): 注册监听 store 的 mutations , Function 会在每个 mutations 完成后调用，接受 mutation 和 经过 mutation 后的状态作为参数：")]),this._v(" "),n("pre",[n("code",[this._v("  \t```\n  \tstore.subscribe((mutation, state) => {\n  \t\t  console.log(mutation.type)\n  \t\t  console.log(mutation.payload)\n  \t\t})\n  \t```\n  - store.subscribeAction(handler: Function): 订阅 store 的action, handler 会在分发的时候调用并接收 action 描述和当前的 store 的 state两个参数。\n  \n  \t```\n  \tstore.subscribeAction((action, state) => {\n  \t\t  console.log(action.type)\n  \t\t  console.log(action.payload)\n  \t\t})\n  \t```\n")])])])}],!1,null,null,null);s.options.__file="vuex.md";n.default=s.exports}}]);