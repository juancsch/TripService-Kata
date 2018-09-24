const TripService = require('../lib/TripService')
const User = require('../lib/User')
const Trip = require('../lib/Trip')

describe('TripService characterization tests', () => {

	test('should throw an exception when user is not logged in', () => {

		// given
		const tripService = createTripServiceWith({userLogged: null})

		// when
		const whenGetTripsByUserIsCalled = () => tripService.getTripsByUser(new User(), null)

		// then
		expect(
			whenGetTripsByUserIsCalled
		).toThrowError(
			'User not logged in.'
		)
	})

	test('should not return trips when logged user is not a friend', function () {

		// given
		const userLogged = new User()
		const tripService = createTripServiceWith({userLogged})

		// when
		const anotherUser = new User()
		const trips = tripService.getTripsByUser(anotherUser, userLogged)

		// then
		expect(trips.length).toBe(0)
	})

	test('should return trips when users are friends', function () {

		// given
		const userLogged = new User()
		const tripService = createTripServiceWith({
			userLogged,
			tripsByUser: [new Trip(), new Trip()]
		})

		// when
		const anotherUser = new User([userLogged])
		const trips = tripService.getTripsByUser(anotherUser, userLogged)

		// then
		expect(trips.length).toBe(2)
	})

	function createTripServiceWith ({userLogged = null, tripsByUser = []} = {}) {

		const tripService = new TripService()

		tripService.findTripsBy = function () {
			return tripsByUser
		}

		return tripService
	}
})
