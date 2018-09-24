
module.exports = class User {

	constructor (friends = [], trips = []) {
		this.friends = friends
		this.trips = trips
	}

	getFriends () {
		return this.friends
	}

	addFriend (user) {
		this.friends.push(user)
	}

	addTrip (trip) {
		this.trips.push(trip)
	}

	getTrips () {
		return this.trips
	}

	isFriendsWith (user) {
		return this.friends.includes(user)
	}
}
