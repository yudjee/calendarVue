<template>
	<div id="calendar-week">
      <div class="week">
        
        <CalendarDay 
          v-for="day in state.days" 
          :key="day.id" 
          :day="day" 
        />

      </div>
    </div>
</template>

<script>
  
  import CalendarDay from './CalendarDay.vue';
  import {store} from '../store.js'

	export default {
		name: 'CalendarWeek',

    components: {
      CalendarDay
    },

    data() {
      return {
        state: store.state
      };
    }
	}
</script>

<style>
  .week {
    padding: 2px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }
  .day{
    margin: 1px;
    width: 110px;
    min-height: 200px;
    background-color: #4a4a4a;
  }

  .day:hover {
    background-color: #858484;
  }

  .day-banner {
    background-color: #333333;
    color: white;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
  }

  .day-details{
    display: flex;
    flex-direction: column;
  }

  .day-number {
    color: white;
    margin: 10px;
  }
  
  .day-event {
    margin: 5px;
    background-color: #8fd2fc;
    text-align: center;
    display: flex;
    flex-direction: column;

  }

  .day-event:hover {
    background-color: #55c8fa;
  }

  .day-description {
    color:  #333333;
    margin: 5px;
  }
    
  div img {
    height: 5px;
  }
</style>