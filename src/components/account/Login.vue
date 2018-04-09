<template>
  <div class="login-box">
  	<div class="user-box">
  		<img class="logo_img" :src="i_logo_u" alt="">
    	<p>亲爱的微信用户，快乐微信男孩</p>
    	<p class="tip">为了给您更好的服务，请关联一个{{global_.appName}}账号</p>
  	</div>
    
    <!-- <div class="login-form">
      <div class="input_box">
        <img class="input_img" :src="i_user_u" alt="">
        <input v-model='userName' class="input" type="text" name="" placeholder="账号/手机号">
      </div>
      <div class="input_box">
        <img class="input_img" :src="i_password_u" alt="">
        <input v-model='userPs' class="input" type="password" name="" placeholder="" style='font-size: .5rem;font-weight: bold'>
      </div> -->
      <p class="tip">已有{{global_.appName}}账号？</p>
      <BigBtn @Click='Login' :btnName='btnName' :flag='flag' class='btn'></BigBtn>
      <p class="tip">还没有{{global_.appName}}账号？</p>
      <BigBtn @Click='Register' :btnName='btnName2' :flag='flag' class='btn'></BigBtn>
    </div>
     
  </div>
</template>

<script>
import crypto from 'crypto'
// import { Toast } from 'mint-ui';
import i_logo from './../../assets/login/logo@2x.png'
import i_user from './../../assets/login/zhanghao@2x.png'
import i_password from './../../assets/login/mima@2x.png'

import BigBtn from '../common/BigBtn'

import server from '../../server/myServer'

export default {
  name: 'Login',
  data () {
    return {
      i_logo_u: i_logo,
      i_user_u: i_user,
      i_password_u: i_password,
      flag: true,
      btnName: '立即关联',
      btnName2: '快速注册',
      userName: '',
      userPs: '',
    }
  },
  methods: {
    getmd5(pass){
        var md5String = ''
        var md5 = crypto.createHash("md5")
        md5.update(pass)
        var md5String = md5.digest('hex')
        return md5String
    },
    Login() {
      let _this= this
      if(!this.userName){
         _this.$msg('账号不能为空！')
      }else {
        if(!this.userPs){
          _this.$msg('密码不能为空')
        }else {
          this.flag = false
          let md5Ps = this.getmd5(this.userPs)
          let LoginData = {
            account: this.userName.replace(/(^\s+)|(\s+$)/g, ""),
            password: md5Ps
          }
          server()._login(LoginData).then(function(res){
            if(res.data.code === '0'){
              if(res.data.data.departmentName === "养殖管理部"){
                _this.$msg('登录成功！')
                localStorage.setItem('userInfo', JSON.stringify(res.data.data))
                setTimeout(function(){
                  _this.$router.push({ path: '/Main' })
                },1000)
              }else {
                _this.$msg('非养殖户不能登录')
                _this.flag = true
              }
            }else {
              _this.flag = true
              _this.$msg(res.data.message)
            } 
          })
        }
      }
    },
    Register() {
      this.$router.push('/Register')
    }
  },
  components: {
    BigBtn
  },
  created() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
  .login-box{
    background: #ffffff;
    height: 100%;
    .user-box{
    	padding-bottom: .2rem;
    	border-bottom: 1px solid #e3e3e3;
    }
    .logo_img{
      width: 1.8rem;
      margin-top: 2.16rem; 
      margin-bottom: .1rem; 
    }
    .login-form{
      .input::-ms-input-placeholder{text-align: center;font-size: .3rem;}
      .input::-webkit-input-placeholder{text-align: center;font-size: .3rem;}
      .btn {
        display: block;
        width: 5.8rem;
        height: .88rem;
        border-radius: .88rem;
        background-color: #ffffff;
        margin: 0 auto;
        margin-top: 0rem!important;
        font-size: .3rem;
        border: none;
        line-height: .88rem;
        color: #ffffff;
        outline: none;
      }
    }
    
  }
</style>
