<template>
  <div class="login animated zoomInDown">
    <div class="logo-w">
      <a href="/">
        <img src="https://res-3.cloudinary.com/education-link/image/upload/v1/app/education-link-logo" style="width: 270px;"></a>
    </div>

    <h4 class="auth-header">注册</h4>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">用户名</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入您的用户名.">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入您的密码.">
      </div>
      <button type="button" class="btn btn-primary">立即注册</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>
