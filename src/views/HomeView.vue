<template>
  <div class="bkg">
  </div>
  <div id="ctx">
    <div class="loginColumns animated fadeInDown">
      <div>
        <img style="width: 300px;height: 250px;object-fit: cover;" src="../assets/logo-trans.png" alt=""
          class="img-responsive">
      </div>
      <div class="row">
        <div class="col-md-6">
          <h2 class="font-bold">文档之翼</h2>
          <h3 class="font-bold">企业级文件管理系统</h3>
          <p>
            文档之翼（Document Wings）是一款面向企业的高效文件管理系统，专为现代企业的文档处理需求量身定制。
          </p>
          <p>
            它通过先进的技术和直观的用户界面，为企业提供了全面的文档管理解决方案，提升文件处理的效率和安全性。
          </p>
          <p>
            选择文档之翼，让企业文档管理更加智能、高效和安全。
          </p>
          <p>
            <small>高效便捷 灵活定制 安全可靠 专业支持</small>
          </p>
        </div>
        <div class="col-md-6">
          <div class="ibox-content" style="border-radius: 10px;">
            <br>
            <a href="login" class="btn btn-primary block full-width m-b">登录系统</a>
            <a href="register" class="btn btn-success block full-width m-b">注册账号</a>
            <a href="#" class="btn btn-info block full-width m-b">联系我们</a>
            <p class="m-t">
              <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div class="row ">
        <div class="col-md-6">
          DocWings
        </div>
        <div class="col-md-6 text-right">
          <small>© 2024</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {}
}
</script>

<style scoped>
.bkg {
  /*渐变的背景色*/
  /* height: 100vh;
  background-image: linear-gradient(to bottom right, #FC466B, #3F5EF8);
  overflow: hidden; */
  /*背景图*/
  background: url("../assets/background.png");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: cover;
}
 
#ctx {
  /*设置透明度，0为完全透明，1为不透明*/
  opacity: 0.95;
}
</style>