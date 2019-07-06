import { data } from './data.js';

export const store = {
	state: {
		days: data
	},
	getActiveDay() {
		return this.state.days.find(day => day.active)
	},
	setActiveDay(dayId) {
		this.state.days.forEach(day => {
			if(day.id === dayId) {
				day.active = true
			} else {
				day.active = false
			}
		});
	},
	submitEvent(details) {
		const activeDay = this.getActiveDay();

		activeDay.events.push({details, edit: false})
	},
	editEvent(dayId, eventIndex) {
		const day = this.state.days.find(day => day.id === dayId)
		const event = day.events[eventIndex]
		event.edit = true
	},
	cancelEditEvent(dayId, eventIndex) {
		const day = this.state.days.find(day => day.id === dayId)
		const event = day.events[eventIndex]
		event.edit = false
	},
	updateEvent(dayId, eventIndex, newEventDetails) {
		const day = this.state.days.find(day => day.id === dayId)
		const event = day.events[eventIndex];

		event.details = newEventDetails;
		event.edit=false;
	},
	deleteEvent(dayId, eventIndex) {
		const day = this.state.days.find(day => day.id === dayId)

		day.events.splice(eventIndex, 1)
	}

}
