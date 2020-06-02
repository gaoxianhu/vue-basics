<template>
    <div role="tabpanel" class="tab-panel" id="News">
        <ul class="list-group">
            <li class="list-group-item" v-for="n in news" :key="n.id">
                {{n.content}}
                <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false"
                    autocomplete="off"
                    @click="handlerJump(n)">
                    {{n.id}}
                </button>
            </li>
        </ul>
        <button @click="$router.back()">返回</button>
        <div class="alert alert-success" role="alert">
            <!-- 编程式导航不用写router-link  但是router-view得有 要不然没法显示 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data () {
            return {
                news:[
                    {id:1,content:'newOne'},
                    {id:2,content:'newTwo'},
                    {id:3,content:'newThree'},
                ]
            }
        },
        methods: {
            //编程式导航
            //手动自己写代码处理路径跳转，不能使用router-link 就叫做编程式导航
            //push方法会保存历史记录
            //replace方法不会保存历史记录
            handlerJump(n){
                // this.$router.push('/home/news/info'+ n.id + '?newsContent=' + n.content)//路由路径path
                // this.$router.push({name:'newsInfo',params:{newsId:n.id},query:{newsContent:n.content}})//路由路径path
                this.$router.replace({name:'newsInfo',params:{newsId:n.id},query:{newsContent:n.content}})//路由路径path
            }
        }
    }
</script>

<style scoped>


</style>