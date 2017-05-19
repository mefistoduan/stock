<template>
  <div class="hello">
    <calendar :start-time="start" :end-time="end" :location="location" @get-date="getDate" :value="date"></calendar>
  </div>
</template>
<script>
  import Calendar from '../components/calendar/calendar.js'
  export default {
    data() {
      return {
        date: '请选择',
        start: 1980,
        end: 2020,
        location: '1999-1-5'
      }
    },
    components: {
      Calendar
    },
    methods: {
      getDate(v) {
        console.log(v)
      }
    }
  }
</script>
<style scoped>

</style>
