/** ********* PROJECT INFO *****************/
scalaVersion := "2.12.5"

name := "TripServiceKata"
organization := "es.juanc.katas.tripservice"
version := "0.0.1"

/** ********* DEPENDENCIES *****************/
libraryDependencies ++= Seq(
  "org.scalatest" %% "scalatest" % "3.0.5" % Test,
  "org.scalamock" %% "scalamock" % "4.1.0" % Test
)

/** ********* COMMANDS ALIASES ******************/
addCommandAlias("t", "test")
addCommandAlias("to", "testOnly")
addCommandAlias("c", "compile")
addCommandAlias("tc", "test:compile")
