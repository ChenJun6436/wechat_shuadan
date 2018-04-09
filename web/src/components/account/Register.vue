<template>
  <div class="login-box">
    <div class="login-form">
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.name' class="input" type="text" name="" placeholder="用户名 （6-16位字母，数字或下划线）">
      </div>
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.pass' class="input" type="text" name="" placeholder="密码 （6-16位字母，数字或下划线中的两种）">
      </div>
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.pass2' class="input" type="text" name="" placeholder="确认密码 ">
      </div>
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.wang' class="input" type="text" name="" placeholder="旺旺号 ">
      </div>
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.qq' class="input" type="text" name="" placeholder="QQ号 ">
      </div>
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.wei' class="input" type="text" name="" placeholder="微信号 ">
      </div>
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.phone' class="input" type="text" name="" placeholder="手机号 ">
      </div>
      <div class="input_box">
        <span class="input_left">o(*</span>
        <input v-model='user.realName' class="input" type="text" name="" placeholder="真实姓名 ">
      </div>
      <div class="input_box">
        <mt-radio
		  v-model="user.sex"
		  :options="['男', '女']">
		</mt-radio>
      </div>
      <div class="input_box">
      	<span class="input_left">o(*</span>
        <input  v-model='user.birthday' @click='openPickerBirthDay' class="input" type="text" name="" placeholder="出生日期 ">
          <mt-datetime-picker
		    ref="picker"
		    type="date"
		    :startDate='startBirthday'
		    :endDate='endBirthday'
		    v-model="BirthDay">
		  </mt-datetime-picker>
      </div>
      <div class="input_box lastLI">
        <mt-radio
		  v-model="user.type"
		  :options="['师傅', '徒弟']">
		</mt-radio>
      </div>
      <div v-if='user.type == "徒弟"' class="lastLI">
      	  <div class="input_box">
	        <span class="input_left">o(*</span>
	        <input v-model='user.tuiDai' class="input" type="text" name="" placeholder="推荐人代号 （G开头加数字）">
	      </div>
	      <div class="input_box">
	        <span class="input_left">o(*</span>
	        <input v-model='user.tuiName' class="input" type="text" name="" placeholder="推荐人账号">
	      </div>
      </div>      
      <mt-button @click='Register' type="primary" size="large">注册</mt-button>
    </div>
    <!--<BigBtn @Click='Register' :btnName='btnName' style="width: 6.8rem;"></BigBtn>-->
  </div>
</template>

<script>
import BigBtn from '../common/BigBtn'
import Top from '../common/Top'
import i_yan from './../../assets/common/yanzhengma@2x.png'

export default {
  name: 'Register',
  data () {
    return {
      HRight:'',
      HTitle:'注册',
      btnName: '确定',
      user:{
      	name:'', //账号
      	pass:'', //密码
      	pass2:'',//确认密码
      	wang:'',//旺旺
      	qq:'',//qq
      	wei:'',//微信
      	phone:'',//电话
      	realName:'',//真实姓名
      	sex:'男',//性别
      	birthday:'',//生日
      	type:'徒弟',//类型
      	tuiDai:'',//推荐人代号
      	tuiName:''//推荐人账号
      },

      BirthDay: '',
      startBirthday: new Date('1948/01/01'),
      endBirthday: new Date(),

//        values: ['国家机关、事业单位', '专业技术人员', '商业、服务业人员','企业职员', '生产、运输设备操作人员'],
    }
  },
  methods: {
    Register() {
    	this.dataReg()
    	if(this.dataReg()){
  			console.log(this.dataReg())	
    	}
    },
    getCode() {

    },
    //打开生日
    openPickerBirthDay() {
		this.$refs.picker.open();
	},
	openWorkPicker() {
		this.$refs.workPicker.open();
	},
	//职业选择
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    dataReg() {
  		const userNameReg = ''
		if(this.user.name==''){
			this.$msg('账号不能为空','middle')
			return false
		}
		return true
  	},
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
    .login-form{
      .input_box{
        border-bottom: 1px solid #dcdcdc;
        width: 100%;
        margin-top: 0!important;
        border-radius: inherit;
      }
      .input_left{
      	width: .4rem;
      }
      .input_right{
        float: right;
        width: 2.2rem;
        height: .9rem;
        margin-top: -1px;
      }
      .input{
        width: 6rem;
        margin-left: .3rem!important;
      }
      .lastLI{
      	margin-bottom: .5rem;
      }
    }
    
  }
  
</style>
