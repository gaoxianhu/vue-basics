<template>
<div>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
  <button @click="incrementIfOdd">{{count}}</button>
  <button @click="incrementAsync">{{count}}</button>

  <p>4倍的count {{currentCount}}</p>
</div>
</template>

<script type="text/ecmascript-6">
import {mapActions,mapGetters,mapMutations,mapState} from 'vuex'
export default {
  // data () {
  //   return {
  //     count:0
  //   }
  // },
  // methods: {
  //   increment(){
  //     //这里本来就是让数据增加的，没必要分发给actions然后再通过mutations，可以直接提交给mutations去处理数据
  //     this.$store.commit('increment')
  //   },
  //   decrement(){
  //     this.$store.commit('decrement')
  //   },
  //   incrementIfOdd(){
  //     this.$store.dispatch('incrementIfOdd')
  //   },
  //   incrementAsync(){
  //     this.$store.dispatch('incrementAsync')
  //   }
  // },
  methods: {
    // increment(){
    //   //这里本来就是让数据增加的，没必要分发给actions然后再通过mutations，可以直接提交给mutations去处理数据
    //   this.$store.commit('increment')
    // },
    // decrement(){
    //   this.$store.commit('decrement')
    // },
    ...mapMutations(['increment','decrement']),
    //会返回一个对象
    //相当于是上面的简写方式，它会把increment映射到对应的mutations方法

    // incrementIfOdd(){
    //   this.$store.dispatch('incrementIfOdd')
    // },
    // incrementAsync(){
    //   this.$store.dispatch('incrementAsync')
    // }
    ...mapActions(['incrementAsync']),
    ...mapActions({'incrementIfOdd':'IncrementIfOdd'})
    //如果名字一样可以写成数组形式，如果不一样只能一个一个单独去写，参数写成对象
    //相当于是上面的简写方式，它会把incrementIfOdd映射到actions方法
  },
  computed:{
    // count(){
    //   //如果没有经过运算的，那么我们可以在计算属性当中去直接拿state里面的数据
    //   // return this.$store.getters.currentCount
    //   return this.$store.state.count
    // },
    ...mapState(['count']),
    // currentCount(){
    //   //如果经过运算的数据，那么我们肯定是去getters里面去拿
    //   return this.$store.getters.currentCount
    // }
    ...mapGetters(['currentCount'])
  }
}
</script>

<style scoped>


</style>
