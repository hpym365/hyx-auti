<template>
  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span12">
        <v-button large primary value="核医学信息管理系统"></v-button>
        <topmenu></topmenu>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import btn from './Button/Button.vue'
  import menu from './hyx/menu.vue'
  export default{
    components: {
      'v-button': btn,
      'topmenu': menu
    }
  }
</script>
