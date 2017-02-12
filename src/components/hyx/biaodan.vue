<template>
  <div>
    <template v-for="index,key in iteam">

    </template>
    <div>
      <h5 align="left">患者姓名：</h5>
      <v-input type="text" :value="iteam.name" placeholder="患者姓名"></v-input>
    </div>
    <br>
    <div>
      <h5 align="left">患者年龄：</h5>
      <v-input type="text" :value="iteam.age" placeholder="患者年龄"></v-input>
    </div>
    <br>
    <div>
      <h5 align="left">患者地址：</h5>
      <v-input type="text" :value="iteam.address" placeholder="患者地址"></v-input>
    </div>
    <br>
  </div>
</template>
<script>
  import input from '../Input/input.vue'
  export default{
    props: {
      iteam: {
        type: Object
      }
    },
    components: {
      'v-input': input
    }
  }
</script>
