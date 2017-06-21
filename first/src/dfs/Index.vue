<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1>今日总览</h1>
    </div>


    <card :header="{title:'计划达成情况'}" :footer="{title:'查看更多',link:'/component/panel'}">
      <div slot="content" class="card-padding">
        <div v-if="workorder">
          <p v-for="item in workorder">
            {{item.id}}-{{item.productname}}-{{item.processname}}-{{item.rate}}

          </p>
        </div>
        <div v-else>
          请求数据失败
        </div>

      </div>

    </card>




    <group title="计划达成情况">

      <div v-if="workorder">
        <p v-for="item in workorder">

          <cell-box is-link :link="{path:'/notify'}">
            <!--{{item.id}}-{{item.productname}}-{{item.processname}}-{{item.rate}}-->

            <flexbox :gutter="0">
              <flexbox-item :span="1/9" >{{item.id}}</flexbox-item>
              <flexbox-item :span="1/3" >{{item.productname}}</flexbox-item>
              <flexbox-item :span="1/3" >{{item.processname}}</flexbox-item>
              <flexbox-item  :span="2/9" >{{item.rate}}</flexbox-item>
            </flexbox>
          </cell-box>




        </p>
      </div>
      <div v-else>
        请求数据失败
      </div>

    </group>
  </div>
</template>

<script>
  import {Group, Cell, CellBox, Card, Flexbox, FlexboxItem } from 'vux'


  const ERR_OK = 0;

  export default {
    components: {
      Group,
      Cell,
      CellBox,
      Card,
      Flexbox,
      FlexboxItem,
    },
    data () {
      return {
        workorder:{}
      }
    },
    created(){
        let _this = this;
      this.$http.get('/api/workorder', {
//        params: {
//          ID: 12345
//        }
      })
      .then(function (response) {
            if(response.data.errno === ERR_OK)
            {
              _this.workorder = response.data.data;
              console.log(_this.workorder);
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>

<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .card-demo-flex {
    display: flex;
  }

  .card-demo-content01 {
    padding: 10px 0;
  }

  .card-padding {
    padding: 15px;
  }

  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }

  .card-demo-flex span {
    color: #f74c31;
  }
</style>
