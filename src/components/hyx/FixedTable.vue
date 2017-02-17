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
    <p>参数 {{fixedLeftColumns}} {{fixedRightColumns}} && {{fixed}} && {{fixedComputed}}</p>
    <div class="divmain" :style="{width: width+'px', height: tableHeight+'px'}">
      <div ref="headerWrapper" class="divheader" :style="{height: headerHeight+'px'}">
        <v-table :fixed="fixed" :showall="showall" :columns="columns" :width="tableWidth"></v-table>
      </div>
      <div ref="bodyWrapper" class="divbody" :style="{height: bodyHeight+'px'}">
        <v-table :fixed="fixed" :showall="showall" :showheader="showheader" :data-source="dataSource" :columns="columns"
                 :width="tableWidth"></v-table>
      </div>
      <template v-if="fixed">
        <div ref="fixedHeaderWrapper" class="divHeaderFlow" :style="{height: headerHeight+'px'}">
          <v-table :fixed="fixed" :columns="fixedLeftColumns"></v-table>
        </div>
        <div ref="fixedBodyWrapper" class="divBodyFlow" :style="{height: fixedBodyHeight+'px'}">
          <v-table :showheader="showheader" :fixed="fixed" :columns="fixedLeftColumns" :data-source="dataSource"></v-table>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import table from '../Table/Table.vue'

  export default{
    props: {
      tableHeight: {
        type: Number
      },
      width: {
        type: Number
      },
      dataSource: {
        type: Array,
        default: []
      },
      columns: {
        type: Array,
        default: []
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        outter: 17,
        headerHeight: 51,
        showall: true,
        fixed: false,
        showheader: false,
        iteam: {},
        fixedLeftColumns: [],
        fixedRightColumns: []
      }
    },
    methods: {
      deepCopy: function (source) {
        var result = {}
        for (var key in source) {
          result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key]
        }
        return result
      },
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
          this.mousewheel(fixedBodyWrapper,
            function (event) {
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
      'v-table': table
    },
    mounted () {
      this.bindEvents()
    },
    watch: {
      columns () {
      }
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
      },
      fixedComputed () {
        this.fixedLeftColumns = []
        var noFixedLeftColumns = []
        var noFixedRightColumns = []
        var newcolumns = []
        for (var i = 0; i < this.columns.length; i++) {
          var column = this.columns[i]
          var noFixcolumn = this.deepCopy(this.columns[i])
          noFixcolumn.fixed = false
          if (this.columns[i].fixed === true || this.columns[i].fixed === 'left' || this.columns[i].fixed === 'right') {
            this.fixed = true
            //  一会处理datalist
            if (this.columns[i].fixed === 'right') {
              this.fixedRightColumns.push(column)
              noFixedLeftColumns.push(noFixcolumn)
            } else {
              this.fixedLeftColumns.push(column)
              noFixedRightColumns.push(noFixcolumn)
            }
          } else {
            newcolumns.push(column)
            noFixedLeftColumns.push(noFixcolumn)
            noFixedRightColumns.push(noFixcolumn)
          }
        }
        console.log(this.fixedLeftColumns)
        this.fixedLeftColumns = this.fixedLeftColumns.concat(noFixedLeftColumns)
        this.fixedRightColumns = this.fixedRightColumns.concat(noFixedRightColumns)
        return this.fixed
      }
    }
  }
</script>
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
    top: 52px;
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
