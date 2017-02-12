<template>
  <div class="row-fluid">
    注射
    <div class="span6">
      <hzlb :loading="loading" :dataSource="dataSource" :columns="columns" :rowClick="rowClick"></hzlb>
    </div>
    <div class="span6">
      <biaodan :iteam="iteam"></biaodan>
    </div>
  </div>
</template>
<script>
  import hzlb from './hzlb.vue'
  import biaodan from './biaodan.vue'

  export default{
    data () {
      return {
        iteam: {},
        dataSource: [],
        columns: [{
          title: '患者Key',
          dataIndex: 'key',
          key: 'key'
        }, {
          title: '患者姓名',
          dataIndex: 'name',
          key: 'name'
        }, {
          title: '年龄',
          dataIndex: 'age',
          key: 'age'
        }, {
          title: '住址',
          dataIndex: 'address',
          key: 'address'
        }]
      }
    },
    methods: {
      rowClick: function (index, iteam) {
        console.log(index)
        console.log(iteam)
        this.iteam = iteam
        for (var key in iteam) {
          console.log(key)
        }
      }
    },
    components: {
      'hzlb': hzlb,
      'biaodan': biaodan
    },
    created () {
      this.loading = true
      var that = this
      setTimeout(function () {
        console.log('123')
        that.dataSource = [{
          key: '1',
          name: '注射病人胡啊啊',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '2',
          name: '注射病人胡哈哈',
          age: 42,
          address: '西湖区湖底公园2号'
        }]
        console.log(that.dataSource)
        that.loading = false
      }, 500)
    }
  }
</script>
