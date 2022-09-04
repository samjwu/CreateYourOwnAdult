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
        You improved your <span class='red'>social</span> skills a bit.\n \
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
        You improved your <span class='red'>social</span> skills a bit.\n \
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

var babyOutcome5_1 = {
    description: "Um, ok.\n \
        Not sure why you did that.\n \
        You become much less <span class='red'>sociable</span>.",
    callback: function() {setup.changeCoreStats(0, 0, -2)}
};
var babyOutcome5_2 = {
    description: "The other baby smiles and waves back at you.\n \
        You become a little more <span class='red'>sociable</span>.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};
var babyOutcome5_3 = {
    description: "You and the other baby play together.\n \
        You become much more <span class='red'>sociable</span>.",
    callback: function() {setup.changeCoreStats(0, 0, 2)}
};

var childOutcome1_1 = {
    description: "You are fearless!\n \
        Riding a bike doesn't scare you!\n \
        You fall off a few times, but that just makes you <span class='green'>tougher</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var childOutcome1_2 = {
    description: "You are clever.\n \
        Better to learn from someone else's mistakes instead of making your own.\n \
        This experience has made you <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var childOutcome1_3 = {
    description: "You know when to ask for help.\n \
        Cooperation can get you far in life.\n \
        This experience makes you a little more <span class='red'>sociable</span>.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};

var childOutcome2_1 = {
    description: "You accept the dare and start dancing halfway though math class.\n \
        You get sent to the principal's office.\n \
        You miss some lessons due to detention and get a bit <span class='blue'>dumber</span>, \
        but at least your friends <span class='red'>like</span> you more.",
    callback: function() {setup.changeCoreStats(0, -1, 2)}
};
var childOutcome2_2 = {
    description: "You refuse the dare and pay attention in math class.\n \
        You become <span class='blue'>smarter</span> because you listen in class, \
        but at your friends <span class='red'>lose</span> some respect for you.",
    callback: function() {setup.changeCoreStats(0, 2, -1)}
};
var childOutcome2_3 = {
    description: "You distract your friends by suddenly doing your best impersonation of a monkey.\n \
        Your friends laugh at your antics and forget all about the dare.\n \
        They <span class='red'>like</span> you a bit more.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};

var childOutcome3_1 = {
    description: "Nobody messes with you. \n \
        You punch the bully and take back your lunch money.\n \
        Other kids hear about what you did and you gain a reputation for being <span class='green'>tough</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var childOutcome3_2 = {
    description: "You wisely tattle on the bully.\n \
        The bully's parents force him to return your money and harshly punish him.\n \
        Your actions were <span class='blue'>clever</span>, but you lose some reputation because kids <span class='red'>dislike</span> tattletales.",
    callback: function() {setup.changeCoreStats(0, 1, -1)}
};
var childOutcome3_3 = {
    description: "You try to take the high road, and attempt to reason with the bully.\n \
        This is admirable, but inadvisable. The bully just punches you again and walks away.\n \
        At least other people think what you did was <span class='blue'>mature</span> and <span class='red'>respect</span> you a bit more.",
    callback: function() {setup.changeCoreStats(0, 1, 1)}
};
var childOutcome3_4 = {
    description: "You laugh and thank the bully for having the decency to provide you with medicine to heal the bruise he caused.\n \
        When the bully stares at you blankly, you quote the idiom 'Laughter is the best medicine'.\n \
        Unfortunately for you, this bully is just smart enough to understand that you insulted him, and punches you again in retaliation.\n \
        Your face hurts for a long time after, and you feel <span class='green'>weaker</span>.\n \
        However, your peers find your insult <span class='red'>funny</span> and congratulate you for your <span class='blue'>wit</span>.",
    callback: function() {setup.changeCoreStats(-1, 2, 2)}
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
var babyEvent5 = {
    description: "You see another baby in your room.\n\n\
        What do you do?\n",
    options: new Map([
        ["Punch it", babyOutcome5_1],
        ["Wave to it", babyOutcome5_2],
        ["Share your toys with it", babyOutcome5_3]
    ])
};
var babyEvents = new Array(babyEvent1, babyEvent2, babyEvent3, babyEvent4, babyEvent5);

var childEvent1 = {
    description: "Your parents bought you a bicycle.\n\n\
        What do you do with it?\n",
    options: new Map([
        ["Jump on and try to ride it", childOutcome1_1],
        ["Watch how other kids ride their bikes first", childOutcome1_2],
        ["Ask your parents to help you ride it", childOutcome1_3]
    ])
};
var childEvent2 = {
    description: "Your friends dare you to start dancing in the middle of class.\n\n\
        What do you do?\n",
    options: new Map([
        ["Accept the dare", childOutcome2_1],
        ["Refuse the dare", childOutcome2_2],
        ["Suggest doing something else", childOutcome2_3]
    ])
};
var childEvent3 = {
    description: "The local bully punches you and takes your lunch money.\n\n\
        What do you do?\n",
    options: new Map([
        ["Beat the bully up", childOutcome3_1],
        ["Tell the bully's parents what happened", childOutcome3_2],
        ["Try to reason with the bully", childOutcome3_3],
        ["Insult the bully", childOutcome3_4]
    ])
};
var childEvents = new Array(childEvent1, childEvent2, childEvent3);

var teenEvents = new Array();

var adultEvents = new Array();

var seniorEvents = new Array();

window.eventPool = new Array(babyEvents, childEvents, teenEvents, adultEvents, seniorEvents);

window.seenEvents = new Set();

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
        state.active.variables.actionsPerformed += 1;
        if (state.active.variables.actionsPerformed >= 3) {
            state.active.variables.actionsPerformed = 0;
            seenEvents.clear();
            state.active.variables.age += 1;
            $(optionSelector).html("Congratulations! You have grown older and become a <span class='yellow'>" 
            + setup.getAgeString(state.active.variables.age)) + "</span>";
        }
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