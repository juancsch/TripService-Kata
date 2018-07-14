package es.juanc.katas.tripservice.user

import es.juanc.katas.tripservice.exception.CollaboratorCallException

object UserSession {

	def getLoggedUser(): User = {
		throw new CollaboratorCallException(
			"UserSession.getLoggedUser() should not be called in an unit test");
	}
}
