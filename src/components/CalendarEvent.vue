<template>
	<div class="day-event" >
		<div v-if="!event.edit">
			<span class="day-description"> {{ event.details }} </span> 
			<br>
			<i class="far fa-edit" @click="editEvent(day.id, index)"></i>
			<i class="far fa-trash" @click="deleteEvent(day.id, index)"></i>
		</div>

		<div v-if="event.edit">
			<input type="text" :placeholder="event.details" v-model="newEventDetails"/>
			<i class="fa fa-check" @click="updateEvent(day.id, index, newEventDetails)"></i>
			<i class="fa fa-close" @click="cancelEditEvent(day.id, index)"></i>
		</div>
	</div>
</template>

<script>
	import { store } from '../store.js'

	export default {
		name:	'CalendarEvent',

		props: ['event', 'day', 'index'],

		data() {
			return {
				newEventDetails: ''
			}
		},

		methods: {
			editEvent(dayId, eventIndex) {
				store.editEvent(dayId, eventIndex)
			},
			cancelEditEvent(dayId, eventIndex){
				store.cancelEditEvent(dayId, eventIndex)
			},
			updateEvent(dayId, eventIndex, newEventDetails) {
				store.updateEvent(dayId, eventIndex, newEventDetails)
				this.newEventDetails = ''
			},
			deleteEvent(dayId, eventIndex) {
				store.deleteEvent(dayId, eventIndex)
			}
		}
	}

</script>