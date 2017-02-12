<template>
  <div>
    <v-tabs :active="active" @change="routeto">
      <v-tab header="问诊">
      </v-tab>
      <v-tab header="注射">
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>
  import tab from '../Tabs/Tab'
  import tabs from '../Tabs/Tabset'
  import router from '../../router/index'
  export default{
    data () {
      return {active: 0}
    },
    methods: {
      routeto: function (a) {
        console.log(this)
        if (a === 0) {
          router.push('wenzhen')
        } else {
          router.push('zhushe')
        }
      }
    },
    components: {
      'v-tab': tab,
      'v-tabs': tabs
    },
    mounted () {
      console.log(router)
      if (router.currentRoute.name === 'wenzhen') {
        this.active = 0
      } else {
        this.active = 1
      }
    }
  }
</script>
