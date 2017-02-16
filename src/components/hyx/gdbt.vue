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
    <div class="divmain" :style="{width: width+'px', height: tableHeight+'px'}">
      <div ref="headerWrapper" class="divheader" :style="{height: headerHeight+'px'}">
        <v-table :fixed="fixed" :showall="showall" :columns="columns" :width="tableWidth"></v-table>
      </div>
      <div ref="bodyWrapper" class="divbody" :style="{height: bodyHeight+'px'}">
        <v-table :fixed="fixed" :showall="showall" :showheader="showheader" :data-source="dataSource" :columns="columns"
                 :width="tableWidth"></v-table>
      </div>
      <div ref="fixedHeaderWrapper" class="divHeaderFlow" :style="{height: headerHeight+'px'}">
        <v-table :fixed="fixed" :columns="columns1"></v-table>
      </div>
      <div ref="fixedBodyWrapper" class="divBodyFlow" :style="{height: fixedBodyHeight+'px'}">
        <v-table :showheader="showheader" :fixed="fixed" :columns="columns1" :data-source="dataSource"></v-table>
      </div>
    </div>
  </div>
</template>
<style>
  .is-hidden {
    visibility: hidden;
  }

  .table-fixed {
    table-layout: fixed;
  }

  .divBodyFlow {
    overflow: hidden;
    position: absolute;
    top: 51px;
    left: 1px;
    right: 18px;
    bottom: 18px;
  }

  .divHeaderFlow {
    overflow: hidden;
    position: absolute;
    top: 1px;
    left: 0px;
    right: 18px;
  }

  .divmain {
    border: 1px solid #000;
    overflow: hidden;
    position: relative;
  }

  .divmain table td {
    border: 1px solid #00a0ff;
  }

  .divmain table th {
    border: 1px solid #00a0ff;
  }

  .divheader {
    /*padding-right: 18px;*/
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
        outter: 17,
        tableHeight: 200,
        headerHeight: 51,
        showall: true,
        fixed: true,
        showheader: false,
        width: 700,
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
        }, {
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
        }, {
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
        }, {
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
          age: 11,
          address: '西湖区湖底公园ds1'
        }, {
          key: '2',
          name: '问诊病人胡彦ds1',
          age: 22,
          address: '西湖区湖底公园ds1'
        }, {
          key: '2',
          name: '问诊病人胡ds1',
          age: 33,
          address: '西湖区湖底公园ds1'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 44,
          address: '西湖区湖底公园2号'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 55,
          address: '西湖区湖底公园2号'
        }],
        loading: false,
        columns: [{
          title: 'body字段1',
          dataIndex: 'name',
          key: 'name',
          fixed: true,
          width: 180
        }, {
          title: 'body字段2',
          dataIndex: 'age',
          key: 'age',
          width: 180
        }, {
          title: 'body字段3',
          dataIndex: 'address',
          key: 'address',
          width: 180
        }, {
          title: 'body字段4',
          dataIndex: 'name',
          key: 'name',
          width: 180
        }, {
          title: 'body字段5',
          dataIndex: 'age',
          key: 'age',
          width: 180
        }, {
          title: 'body字段6',
          dataIndex: 'address',
          key: 'address',
          width: 180
        }],
        columns1: [{
          title: 'body字段1F',
          dataIndex: 'name',
          key: 'name',
          fixed: true,
          width: 180
        }, {
          title: 'body字段2F',
          dataIndex: 'age',
          key: 'age',
          width: 180
        }, {
          title: 'body字段3F',
          dataIndex: 'address',
          key: 'address',
          width: 180
        }, {
          title: 'body字段4F',
          dataIndex: 'name',
          key: 'name',
          width: 180
        }, {
          title: 'body字段5F',
          dataIndex: 'age',
          key: 'age',
          width: 180
        }, {
          title: 'body字段6F',
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
          if (fixedBodyWrapper) fixedBodyWrapper.scrollTop = this.scrollTop
//          if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
        })

        if (fixedBodyWrapper) {
          this.mousewheel(fixedBodyWrapper, function (event) {
            const wheelDelta = event.wheelDelta
            if (wheelDelta < 0) {
              bodyWrapper.scrollTop += 10
            } else {
              bodyWrapper.scrollTop -= 10
            }
          }
          )
        }

//        if (this.fit) {
//          this.windowResizeListener = throttle(50, () => {
//            if (this.$ready) this.doLayout();
//          });
//          addResizeListener(this.$el, this.windowResizeListener);
//        }
      },
      mousewheel: function (element, callback) {
        const isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1

        if (element && element.addEventListener) {
          element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', callback)
        }
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
      },
      tableWidth () {
        var tbwidth = 18
        for (var i = 0; i < this.columns.length; i++) {
          tbwidth += this.columns.width
        }
        return tbwidth
      },
      bodyHeight () {
        return this.tableHeight - this.headerHeight
      },
      fixedBodyHeight () {
        return this.tableHeight - this.headerHeight - this.outter
      }
    }
  }
</script>
