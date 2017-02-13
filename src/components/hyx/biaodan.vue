<template>
  <div>
    <template v-if="columns && column.dataIndex" v-for="column in columns">
      <div>
        <h5 align="left">{{column.title}}：</h5>
        <v-input type="text" :value="iteam[column.dataIndex]" v-model="newiteam[column.dataIndex]"
                 :placeholder="column.title"></v-input>
      </div>
      <br>
    </template>
    <!--<div>-->
    <!--<h5 align="left">患者姓名：</h5>-->
    <!--<v-input type="text" :value="iteam.name" placeholder="患者姓名"></v-input>-->
    <!--</div>-->
    <!--<br>-->
    <!--<div>-->
    <!--<h5 align="left">患者年龄：</h5>-->
    <!--<v-input type="text" :value="iteam.age" placeholder="患者年龄"></v-input>-->
    <!--</div>-->
    <!--<br>-->
    <!--<div>-->
    <!--<h5 align="left">患者地址：</h5>-->
    <!--<v-input type="text" :value="iteam.address" placeholder="患者地址"></v-input>-->
    <!--</div>-->
    <!--<br>-->
    <v-button @click.native="updaterecord" value="提交"></v-button>
  </div>
</template>
<script>
  import input from '../Input/input.vue'
  import Button from '../Button/Button.vue'
  export default{
    data () {
      return {newiteam: {}}
    },
    props: {
      iteam: {
        type: Object
      },
      columns: {
        type: Array
      }
    },
    components: {
      'v-input': input,
      'v-button': Button
    },
    methods: {
      updaterecord: function () {
        console.log('updaterecord')
        this.iteam = Object.assign(this.iteam, this.newiteam)
//        this.newiteam.key = this.iteam.key
//        this.$emit('updaterecord', this.newiteam)
      },
      deepCopy: function (source) {
        var result = {}
        for (var key in source) {
          result[key] = typeof source[key] === 'object' ? this.deepCopy(source[key]) : source[key]
        }
        return result
      }
    },
    computed: {
//      newiteam: function () {
//        return this.deepCopy(this.iteam)
//      }
    },
    mounted () {
    }
  }
</script>
