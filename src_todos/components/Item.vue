<template>
    <li @mouseenter="handlerItem(true)" @mouseleave="handlerItem(false)" :class="myClass">
        <label>
            <input type="checkbox" v-model="isCheck"/>
            <span>{{todo.content}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
    </li>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
            todo:Object,
            index:Number,
            updateOne:Function,
            deleteOne:Function
        },
        computed: {
            isCheck:{
                get(){
                    return this.todo.isOver
                },
                //自己点击打勾的状态，其实就是修改ischeck的值
                set(val){//val就是修改后checkbook新的值
                    this.updateOne(this.index,val)
                }
            }
        },
        data () {
            return {
                //设置数据控制删除按钮的出现和隐藏
                isShow:false,
                myClass:'leaveClass'
            }
        },
        methods: {
            handlerItem(flag){
                //移入移出修改isShow值，决定删除按钮是否显示
                // if (flag) {
                //     this.isShow = true
                //     this.myClass = 'enterClass'
                // }else{
                //     this.isShow = false
                //     this.myClass = 'leaveClass'
                // }
                flag?this.myClass = 'enterClass':this.myClass = 'leaveClass'
                this.isShow = !this.isShow
            },
            deleteT(){
                this.deleteOne(this.index)
            }
        }
    }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
.enterClass{
    background-color: #aaa;
}

.leaveClass{
    background-color: #fff;
}

</style>