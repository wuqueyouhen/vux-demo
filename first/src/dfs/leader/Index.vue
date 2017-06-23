<template>
  <div>

    <x-header :left-options="{showBack: false}" :right-options="{showMore: true}" @on-click-more="showMenus = true">数字化工厂</x-header>
    <div class="vux-demo">

      <h3>今日总览</h3>
      <br/>
    </div>
    <div>


      <divider>生产情况</divider>
      <x-table :cell-bordered="false" :content-bordered="false" style="background-color:#fff;">
        <thead>
        <tr style="background-color: #F7F7F7">
          <th>序号</th>
          <th>任务</th>
          <th>工序步骤</th>
          <th>进度</th>
          <th></th>
        </tr>
        </thead>
        <tbody v-if="workorder">
        <tr v-for="item in workorder">
          <td>{{item.id}}</td>
          <td>{{item.productname}}</td>
          <td>{{item.processname}}</td>
          <td>
            <div style='width:2rem;height:2rem; font-size: small '>
              <x-circle :percent=parseInt(item.rate) :stroke-width="8" stroke-color="#04BE02">
                <span>{{item.rate}}</span>
              </x-circle>
            </div>
          </td>
          <td>
            <x-button mini plain type="primary" link="/gl/orderdetail">详情</x-button>
          </td>
        </tr>
        </tbody>
        <tbody v-else>
        请求数据失败
        </tbody>
      </x-table>
    </div>

    <div class="workstate">

      <br/>
      <divider>生产情况</divider>
      <div v-if="workorder">
        <div v-for="item in workorder">
          <card :footer="{title:'详情',link:'/gl/orderdetail'}">
            <div slot="header" class="title">
              <span>{{ item.productname + "——" + item.processname}}</span>
            </div>

            <divider></divider>


            <div slot="content">
              <div>
                <lp-progress :percent=parseInt(item.rate)></lp-progress>
              </div>

              <div class="card-demo-flex card-demo-content01">

                <div class="vux-1px-l vux-1px-r">
                  <span>{{item.goodproduct}}</span>
                  <br/>
                  良品
                </div>
                <div class="vux-1px-r">
                  <span>{{item.flawproduct}}</span>
                  <br/>
                  次品
                </div>
                <div class="vux-1px-r">
                  <span>{{item.badproduct}}</span>
                  <br/>
                  废品
                </div>
              </div>
            </div>
          </card>
        </div>
      </div>
      <div v-else>
        请求数据失败
      </div>
    </div>


    <div>

      <br/>
      <divider>工人状态</divider>
      <div v-if="workorder">
        <div v-for="item in workorder">
          <card :header="{title: item.productname+'——'+item.processname}">
            <div slot="content" class="card-demo-flex card-demo-content01">
              <div class="vux-1px-l vux-1px-r">
                <span>95</span>
                <br/>
                作业
              </div>
              <div class="vux-1px-r">
                <span>5</span>
                <br/>
                离岗
              </div>
              <div class="vux-1px-r">
                <span>95%</span>
                <br/>
                作业率
              </div>
            </div>
          </card>
        </div>
      </div>
      <div v-else>
        请求数据失败
      </div>
    </div>


  </div>
</template>

<script>
  import { XHeader, Group, Flexbox, FlexboxItem, XCircle, XTable, LoadMore, Divider, Card, XButton, XProgress} from 'vux'

  import LpProgress from "../../components/lp-progerss/index";

  const ERR_OK = 0;

  export default {
    components: {
      LpProgress,
      XHeader,
      Group,
      Divider,
      Card,
      XButton,
      XCircle,
      XProgress,
      Flexbox,
      FlexboxItem,
      XTable,
      LoadMore,
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

      let _this = this;
      this.$http.get('/api/workorder', {
//        params: {
//          ID: 12345
//        }
      })
        .then(function (response) {
          if (response.data.errno === ERR_OK) {
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

  .workstate {

  }

  .workstate .title {
    padding: 14px 15px 10px;
  }



</style>
