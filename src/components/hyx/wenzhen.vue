<template>
  <div class="row-fluid">
    问诊页面
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
        loading: false,
        columns: [{
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
        }, {
          title: '特殊字段',
          key: 'tszd',
          columnClick: function (column, record, rowIndex) {
            window.alert(record.name + '可以住院')
          },
          render: function (text, record) {
            if (record.age > 40) {
              return '<p>不可以住院</p>'
            } else {
              return '<p>可以住院</p>'
            }
          }
        }, {
          title: '特殊字段1',
          key: 'tszd1',
          renderList: [
            {
              renderHtml: function (text, record, index) {
                return '<button class="atui-btn atui-btn-small atui-btn-primary">' + record.name + '住院</button>'
              },
              renderClick: function (text, record, index) {
                window.alert(record.name + '住院')
              }
            },
            {
              renderHtml: function (text, record, index) {
                return '<button class="atui-btn atui-btn-small atui-btn-primary">' + record.name + '出院</button>'
              },
              renderClick: function (text, record, index) {
                window.alert(record.name + '出院')
              }
            }
          ]
        }]
      }
    },
    methods: {
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
          name: '问诊病人胡彦斌',
          age: 32,
          address: '西湖区湖底公园1号'
        }, {
          key: '2',
          name: '问诊病人胡彦祖',
          age: 42,
          address: '西湖区湖底公园2号'
        }]
        that.loading = false
      }, 500)
    }
  }
</script>
