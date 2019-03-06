<template>
    <div id="login">
      <form>
      <label for="username">用户名</label>
      <input type="text" v-model.trim="loginData.username" name="username">
      <label for="password">密码</label>
      <input type="text" v-model.trim="loginData.password" name="password">
      <input type="button" value="login" @click="doLogin">
        <!--这里规定了要用方法doLogin-->
      </form>
    </div>
</template>

<script>
  import utils from "@/components/utils/utils.js"

    export default {
        name: "login",
      data(){
          return{
            loginData:{
              username:"",
              password:""
            }
          }
      },
      methods:{
          doLogin(){
            let success=(response)=>{
              alart(response.data.msg);
            }
            //你看，这里就用来utils
            //要是非要用axios也行
            utils.axiosMethod({
              method:"POST",
              url:"/user/login/",
              data:this.loginData,
              callback:success
            })
          },


      }
    }
</script>

<style scoped>

</style>
