<template>
  <div>
    <div>{{category}}</div>
    <button @click="ondel">删除</button>
  </div>
</template>

<script>
  export default {
    name: "childern",
    props:['category'],
    data(){
      return{

      }

    },
    methods:{
      ondel(){
        alert(this.category)
        this.$emit('del-event');
      }
    }
  }
</script>

<style scoped>

</style>
