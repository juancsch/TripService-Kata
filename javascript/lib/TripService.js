const UserSession = require('./UserSession')
const TripDAO = require('./TripDAO')

module.exports = class TripService {

	getTripsByUser (user, loggedUser) {

		this._validate(loggedUser)

		return user.isFriendsWith(loggedUser) ?
			this.findTripsBy(user) :
			this.noTrips()
	}

	_validate (loggedUser) {
		if (loggedUser == null) {
			throw new Error('User not logged in.')
		}
	}

	noTrips () {
		return []
	}

	findTripsBy (user) {
		return TripDAO.findTripsByUser(user)
	}
}
