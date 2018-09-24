const UserSession = require('./UserSession')
const TripDAO = require('./TripDAO')

module.exports = class TripService {

	getTripsByUser (user) {

		let loggedUser = this.getLoggedUser()
		this._validate(loggedUser)

		let tripList = []
		let isFriend = false

		let friends = user.getFriends()
		for (let i = 0; i < friends.length; i++) {
			let friend = friends[i]
			if (friend === loggedUser) {
				isFriend = true
				break
			}
		}

		if (isFriend) {
			tripList = this.findTripsBy(user)

		}

		return tripList
	}

	_validate(loggedUser) {
		if (loggedUser == null) {
			throw new Error('User not logged in.')
		}
	}

	findTripsBy (user) {
		return TripDAO.findTripsByUser(user)
	}

	getLoggedUser () {
		return UserSession.getLoggedUser()
	}
}
