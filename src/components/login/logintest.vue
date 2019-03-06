<template>
    <div>
      <p>hello</p>
      <router-view></router-view>
      <!--这样是能看到东西的，但是这样写是会被骂的-->

      <thisheader></thisheader>
      <!--header撞车了-->
      <hr/>
      <!--hr是条水平线,真的是条线-->
      <div>
        username:<input type="text" v-model="logininfo.username"/>
        <br/>
        <!--br是换行符-->
        password:<input type="text" v-model="logininfo.password"/>
        <!--这里input没有/input 所以要记得写 />-->
        <br/>
        <button v-on:click="thislogin">loginir</button>
      </div>
    </div>
</template>

<script>
import thisheader from '@/components/header.vue'

    export default {
        name: "logintest",
      components:{thisheader},

      data(){
          return{
            logininfo:{username:'',password:''},
            responseResult:[]
          }
      },
      methods:{
          thislogin(){
            console.log("i am console");
            this.$ajax.post('/login',{
              //ajax!!!!!!!!
              //写axios不行的！！！不行！！！！

              //不要乱写！base已经是 api了
              //这个post好像和后台那边的mapping有关系
              username:this.logininfo.username,
              //这个的logininfo和后面的logininfo有关联
              password:this.logininfo.password
            }).then(successResponse=>{
              //responseresult是刚才建的data里的，
              // JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串
              this.responseResult=JSON.stringify(successResponse.data);
              //我们是得到一个successresponse，别管密码对不对吧
              //这个response里的data是真的有用的，所以要把它挑出来
              //而取决于代码，这个data里的code是评判标准
              if(successResponse.data.code===200){
                //code后台规定了的
              // ===：用来检测两个操作数是否严格相等
                console.log("right!!!");
                this.$router.push('/thenewindex')
                //push 和 replace 有区别
                //能从url上看到
                //但是就是没有页面
              }
            }).catch(failResponse=>{})
          }
      }

    }
</script>

<style scoped>

</style>
