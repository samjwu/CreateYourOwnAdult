// using global window Array

/*
Event object
    description: text for the event settings
    options: maps strings indicating possible actions to outcomes
*/
var babyEvents = new Array();
var babyEvent1 = new Object();

var childEvents = new Array();

var teenEvents = new Array();

var adultEvents = new Array();

var seniorEvents = new Array();

window.eventPool = new Array(babyEvents, childEvents, teenEvents, adultEvents, seniorEvents);
