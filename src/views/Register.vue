<template>
    <div class="gray-bg">
        <div class="middle-box text-center loginscreen   animated fadeInDown">
            <div>
                <div>
                    <img style="width: 300px;height: 250px;object-fit: cover;" src="../assets/logo-trans.png" alt=""
                        class="img-responsive">
                </div>
            </div>
        </div>
        <div class="text-center loginscreen animated fadeInDown" style="max-width: 600px;margin: 0 auto;">
            <div class="ibox">
                <div class="ibox-content">
                    <h2>注册文档之翼账号</h2>
                    <p>注册账号以管理文件</p>
                    <form id="form" action="" class="wizard-big">
                        <h1>账户</h1>
                        <fieldset style="margin-left: 15px;">
                            <h2>账户</h2>
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="form-group">
                                        <label>用户名 *</label>
                                        <input id="userName" name="userName" v-model="userName" type="text" class="form-control required">
                                    </div>
                                    <div class="form-group">
                                        <label>密码 *</label>
                                        <input id="password" name="password" type="password"
                                            class="form-control required">
                                    </div>
                                    <div class="form-group">
                                        <label>确认密码 *</label>
                                        <input id="confirm" name="confirm" type="password"
                                            class="form-control required">
                                    </div>
                                </div>
                                <div class="col-lg-5">
                                    <div class="text-center">
                                        <div style="margin-top: 20px">
                                            <i class="fa fa-sign-in" style="font-size: 180px;color: #e5e5e5 "></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <h1>个人信息</h1>
                        <fieldset style="margin-left: 15px;">
                            <h2>个人信息</h2>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>姓名 *</label>
                                        <input id="name" name="name" v-model="name" type="text" class="form-control required">
                                    </div>
                                    <div class="form-group">
                                        <label>电话号码 *</label>
                                        <input id="phone" name="phone" v-model="phone" type="text" class="form-control required">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label>电子邮件 *</label>
                                        <input id="email" name="email" v-model="email" type="text" class="form-control required email">
                                    </div>
                                    <!-- <div class="form-group">
                                        <label>Address *</label>
                                        <input id="address" name="address" type="text" class="form-control">
                                    </div> -->
                                </div>
                            </div>
                        </fieldset>
                        <h1>用户协议</h1>
                        <fieldset style="margin-top: 100px;margin-left: 10px;">
                            <h2>用户协议和隐私政策</h2>
                            <input id="acceptTerms" name="acceptTerms" type="checkbox" class="required"> <label
                                for="acceptTerms">我同意<a href="#">用户协议</a>和<a href="#">隐私政策</a></label>
                        </fieldset>
                        <h1>提交注册</h1>
                        <fieldset>
                            <div class="text-center" style="margin-top: 120px;margin-left: 30px;">
                                <h2>提交注册</h2>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
        <div class="text-center loginscreen animated fadeInDown" style="max-width: 500px;margin: 0 auto;">
            <p class="text-muted text-center"><small>已有帐号?</small></p>
            <div class="row">
                <div class="col-lg-6"><a class="col-lg-12 btn btn-sm btn-white btn-block" href="login">登录</a></div>
                <div class="col-lg-6"><a class="col-lg-12 btn btn-sm btn-white btn-block" href="/">返回首页</a></div>
            </div>
        </div>
    </div>
</template>


<style scoped>
@import '../assets/css/plugins/iCheck/custom.css';
@import '../assets/css/plugins/steps/jquery.steps.css';
</style>

<script>
import $ from 'jquery'
// import Pace from 'pace-js'
import "../assets/js/plugins/pace/pace.min.js"
import "../assets/js/plugins/metisMenu/jquery.metisMenu.js"
import "../assets/js/plugins/slimscroll/jquery.slimscroll.min.js"
import "../assets/js/inspinia.js"
import '../assets/js/plugins/steps/jquery.steps.min.js'
import "../assets/js/plugins/validate/jquery.validate.min.js"
import toastr from "../assets/js/plugins/toastr/toastr.min.js"
export default {
    data(){
        return {
            userName: '',
            name:'',
            phone:'',
            email:''
        }
    },
    mounted() {
        $(document).ready(function () {
            $("#wizard").steps();
            $("#form").steps({
                bodyTag: "fieldset",
                onStepChanging: function (event, currentIndex, newIndex) {
                    // Always allow going backward even if the current step contains invalid fields!
                    if (currentIndex > newIndex) {
                        return true;
                    }

                    // Forbid suppressing "Warning" step if the user is to young
                    if (newIndex === 3 && Number($("#age").val()) < 18) {
                        return false;
                    }

                    var form = $(this);

                    // Clean up if user went backward before
                    if (currentIndex < newIndex) {
                        // To remove error styles
                        $(".body:eq(" + newIndex + ") label.error", form).remove();
                        $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
                    }

                    // Disable validation on fields that are disabled or hidden.
                    form.validate().settings.ignore = ":disabled,:hidden";

                    // Start validation; Prevent going forward if false
                    return form.valid();
                },
                onStepChanged: function (event, currentIndex, priorIndex) {
                    // Suppress (skip) "Warning" step if the user is old enough.
                    if (currentIndex === 2 && Number($("#age").val()) >= 18) {
                        $(this).steps("next");
                    }

                    // Suppress (skip) "Warning" step if the user is old enough and wants to the previous step.
                    if (currentIndex === 2 && priorIndex === 3) {
                        $(this).steps("previous");
                    }
                },
                onFinishing: function (event, currentIndex) {
                    var form = $(this);

                    // Disable validation on fields that are disabled.
                    // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
                    form.validate().settings.ignore = ":disabled";

                    // Start validation; Prevent form submission if false
                    return form.valid();
                },
                onFinished: function (event, currentIndex) {
                    var form = $(this);

                    $.ajax({
                        // TODO 用户名冲突、跳转页面
                        // FIXME success指的是表单返回信息，不是response
                        type: "POST",
                        url: "/api/registerUser",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({
                            userName: form[0][1].value,
                            psw: form[0][2].value,
                            phone: form[0][6].value,
                            email: form[0][7].value,
                            groupId: 1,
                            isAdmin: 0
                        }),
                        success: function (response) {
                            if(response == '注册成功')
                            {
                                alert("注册成功"); // 或者其他成功提示方式
                                window.location.href = "/login"; // 跳转到成功页面
                            }
                            else
                            {
                                toastr.error("注册失败，用户名已存在"); // 提示用户注册失败
                            }
                        },
                        error: function (response) {
                            console.error(response);
                        }
                    });
                }
            }).validate({
                errorPlacement: function (error, element) {
                    element.before(error);
                },
                rules: {
                    confirm: {
                        equalTo: "#password"
                    }
                }
            });
        });
    }
}
</script>