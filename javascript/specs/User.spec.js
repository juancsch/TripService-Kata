const User = require('../lib/User')

describe('User behabiour', function () {

	it('should check if another user is a friend', function () {

		const pepe = new User()
		const juan = new User([pepe])

		expect(
			juan.isFriendsWith(pepe)
		).toBeTruthy()
	})
})
