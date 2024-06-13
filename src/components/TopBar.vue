<template>
    <div class="row border-bottom">
        <nav class="navbar navbar-static-top  " role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <a style="height:30px" class="navbar-minimalize minimalize-styl-2 btn btn-primary "><i
                        style="margin-top:4px" class="fa fa-bars"></i> </a>
                <form role="search" class="navbar-form-custom" action="search_results.html">
                    <div class="form-group">
                        <input type="text" placeholder="输入要查找的文件......" class="form-control" name="top-search"
                            id="top-search">
                    </div>
                </form>
            </div>
            <ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message">欢迎来到文档之翼</span>
                </li>
                <li>
                    <a href="logoutServlet">
                        <i class="fa fa-sign-out"></i>登出
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TopBar'
}
</script>

<style scoped></style>