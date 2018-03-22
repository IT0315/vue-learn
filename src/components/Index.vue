<template>
  <div class="hello">
    <h3>welcome vue demo</h3>
    <input type="button" value="增加" @click="add">
    <input type="button" value="减少" @click="decrement">
    <input type="button" value="偶数才能增加" @click="clickOdd">
    <div>现在的数字为：{{count}},他现在是{{getOdd}}</div>
    <div>这是一个标题{{title}}</div>
    <div><button @click="routerChange">跳转</button></div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    computed:{
      ...mapGetters([
        'count',
        'getOdd',
        'title'
      ])

    },
    methods:{
      ...mapActions([
        'increment',
        'decrement',
        'clickOdd'
      ]),
      add(){
        this.increment(10)
      },
      routerChange(){
        this.$router.push({
          path: '/Parents',
          name:'Parents',
          params: {
            msg: this.msg,
          }
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
