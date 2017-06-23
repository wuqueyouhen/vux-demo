<template>
  <div>
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">数字化工厂</x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>关于</h1>
    </div>

    <group>
      <cell title="当前用户：">
      {{ this.$store.state.userName }}
    </cell>
      <cell title="当前角色：">
        {{ this.$store.state.userRole }}
      </cell>
    </group>

    <box gap="20px 20px">

      <x-button type="primary"  link="/" >退出登录</x-button>

    </box>


  </div>

</template>

<script>

  import { XHeader,Group,Cell ,Box,XButton} from 'vux'

  export default {
    components: {
      Group,
      Cell,
      XHeader,
      Box,
      XButton
    },

    data () {
      return {
        workorder: [
          { "id": "1", "productname": "保温杯#01", "processname": "杯盖#01", "rate": "51", "state": "生产中", "goodproduct": "490", "flawproduct": "23", "badproduct": "11" },
          { "id": "2", "productname": "保温杯#01", "processname": "杯身#01", "rate": "63", "state": "生产中", "goodproduct": "240", "flawproduct": "33", "badproduct": "13" },
          { "id": "3", "productname": "保温杯#01", "processname": "密封圈#01", "rate": "98", "state": "生产中", "goodproduct": "420", "flawproduct": "31", "badproduct": "12" },
          { "id": "4", "productname": "保温杯#02", "processname": "杯盖#01", "rate": "33", "state": "生产中", "goodproduct": "610", "flawproduct": "42", "badproduct": "5" }
        ]
      }
    },
    created(){


    }
  }
</script>

<style>
</style>
