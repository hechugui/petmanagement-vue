<template>
  <div id="appit">
    <button v-on:click="alert">alartit</button>
  </div>
</template>

<script>
    // export default {
    //     name: "test"
    // }
  new Vue({
    el:'#appit',
    data:{a:1},
    method:{
      alert:function () {
        alert(this.a);
      }
    }
  });

<style scoped>

</style>
