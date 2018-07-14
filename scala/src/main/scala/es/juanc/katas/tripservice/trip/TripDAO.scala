package es.juanc.katas.tripservice.trip

import es.juanc.katas.tripservice.user.User
import es.juanc.katas.tripservice.exception.CollaboratorCallException

object TripDAO {

	def findTripsByUser(user: User): List[Trip] = {
		throw new CollaboratorCallException(
			"TripDAO should not be invoked on an unit test.");
	}
}
