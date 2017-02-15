<template>
  <div>
    <!--<div class="divmain" style="width: 100%; height: 200px;">-->
      <!--<div class="divheader" style="height: 50px;">-->
        <!--<v-table :columns="columns"></v-table>-->
      <!--</div>-->
      <!--<div class="divbody" style="height: 150px;">-->
        <!--<v-table :data-source="dataSource" :columns="columns1"></v-table>-->
      <!--</div>-->
    <!--</div>-->
    <!--<br>-->
    <div class="divmain" style="width: 500px; height: 200px;">
      <div ref="headerWrapper" class="divheader" style=" height: 50px;">
        <v-table :columns="columns" :width="width"></v-table>
      </div>
      <div ref="bodyWrapper" class="divbody" style=" height: 150px;">
        <v-table :showheader="showheader" :data-source="dataSource" :columns="columns" :width="width"></v-table>
      </div>
      <div ref="fixedBodyWrapper" class="divflow">
        <v-table :fixed="fixed" :columns="columns1" :data-source="dataSource1"></v-table>
      </div>
    </div>
  </div>
</template>
<style>
  .is-hidden {
    visibility:hidden;
  }

  .divflow {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    right: 17px;
    bottom: 17px;
  }

  .divmain {
    border: 1px solid #000;
    overflow: hidden;
    position: relative;
  }

  .divheader {
    border: 1px solid #00a0ff;
    overflow: hidden;
  }

  .divbody {
    overflow: auto;
    border: 1px solid #942a25;
  }
</style>
<script>
  import hzlb from './hzlb.vue'
  import biaodan from './biaodan.vue'
  import table from '../Table/Table.vue'

  export default{
    data () {
      return {
        fixed: true,
        showheader: false,
        width: 850,
        iteam: {},
        dataSource: [{
          key: '1',
          name: '问诊病人胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }],
        dataSource1: [{
          key: '1',
          name: '问诊病人胡ds1',
          age: 32,
          address: '西湖区湖底公园ds1'
        }, {
          key: '2',
          name: '问诊病人胡彦ds1',
          age: 42,
          address: '西湖区湖底公园ds1'
        }, {
          key: '2',
          name: '问诊病人胡ds1',
          age: 42,
          address: '西湖区湖底公园ds1'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }],
        loading: false,
        columns: [{
          title: '患者姓名',
          dataIndex: 'name',
          key: 'name',
          width: 180
        }, {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          width: 180
        }, {
          title: '住址',
          dataIndex: 'address',
          key: 'address',
          width: 180
        }],
        columns1: [{
          title: '患flow',
          dataIndex: 'name',
          key: 'name',
          fixed: true,
          width: 180
        }, {
          title: '年flow',
          dataIndex: 'age',
          key: 'age',
          width: 180
        }, {
          title: '住flow',
          dataIndex: 'address',
          key: 'address',
          width: 180
        }]
      }
    },
    methods: {
      updaterecord: function (newiteam) {
        console.log(newiteam)
        for (var index in this.dataSource) {
          if (this.dataSource[index].key === newiteam.key) {
            this.$set(this.dataSource, index, newiteam)
          }
        }
      },
      message: function () {
        console.log('可以住院')
      },
      rowClick: function (index, iteam) {
        console.log(index)
        console.log(iteam)
        this.iteam = iteam
        for (var key in iteam) {
          console.log(key)
        }
      },
      bindEvents: function () {
        const {headerWrapper, bodyWrapper, fixedBodyWrapper} = this.$refs
//        const refs = this.$refs
        bodyWrapper.addEventListener('scroll', function () {
          if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft
          if (fixedBodyWrapper) fixedBodyWrapper.scrollLeft = this.scrollLeft
          if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = this.scrollTop
          if (fixedBodyWrapper) fixedBodyWrapper.scrollRight = this.scrollRight
//          if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
        })

//        if (headerWrapper) {
//          mousewheel(headerWrapper, throttle(16, event => {
//            const deltaX = event.deltaX;
//
//            if (deltaX > 0) {
//              this.bodyWrapper.scrollLeft += 10;
//            } else {
//              this.bodyWrapper.scrollLeft -= 10;
//            }
//          }));
//        }
//
//        if (this.fit) {
//          this.windowResizeListener = throttle(50, () => {
//            if (this.$ready) this.doLayout();
//          });
//          addResizeListener(this.$el, this.windowResizeListener);
//        }
      }
    },
    components: {
      'hzlb': hzlb,
      'biaodan': biaodan,
      'v-table': table
    },
    mounted () {
      this.bindEvents()
    },
    computed: {
      bodytable () {
        return this.$ref.bodyWrapper
      }
    }
  }
</script>
