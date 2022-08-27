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
        What do you do?\n",
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

function generateOutcomeOnClick(textSelector, optionSelector, value, optionAnchor) {
    optionAnchor.onclick = function() {
        $(textSelector).html("");
        $(optionSelector).html("");
        $(textSelector).html(value.description);
        value.callback();
    };
}

setup.getRandomEventNumber = function(eventArray) {
    return Math.floor(Math.random() * eventArray.length);
}

setup.generateEvent = function(textSelector, optionSelector, eventObject) {
    var optionElements = new Array();

    for (var [key, value] of eventObject.options.entries()) {
        var optionAnchor = document.createElement("a");
        var optionParagraph = document.createElement("p");
        var optionText = document.createTextNode(key);
        optionParagraph.appendChild(optionText);
        optionAnchor.appendChild(optionParagraph);

        generateOutcomeOnClick(textSelector, optionSelector, value, optionAnchor);
        
        optionElements.push(optionAnchor);
    }

    waitForElement(textSelector).then(() => {
        $(textSelector).html(eventObject.description);

        var eventTextElement = $(optionSelector).get(0);
        for (var option of optionElements) {
            eventTextElement.appendChild(option);
        }
    });
}