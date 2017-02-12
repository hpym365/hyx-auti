<template>
  <v-table :loading="loading" :data-source="dataSource" :columns="columns" row-key="key" @row-click="rowClick"></v-table>
</template>
<script>
  import table from '../Table/Table.vue'
  export default{
    methods: {},
    props: {
      rowClick: {
        type: Function
      },
      dataSource: {
        type: Array
      },
      columns: {
        type: Array
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'v-table': table
    }
  }
</script>
