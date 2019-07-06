<template>
  <div id="app">
    <CalendarWeek />
    
    <CalendarEntry />
  </div>
</template>

<script>
  
  import CalendarWeek from './components/CalendarWeek.vue';
  import CalendarEntry from './components/CalendarEntry.vue'

  export default {
    name: 'App',

    components: {
      CalendarWeek,
      CalendarEntry
    }

  }

</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

i {
font-family: fontawesome;
}

#app {
  margin: 0;
  padding: 0;
  height: inherit;
  background: #6f6f6f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
