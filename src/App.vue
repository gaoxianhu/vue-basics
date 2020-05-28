<template>
<div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- <Add :addComment="addComment"/> 通过props传递数据 -->
      <!-- <Add ref="add"/> 通过自定义事件从儿子拿数据 -->
      <Add @addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from '@/components/Add'
import List from '@/components/List'
export default {
  components:{
    Add,
    List
  },
  //自定义事件绑定事件的一种写法
  // mounted () {
  //     //this.$refs.add就是组件对象
  //     //this.$refs.add.$on本质上是Vue原型的方法
  //     //相当于在父组件当中给子组件绑定了一个事件（自己定义的事件）
  //     //特点：回调函数是在父组件当中的
  //     this.$refs.add.$on('addComment',this.addComment)
  // },
  data () {
    return {
      comments:[
        {id:1,username:'赵丽颖',content:'Vue真棒'},
        {id:2,username:'杨幂',content:'Vue真好'},
        {id:3,username:'渊哥',content:'Vue一定要好好学'}
      ]
    }
  },
  methods: {
    addComment(obj){
      this.comments.unshift(obj)
    },
    deleteComment(index){
      this.comments.splice(index,1)
    }
  }
}
</script>

<style scoped>


</style>