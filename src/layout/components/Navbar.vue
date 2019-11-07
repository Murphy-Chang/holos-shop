<template>
  <div class="navbar">
    <div class="left-menu">
      <div class="logo">
        <a href="localhost:9988">
          <span>LOGO</span>
        </a>
      </div>
    </div>

    <!--主菜单-->
    <div class="middle-menu">
      <el-menu default-active="1" class="middle-menu" mode="horizontal">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">产品</template>
          <el-menu-item index="2-1">大类1</el-menu-item>
          <el-menu-item index="2-2">大类2</el-menu-item>
          <el-menu-item index="2-3">大类3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">大类4</template>
            <el-menu-item index="2-4-1">产品1</el-menu-item>
            <el-menu-item index="2-4-2">产品2</el-menu-item>
            <el-menu-item index="2-4-3">产品3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">消息中心</el-menu-item>
        <el-submenu index="4">
          <template slot="title">控制台</template>
          <el-menu-item index="4-1"><a href="">智慧工地平台</a></el-menu-item>
          <el-menu-item index="4-2"><a href="">劳务平台</a></el-menu-item>
          <el-menu-item index="4-3"><a href="">项目管理平台</a></el-menu-item>
          <el-menu-item index="4-4"><a href="">集团公司管理平台</a></el-menu-item>
        </el-submenu>
        <el-menu-item index="5" disabled>其他</el-menu-item>
        <el-menu-item index="6"><router-link to="/login">登录</router-link></el-menu-item>
      </el-menu>
    </div>

    <div class="right-menu">
      <template>
        <!--全屏-->
        <screenfull id="screenfull" class="right-menu-item hover-effect" />

      </template>

      <!--下拉菜单-->
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" class="user-avatar" />
          <i class="" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/profile/info">
            <el-dropdown-item>个人信息</el-dropdown-item>
          </router-link>
          <router-link to="/dashboard">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import Screenfull from '@/components/common/Screenfull'

export default {
  components: {
    Screenfull
  },
  data() {
    return {
      defaultAvatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .left-menu{
    float: left;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }
  }

  .middle-menu{
    float: left;
    height: 100%;
    line-height: 50px;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}

.logo{
  padding: 0 15px;
  font-weight: bold;
}

.el-meu{
  border: none;
}
</style>
