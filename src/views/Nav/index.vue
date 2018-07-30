<template>
  <div class="desktop-menu menu-top-w menu-activated-on-hover">
    <div class="menu-top-i os-container">
      <div class="logo-w">
        <img style="width: 250px;" src="https://res.cloudinary.com/education-link/image/upload/v1512134288/app/education-link-logo.png"
             alt="EducationLink Logo">
      </div>
      <ul class="main-menu">
        <li v-for="(item, index) in menuList" :key="index">
          <a :href="item.url" :title="item.title">{{item.name}}</a>
        </li>
      </ul>
      <ul class="small-menu">
        <li class="separate">
          <router-link tag="a" to="/login" title="Login" target="_blank">登录</router-link>
        </li>
        <li>
          <router-link tag="a" to="/reg" class="highlight" title="Sign up now">
            免费注册
          </router-link>
        </li>
      </ul>
    </div>
    <div class="mobile-menu-w">
      <div class="mobile-menu-holder color-scheme-dark">
        <ul class="mobile-menu">
          <li v-for="(item, index) in menuList" :key="index">
            <a :href="item.url" :title="item.title">{{item.name}}</a>
          </li>
          <li>
            <router-link tag="a" to="/login" title="Login" target="_blank">登录</router-link>
          </li>
          <li>
            <router-link tag="a" to="/reg" class="highlight" title="Sign up now">
              免费注册
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mobile-menu-i">
        <div class="mobile-logo-w">
          <img style="width: 250px;" src="https://res.cloudinary.com/education-link/image/upload/v1512134288/app/education-link-logo.png"
               alt="EducationLink Logo">
        </div>
        <div class="mobile-menu-trigger" @click="toggleMenu">
          <i class="os-icon os-icon-hamburger-menu-1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
      menuList: [
        {
          name: '网站建设',
          title: '网站建设',
          url: '#sales'
        },
        {
          name: 'Ui设计',
          title: 'Ui设计',
          url: '#accounting'
        },
        {
          name: '管理系统',
          title: '管理系统',
          url: '#crm'
        },
        {
          name: '模板购买',
          title: '模板购买',
          url: '#'
        },
        {
          name: '需求定制',
          title: '需求定制',
          url: '#'
        }
      ]
    }
  },
  methods: {
    toggleMenu: function () {
      $(".mobile-menu-holder").slideToggle(400)
    }
  }
}
</script>

<style scoped>

</style>
