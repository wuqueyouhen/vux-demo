<template>
  <div>
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
  import { Badge, Group, Cell } from 'vux'

  export default {
    components: {
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

