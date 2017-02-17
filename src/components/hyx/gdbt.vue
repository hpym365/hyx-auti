<template>
  <div>
    <FixedTable :tableHeight="tableHeight" :width="width" :dataSource="dataSource" :columns="columns"></FixedTable>
  </div>
</template>

<script>
  import FixedTable from './FixedTable.vue'

  export default{
    data () {
      return {
        tableHeight: 200,
        width: 700,
        loading: false,
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
          fixed: true,
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
        }]
      }
    },
    components: {
      FixedTable
    }
  }
</script>
