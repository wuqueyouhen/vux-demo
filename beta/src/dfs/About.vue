<template>
  <div>
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">
      数字化工厂
    </x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>关于</h1>
    </div>

    <!--<div>-->
    <!--<panel  :list="list" :type="type"></panel>-->
    <!--</div>-->

    <group>
      <cell title="当前用户：">
        {{ this.$store.state.userName }}
      </cell>
      <cell title="当前角色：">
        {{ this.$store.state.userRole }}
      </cell>
    </group>

    <box gap="20px 20px">

      <x-button type="primary" link="/">退出登录</x-button>

    </box>


  </div>

</template>

<script>

  import {XHeader, Group, Cell, Box, XButton, Panel} from 'vux'

  export default {
    components: {
      Panel,
      Group,
      Cell,
      XHeader,
      Box,
      XButton
    },

    data () {
      return {
        type: '1',
        list: [{
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
          url: '/component/cell'
        }]
      }
    },
    created () {

    }
  }
</script>

<style>
</style>
