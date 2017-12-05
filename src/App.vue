<template>
  <div id="app">
    <div class="page page-current">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isA:true,
        isB:false,
        isC:false,
      }
    },
    methods:{
    },
    components: {
    }
  }
</script>
<style>

</style>
