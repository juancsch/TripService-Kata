const UserSession = require('./UserSession')
const TripDAO = require('./TripDAO')

module.exports = class TripService {

	getTripsByUser (user) {

		let loggedUser = this.getLoggedUser()
		this._validate(loggedUser)

		let tripList = []

		let isFriend = user.isFriendsWith(loggedUser)
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
