const UserSession = require('./UserSession')
const TripDAO = require('./TripDAO')

module.exports = class TripService {

	constructor (tripDao) {
		this.tripDao = tripDao
	}

	getTripsByUser (user, loggedUser) {

		this._validate(loggedUser)

		return user.isFriendsWith(loggedUser) ?
			this._tripsBy(user) :
			this._noTrips()
	}

	_validate (loggedUser) {
		if (loggedUser == null) {
			throw new Error('User not logged in.')
		}
	}

	_noTrips () {
		return []
	}

	_tripsBy (user) {
		return this.tripDao.findTripsByUser(user)
	}
}
