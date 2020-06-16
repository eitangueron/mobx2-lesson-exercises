import { observable, computed, action } from  'mobx'
import {Reservation} from './ReservationStore'


export class RestaurantStore {
    @observable reservations = []
    @observable numTables = 10
    @computed get totalReservations() { //automatically calculates the total reservations
        return this.reservations.length
    }
    @computed get openTables() { //automatically caluclates the number of tables avalible, only when the state is affected
        let counter = 0
        this.reservations.forEach(r => r.seated ? counter ++: null)
        return (this.numTables - counter)
    }
    @computed get restPopulation() {
        let numOfPeople = 0
        this.reservations.forEach( r => !r.completed && r.seated ? numOfPeople+=r.numPeople : null)
        return numOfPeople
        // calculate the number of people in the restaurant now
        // (e.g. total number of people who are seated, but their reservation is not complete)
    }
    @computed get completedTables() {
        let counter = 0
        this.reservations.forEach( r => r.completed ? counter++ : null)
        return counter
        //calculate the number of tables that have been completed
    }
    @action addRes = (name, numPeople) => {
        this.reservations.push(new Reservation(name, numPeople))
    }
    @action seatRes = (id) => {
        let res = this.reservations.find( r => r.id === id)
        res.seatTable()
        //find the reservation and change its seated value to true
    }
    @action completeRes = (id) => {
        let res = this.reservations.find( r => r.id === id)
        res.completeTable()
        //find the reservation and mark it as completed
        //after you write this function, add some conditional rendering on compelted tables
        //e.g. strike through our a different color - this will happen on your react, not here.
    }


}