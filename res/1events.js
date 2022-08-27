/*
Outcome object
    description: text for the results of the choice
    callback: function to be run as a result of the choice
*/
var babyOutcome1_1 = {
    description: "It turns out that white liquid was milk! \
        You're lucky it wasn't something dangerous. \
        The milk makes your bones <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var babyOutcome1_2 = {
    description: "It turns out that white liquid was milk! \
        Good thing you tasted a bit before drinking it all down. \
        That would have been stupid. \
        What you did instead was definitely <span class='blue'>smarter</span>. \
        Also, the milk makes your bones <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 1, 0)}
};
var babyOutcome1_3 = {
    description: "It turns out that white liquid was milk! \
        Good job! \
        You <span class='red'>improved your social skills</span> a bit. \
        Plus the milk makes your bones <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 1)}
};

/*
Event object
    description: text for the event settings
    options: maps strings indicating possible actions to outcomes
*/
var babyEvent1 = {
    description: "You spot a bottle containing some sort of white liquid.\n\n\
        What do you do?\n\n",
    options: new Map([
        ["Drink it", babyOutcome1_1],
        ["Taste it", babyOutcome1_2],
        ["Point it out to your parents", babyOutcome1_3],
    ])
};
var babyEvents = new Array(babyEvent1);

var childEvents = new Array();

var teenEvents = new Array();

var adultEvents = new Array();

var seniorEvents = new Array();

window.eventPool = new Array(babyEvents, childEvents, teenEvents, adultEvents, seniorEvents);

function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function clearEventText(selector) {
    $(selector).html("");
}

setup.getRandomEventNumber = function(eventArray) {
    return Math.floor(Math.random() * eventArray.length);
}

setup.generateEvent = function(selector, object) {
    var optionElements = new Array();

    for (var [key, value] of object.options.entries()) {
        var optionAnchor = document.createElement("a");
        var optionParagraph = document.createElement("p");
        var optionText = document.createTextNode(key);
        optionParagraph.appendChild(optionText);
        optionAnchor.appendChild(optionParagraph);

        // generate outcome
        var outcomeParagraph = document.createElement("p");
        outcomeParagraph.innerHTML = value.description;
        optionAnchor.onclick = function() {
            clearEventText(selector);
            var eventTextElement = document.getElementById("event-text");
            eventTextElement.appendChild(outcomeParagraph);
            value.callback();
        };

        optionElements.push(optionAnchor);
    }

    waitForElement(selector).then(() => {
        $(selector).html(object.description);

        var eventTextElement = document.getElementById("event-text");
        for (var option of optionElements) {
            eventTextElement.appendChild(option);
        }
    });
}