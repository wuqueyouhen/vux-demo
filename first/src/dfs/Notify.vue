<template>
  <div>
    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">数字化工厂</x-header>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>消息</h1>
    </div>
    <group title="工作">
      <cell title="排班" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">新消息 &nbsp;</span>
          <badge></badge>
        </div>
      </cell>
      <cell title="质量" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">新消息 &nbsp;</span>
          <badge text="8"></badge>
        </div>
      </cell>
      <cell title="通知" is-link>
        <div class="badge-value" slot="value">
          <span class="vertical-middle">新消息 &nbsp;</span>
          <badge text="888"></badge>
        </div>
      </cell>
    </group>
  </div>
</template>


<script>
  import { XHeader, Badge, Group, Cell } from 'vux'

  export default {
    components: {
      XHeader,
      Badge,
      Group,
      Cell
    }
  }
</script>

<style lang="less">
  .badge-value {
    display: inline-block!important;
  }
  .vertical-middle {
    vertical-align: middle;
  }
</style>

