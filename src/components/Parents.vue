<template>
  <div>
    {{info}}
    <v-childern @del-event="ondel" :category="category"></v-childern>
  </div>
</template>

<script>
  import Childern from './Childern'
  export default {
    name: "parents",
    components:{
      'v-childern':Childern
    },
    data() {
      return {
        info:'',
        category:'this is childern'
      }
    },
    created() {
      this.getParams()
    },
    methods:{
      getParams(){
        this.info = this.$route.params.msg
        console.log(this.$route.params)
      },
      ondel(){
        this.category = '子组件改变了'
      }
    }
  }
</script>

<style scoped>

</style>
