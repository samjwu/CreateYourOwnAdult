// using global window Array

/*
Event object
    description: text for the event settings
    options: maps strings indicating possible actions to outcomes
*/
window.eventPool = new Array(babyEvents, childEvents, teenEvents, adultEvents, seniorEvents);

var babyEvents = new Array(babyEvent1);
var babyEvent1 = {
    description: "You spot a bottle containing some sort of white liquid. What do you do?",
    options: new Map([
        ["Drink it", babyOutcome1_1],
        ["Taste it", babyOutcome1_2],
        ["Point it out to your parents", babyOutcome1_3],
    ])
};

var childEvents = new Array();

var teenEvents = new Array();

var adultEvents = new Array();

var seniorEvents = new Array();

/*
Outcome object
    description: text for the results of the event
*/
var babyOutcome1_1 = {
    description: "It turns out that white liquid was milk! \
        You're lucky it wasn't something dangerous. \
        The milk makes your bones <span class='green'>stronger</span>."
};
var babyOutcome1_2 = {
    description: "It turns out that white liquid was milk! \
        Good thing you tasted a bit before drinking it all down. \
        That would have been stupid. \
        What you did instead was definitely <span class='blue'>smarter</span>. \
        Also, the milk makes your bones <span class='green'>stronger</span>."
};
var babyOutcome1_3 = {
    description: "It turns out that white liquid was milk! \
        Good job! \
        You <span class='red'>improved your social skills</span> a bit. \
        Plus the milk makes your bones <span class='green'>stronger</span>."
};