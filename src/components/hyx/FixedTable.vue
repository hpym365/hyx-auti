<template>
  <div>
    <!--<div class="fixedMain" style="width: 100%; height: 200px;">-->
    <!--<div class="headerWrapper" style="height: 50px;">-->
    <!--<v-table :columns="columns"></v-table>-->
    <!--</div>-->
    <!--<div class="divbody" style="height: 150px;">-->
    <!--<v-table :data-source="dataSource" :columns="columns1"></v-table>-->
    <!--</div>-->
    <!--</div>-->
    <!--<br>-->
    <p>left {{fixedLeftColumns}} right {{fixedRightColumns}} && {{fixed}} && {{fixedComputed}}</p>
    <br>
    <p>参数 {{bodyColumns}}</p>
    <p>参数 {{tableWidth}}</p>
    <div style="width: 760px; border: 1px solid #dfe6ec;">abc</div>
    <div class="fixedMainWrapper" :style="{width: tableWidth+'px', height: tableHeight+'px'}">
      <div ref="headerWrapper" class="headerWrapper" :style="{height: headerHeight+'px'}">
        <v-table :fixed="fixed" :columns="bodyColumns" :tableWidth="fixedTableWidth"></v-table>
      </div>
      <div ref="bodyWrapper" class="divbody" :style="{height: bodyHeight+'px'}">
        <v-table :fixed="fixed" :showheader="showheader" :data-source="dataSource" :columns="bodyColumns"
                 :tableWidth="fixedTableWidth"></v-table>
      </div>
      <template v-if="fixed">
        <div ref="headerFixedLeftWrapper" class="headerFixedLeft" :style="{height: headerHeight+'px'}">
          <v-table :fixed="fixed" :columns="fixedLeftColumns" :showAllColumns="showAllColumns"></v-table>
        </div>
        <div ref="bodyFixedLeftWrapper" class="bodyFixedLeft" :style="{height: fixedBodyHeight+'px'}">
          <v-table :showheader="showheader" :fixed="fixed" :columns="fixedLeftColumns"
                   :data-source="dataSource" :showAllColumns="showAllColumns"></v-table>
        </div>
        <div ref="headerFixedRightWrapper" class="headerFixedRight" :style="{height: headerHeight+'px'}">
          <v-table :fixed="fixed" :columns="fixedRightColumns" :showAllColumns="showAllColumns"></v-table>
        </div>
        <div ref="bodyFixedRightWrapper" class="bodyFixedRight" :style="{height: fixedBodyHeight+'px'}">
          <v-table :showheader="showheader" :fixed="fixed" :columns="fixedRightColumns"
                   :data-source="dataSource" :showAllColumns="showAllColumns"></v-table>
        </div>
        <div class="el-table__fixed-right-patch" style="width: 17px; height: 51px;"></div>
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
      tableWidth: {
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
        showAllColumns: false,
        fixed: false,
        showheader: false,
        iteam: {},
        fixedLeftColumns: [],
        fixedRightColumns: [],
        bodyColumns: []
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
        const {headerWrapper, bodyWrapper, bodyFixedLeftWrapper, bodyFixedRightWrapper} = this.$refs
//        const refs = this.$refs
        bodyWrapper.addEventListener('scroll', function () {
          if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft
          if (bodyFixedLeftWrapper) bodyFixedLeftWrapper.scrollTop = this.scrollTop
          if (bodyFixedRightWrapper) bodyFixedRightWrapper.scrollTop = this.scrollTop
//          if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
        })

        if (bodyFixedLeftWrapper) {
          this.mousewheel(bodyFixedLeftWrapper,
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

        if (bodyFixedRightWrapper) {
          this.mousewheel(bodyFixedRightWrapper,
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
      fixedTableWidth () {
        var width = 0
        for (var i = 0; i < this.columns.length; i++) {
          width += this.columns.width
        }
        return width + 18
      },
      bodyHeight () {
        return this.tableHeight - this.headerHeight
      },
      fixedBodyHeight () {
        return this.tableHeight - this.headerHeight - this.outter
      },
      fixedComputed () {
        this.fixedLeftColumns = []
        this.fixedRightColumns = []
        this.bodyColumns = []
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
            newcolumns.push(noFixcolumn)
            noFixedLeftColumns.push(noFixcolumn)
            noFixedRightColumns.push(noFixcolumn)
          }
        }
        console.log(this.fixedLeftColumns)
        this.bodyColumns = this.fixedLeftColumns.concat(newcolumns).concat(this.fixedRightColumns)
        this.fixedLeftColumns = this.fixedLeftColumns.concat(noFixedLeftColumns)
        this.fixedRightColumns = noFixedRightColumns.concat(this.fixedRightColumns)
        return this.fixed
      }
    }
  }
</script>
<style>
  .el-table__fixed-right-patch {
    position: absolute;
    top: 0px;
    right: 0;
    background-color: #eef1f6;
    border: 1px solid #dfe6ec;
  }

  .is-hidden {
    visibility: hidden;
  }

  .table-fixed {
    table-layout: fixed;
  }

  .bodyFixedLeft {
    overflow: hidden;
    position: absolute;
    top: 52px;
    left: 1px;
    right: 18px;
    bottom: 18px;
  }

  .headerFixedLeft {
    overflow: hidden;
    position: absolute;
    top: 1px;
    left: 0px;
    right: 18px;
  }

  .bodyFixedRight {
    overflow: hidden;
    position: absolute;
    top: 52px;
    right: 18px;
    bottom: 18px;
  }

  .headerFixedRight {
    overflow: hidden;
    position: absolute;
    top: 1px;
    right: 16px;
  }

  .fixedMainWrapper {
    border: 1px solid #000;
    overflow: hidden;
    position: relative;
  }

  .fixedMainWrapper table td {
    border: 1px solid #00a0ff;
  }

  .fixedMainWrapper table th {
    border: 1px solid #00a0ff;
  }

  .headerWrapper {
    /*padding-right: 18px;*/
    border: 1px solid #00a0ff;
    overflow: hidden;
  }

  .divbody {
    overflow: auto;
    border: 1px solid #942a25;
  }
</style>
