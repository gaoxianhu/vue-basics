<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo"></Header> -->
      <!-- <Header @addTodo="addTodo"></Header> 或-->
      <Header ref="add"></Header>
      <Main :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></Main>
      <!-- props版本 -->
      <!-- <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer> -->
      <!-- 全局事件总线版本 -->
      <Footer :todos="todos" :updateAll="updateAll"></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
  export default {
    components:{
      Header,
      Main,
      Footer
    },
    mounted () {
      this.$refs.add.$on('addTodo',this.addTodo)
      //this.$bus //是我们的全局事件总线对象
      //通过给这个事件总线对象绑定事件
      this.$bus.$on('deleteAll',this.deleteAll)
      //通过消息订阅处理
    },
    data () {
      return {
        todos:JSON.parse(localStorage.getItem('todos_key')) || []
      }
    },
    methods: {
      addTodo(obj){
        this.todos.unshift(obj)
      },
      updateOne(index,val){
        this.todos[index].isOver = val
      },
      deleteOne(index){
        this.todos.splice(index,1)
      },
      updateAll(val){
        this.todos.forEach(item => item.isOver = val)
      },
      deleteAll(){
        //把已经完成的也就是isOver为true的干掉
        //也可以认为是把isOver为false的留下
        //过滤出所有没有完成的，组成新数组，赋值给this.todos
        this.todos = this.todos.filter(item => !item.isOver)
      }
    },
    watch: {
      // todos(newVal,oldVal){
      //   //一般监视：只能监视todos本身，删除一项或者增加一项
      //   //不能监视内部更深层次的数据，不能监视到你是否操作了数组内部对象的数据
      //   //只要数据发生改变，那就保存新的数据，保存到localStorage
      //   //如果存储数据的时候，默认会把数据调用对应的toString方法，转化之后才会存储
      //   //对象.toString会转化为'[object,Object]'
      //   //数组.toString会转化为'中括号去掉加引号'
      //   //函数.toString会转化为'函数本身加引号'
      //   //因此我们需要把数据转换为JSON串去存储，就不会说看不懂了
      //   // localStorage.setItem('todos_key',JSON.stringify(newVal))
      // }
      todos:{
        // 深度监视，不管本身变化还是内部数据变化，都会监视到
        deep:true,
        handler(newVal,oldVal){
          localStorage.setItem('todos_key',JSON.stringify(newVal))
        }
      }
    }
  }
</script>

<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>