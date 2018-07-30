<template>
    <div class="login animated zoomInUp">
          <div class="logo-w">
            <a href="/">
              <img src="https://res-3.cloudinary.com/education-link/image/upload/v1/app/education-link-logo" style="width: 270px;"></a>
          </div>

          <h4 class="auth-header">登陆</h4>

          <form @submit="validateBeforeSubmit">
            <div class="form-group">
              <label for="exampleInputName1">用户名</label>
              <input v-model="username" v-validate="{ required : true,alpha: true, min:3, max:18 }" data-vv-as="用户名" name="alpha" type="text" class="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="请输入您的用户名.">
              <span v-show="errors.has('alpha')">{{errors.first('alpha')}}</span>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">密码</label>
              <input v-model="password"  v-validate="{ required : true,alpha_num:true, min:6, max:32 }" data-vv-as="密码"  name="alpha_num" type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入您的密码.">
              <span v-show="errors.has('alpha_num')">{{errors.first('alpha_num')}}</span>
            </div>
            <button type="submit" class="btn btn-primary">登陆</button>
          </form>
    </div>
</template>

<script>
  import userServices from '../../services/userServices.js'
  export default {
  name: 'index',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    subLogin: function() {

    },
    validateBeforeSubmit(e) {
      let _this = this
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          let data = {
            username: this.username,
            password: this.password
          }
          // console.log(data)
          userServices.userLogin(data)
            .then(function(response) {
              const responseData = response.data
              console.log(responseData.userLogin.code)
              if(responseData.userLogin.code === 200) {
                if(responseData.userLogin.result.success){
                  console.log(responseData.userLogin.result.message)
                  _this.$router.push({
                    path: '/'
                  })
                }else{
                  console.log('失败')
                }
              }

            })
            .catch(function (err) {
              console.log(err)
            })
          e.preventDefault()
          return;
        }

        console.log('登陆失败')
      });
    }
  }
}
</script>

<style scoped>

</style>
