<template>
  <div style="background-color: #EBEBEB;min-height:800px">
    <div style="width:100%;background-color: #636363; overflow: hidden">
      <span class="demonstration" style="float:left;padding-top:10px;color:white;margin-left:1%"> 毛团团宠物领养管理系统 </span>
      <span class="demonstration" style="float:left;padding:5px;color:white;margin-left:2%;width:15%">
        <el-input
          placeholder="请输入"
          icon="search"
          v-model="searchCriteria"
          :on-icon-click="handleIconClick">
          <!--这个的意思是，当点了，就用下面写的那个handleIconClick方法-->
        </el-input>
      </span>
      <span class="demonstration"
            style="float:right;padding-top:10px;margin-right:1%" >
        <el-dropdown trigger="click">
          <!--这个的意思是触发dropdown的动作-->
          <span class="el-dropdown-link" style="color:white">user<i
            class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:800px" @select="handleSelect">
              <el-menu-item index="1"><i class="el-icon-message"></i>导1</el-menu-item>
              <el-menu-item index="1-2"><i class="el-icon-menu"></i>导2</el-menu-item>
              <el-menu-item index="1-3"><i class="el-icon-setting"></i>导3</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div>
            <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <!--这里加东西了！！！！-->
          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
          <!--这个router-view就是用来显示跳转的页面，
          也就是page1，page2和page3。
          我们给左侧的菜单栏添加了一个响应，
          在响应函数中作出了路由跳转的处理。
          this.$router.push('/Page1');
          这句话的意思就是将当前要跳转的页面push到router的数组中。
          这里使用push而不是直接给数组赋值的原因
          是希望用户点击浏览器中的后退和前进按钮时可以回到之前操作的页面。
          没什么重要的
          还有，push 是把这条路径推入了histroy栈中
          如果用replace就是替换，不保留上一项
          一些需要用户授权的页面这么做，是为了防止重复授权
          也无所谓，不是什么核心的东西
          -->

          <!---->

        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'myindex',
    //也没什么用，就是帮着好调用的
    data() {
      return {
        searchCriteria:'',
        breadcrumbItems: ['导11'],
      }
    },

    methods: {
      handleIconClick(ev) {
        console.log(ev);
        // 要求控制台输出，调试用的
        console.log("hello,pretty");
      },


      // 这里加东西了

      handleSelect(key,keyPath){
        switch (key) {
          case'1':
            this.$router.push({path:'/page1'})
            this.breadcrumbItems = ['导1']
            break;

          case'1-2':
            this.$router.push('/page2')
            this.breadcrumbItems = ['导2']
            break;


          case'1-3':
            this.$router.push('/page3')
            this.breadcrumbItems = ['导3']
            break;


        }//switch
      },//handleselect
    }//
  }//
</script>
