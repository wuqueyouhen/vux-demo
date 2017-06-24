<template>
  <div>
    <x-header :left-options="{showBack: false}">数字化工厂</x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h2>金佳园股份</h2>
    </div>

    <br/>
    <group title="用户登录">
      <x-input title="账号" id="username" placeholder="请输入账号" v-model="username"></x-input>

      <x-input type="password" id="password" title="密码" placeholder="请输入密码" v-model="password"></x-input>
    </group>
    <group title="登录设置">
      <x-switch title='自动登录'></x-switch>

      <popup-radio title="角色" :options="roles" v-model="role">

      </popup-radio>

    </group>
    <br/>
    <box gap="20px 20px">

      <x-button type="primary" @click.native="login">登录</x-button>

    </box>
  </div>
</template>

<script>
  import {XHeader, XInput, Group, XButton, XSwitch, PopupRadio, Box} from 'vux'

  export default {

    components: {
      XHeader,
      XInput,
      XButton,
      XSwitch,
      Group,
      PopupRadio,
      Box
    },
    data () {
      return {
        username: '演示账号',
        password: '',
        role: '班组长',
        roles: [
          '车间主任',
          '班组长',
          '工人'
        ]
      }
    },
    methods: {
      login: function () {
        // alert(this.username+this.password);
        // alert(this.role);
        if (this.role === '班组长') {
          this.$store.commit('UPDATE_USERNAME', this.username)
          this.$store.commit('UPDATE_USERROLE', '班组长')
          // this.$router.push({path:'/index'})
          this.$router.push('/lv/')
        } else if (this.role === '车间主任') {
          this.$store.commit('UPDATE_USERNAME', this.username)
          this.$store.commit('UPDATE_USERROLE', '车间主任')
          this.$router.push('/mv/')
        } else if (this.role === '工人') {
          this.$store.commit('UPDATE_USERNAME', this.username)
          this.$store.commit('UPDATE_USERROLE', '工人')
          this.$router.push('/wv/')
        } else {

        }
      },
      change (val) {
        console.log(val)
      },
      onBlur (val) {
        console.log('on blur', val)
      },
      onFocus (val) {
        console.log('on focus', val)
      },
      onEnter (val) {
        console.log('click enter!', val)
      }
    }
  }
</script>

<style>
</style>
