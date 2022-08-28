/*
Outcome object
    description: text for the results of the choice
    callback: function to be run as a result of the choice
*/
var babyOutcome1_1 = {
    description: "It turns out that white liquid was milk!\n \
        You're lucky it wasn't something dangerous.\n \
        The milk makes your bones <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var babyOutcome1_2 = {
    description: "It turns out that white liquid was milk!\n \
        Good thing you tasted a bit before drinking it all down.\n \
        That would have been stupid.\n \
        What you did instead was definitely <span class='blue'>smarter</span>.\n \
        Also, the milk makes your bones <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 1, 0)}
};
var babyOutcome1_3 = {
    description: "It turns out that white liquid was milk!\n \
        Good job!\n \
        You <span class='red'>improved your social skills</span> a bit.\n \
        Plus the milk makes your bones <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 1)}
};

var babyOutcome2_1 = {
    description: "It turns out that was a tide pod!\n \
        Good thing you didn't put it in your mouth or something similarly stupid.\n \
        Still, licking some random object was not a good idea.\n \
        The chemicals make you slightly sick and you get <span class='green'>weaker</span>.",
    callback: function() {setup.changeCoreStats(-1, 0, 0)}
};
var babyOutcome2_2 = {
    description: "It turns out that was a tide pod!\n \
        You really shouldn't just put random things in your mouth.\n \
        At least now you know better and won't do it again, even if someone dared you to eat one... Right?\n \
        The chemicals make you very sick and you become much <span class='green'>weaker</span>.",
    callback: function() {setup.changeCoreStats(-2, 0, 0)}
};
var babyOutcome2_3 = {
    description: "Your parents later say that was a tide pod.\n \
        Good thing you were smart enough not to do anything stupid, like put it in your mouth.\n \
        You become much <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(0, 2, 0)}
};
var babyOutcome2_4 = {
    description: "Your parents later say that was a tide pod.\n \
        Good thing you were smart enough not to do anything stupid, like put it in your mouth.\n \
        Still, it's not a good idea to go around touching random objects.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};

var babyOutcome3_1 = {
    description: "Your parents realize that they dropped a knife on the ground.\n \
        Good job pointing that out to them. Someone could have gotten hurt.\n \
        You <span class='red'>improved your social skills</span> a bit.\n \
        You also become a little bit <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 1)}
};
var babyOutcome3_2 = {
    description: "It turns out that was a knife and you cut your mouth. Ouch!\n \
        Why did you do that?\n \
        The injury makes you much <span class='green'>weaker</span>.",
    callback: function() {setup.changeCoreStats(-2, 0, 0)}
};
var babyOutcome3_3 = {
    description: "Your parents later say that was a knife.\n \
        Good thing you were smart enough not to do anything stupid, like put it in your mouth.\n \
        You become slightly <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var babyOutcome3_4 = {
    description: "It turns out that was a knife and you cut your hands. Ouch!\n \
        Why did you do that?\n \
        The injury makes you much <span class='green'>weaker</span>.",
    callback: function() {setup.changeCoreStats(-2, 0, 0)}
};

var babyOutcome4_1 = {
    description: "It turns out that mush was mashed broccoli!\n \
        It's healthy and nutritious.\n \
        You become much <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(2, 0, 0)}
};
var babyOutcome4_2 = {
    description: "Your parents tell you that was mashed broccoli.\n \
        You were supposed to eat it.\n \
        Your temper tantrum makes you a little less <span class='red'>sociable</span>.",
    callback: function() {setup.changeCoreStats(0, 0, -1)}
};
var babyOutcome4_3 = {
    description: "It turns out that mush was mashed broccoli!\n \
        It's healthy and nutritious, but tasting it first was a good idea.\n \
        You become <span class='green'>stronger</span> and <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(1, 1, 0)}
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
        ["Point it out to your parents", babyOutcome1_3]
    ])
};
var babyEvent2 = {
    description: "You see a clear bag filled with a brightly colored liquid.\n\n\
        What do you do?\n",
    options: new Map([
        ["Lick it", babyOutcome2_1],
        ["Put it in your mouth", babyOutcome2_2],
        ["Leave it alone", babyOutcome2_3],
        ["Play with it", babyOutcome2_4]
    ])
};
var babyEvent3 = {
    description: "Something shiny and flat fell onto the ground.\n\n\
        What do you do?\n",
    options: new Map([
        ["Point it out to your parents", babyOutcome3_1],
        ["Put it in your mouth", babyOutcome3_2],
        ["Leave it alone", babyOutcome3_3],
        ["Play with it", babyOutcome3_4]
    ])
};
var babyEvent4 = {
    description: "Your parents place a stinky, sticky, green mush in front of you.\n\n\
        What do you do?\n",
    options: new Map([
        ["Eat it", babyOutcome4_1],
        ["Throw it away", babyOutcome4_2],
        ["Taste it", babyOutcome4_3]
    ])
};
var babyEvents = new Array(babyEvent1, babyEvent2, babyEvent3, babyEvent4);

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