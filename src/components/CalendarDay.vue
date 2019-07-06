<template>
	<div class="day" @click="setActiveDay(day.id)">
		<div class="day-banner"> {{ day.abbvTitle }}
		</div>
		<div class="day-details">
			<div class="day-number"> {{ day.id }}
			</div>
			<CalendarEvent 
				v-for="(event, index) in day.events"
				:event="event"
				:index="index"
				:key="index"
				:day="day" 
			/>
		</div>
	</div>
</template>

<script>
	
	import CalendarEvent from './CalendarEvent.vue'
	import {store} from '../store.js'

	export default {
		name: 'CalendarDay',

		props: ['day'],

		components: {
			CalendarEvent
		},

		methods: {
			setActiveDay(dayId) {
				store.setActiveDay(dayId)
			}
		}

	}
</script>

<style></style>