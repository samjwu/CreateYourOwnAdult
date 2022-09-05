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

var childOutcome4_1 = {
    description: "You decide that you want to be a sports star.\n \
        Now that you have a goal, you focus on being more <span class='green'>fit</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var childOutcome4_2 = {
    description: "You decide that you want to be a lawyer.\n \
        Now that you have a goal, you focus on being more <span class='blue'>intelligent</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var childOutcome4_3 = {
    description: "You decide that you want to be a doctor.\n \
        Now that you have a goal, you focus on being more <span class='green'>intelligent</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var childOutcome4_4 = {
    description: "You decide that you want to be a movie star.\n \
        Now that you have a goal, you focus on being more <span class='red'>charismatic</span>.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};
var childOutcome4_5 = {
    description: "You decide that you want to be a software developer.\n \
        Given your goal, you are clearly a very <span class='blue'>intelligent</span> child.",
    callback: function() {setup.changeCoreStats(0, 3, 0)}
};

var childOutcome5_1 = {
    description: "You dress up as a super hero!\n \
        Your choice of costume reflects your desire to be <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var childOutcome5_2 = {
    description: "You dress up as a robot!\n \
        Your choice of costume reflects your desire to be <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var childOutcome5_3 = {
    description: "You dress up as a celebrity!\n \
        Your choice of costume reflects your desire to be <span class='red'>sociable</span>.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};
var childOutcome5_4 = {
    description: "You dress up as a blob!\n \
        Wait, what? A blob? Really?\n \
        Ok, your choice of costume reflects your lack of <span class='blue'>imagination</span>.",
    callback: function() {setup.changeCoreStats(0, -1, 0)}
};

var teenOutcome1_1 = {
    description: "You take a small sip of the alcohol.\n \
        Bad idea.\n \
        No one is impressed, and you lose a few <span class='blue'>brain</span> cells.",
    callback: function() {setup.changeCoreStats(0, -1, 0)}
};
var teenOutcome1_2 = {
    description: "You take a big drink from the alcohol bottle.\n \
        Terrible idea.\n \
        Some of the other kids are impressed, but you lose some <span class='blue'>brain</span> cells.",
    callback: function() {setup.changeCoreStats(0, -2, 1)}
};
var teenOutcome1_3 = {
    description: "You grab the bottle and drink it all down.\n \
        That was the worst thing you could have done.\n \
        The other kids are <span class='red'>annoyed</span> at you for drinking it all and you lose a lot of <span class='blue'>brain</span> cells.",
    callback: function() {setup.changeCoreStats(0, -3, -1)}
};
var teenOutcome1_4 = {
    description: "You offer and excuse and politely decline the bottle.\n \
        Good choice.\n \
        The other kids are <span class='red'>respect</span> your decision and your choice demonstrates your <span class='blue'>wisdom</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 1)}
};
var teenOutcome1_5 = {
    description: "You refuse to drink the alcohol.\n \
        The other kids shrug and continue passing the bottle.\n \
        Your good decision makes you a bit <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};

var teenOutcome2_1 = {
    description: "You are a brainless jock! Just kidding.\n \
        Your choice to join a sports club makes you <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var teenOutcome2_2 = {
    description: "You are a nerd! Just kidding. Not really.\n \
        Your choice to join an intellectual club makes you, well, more <span class='blue'>intelligent</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var teenOutcome2_3 = {
    description: "You are a socialite!\n \
        Your choice of club makes you more <span class='red'>social</span>.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};

var teenOutcome3_1 = {
    description: "Alright! You have dedicated yourself to pumping iron and becoming a swole gym bro.\n \
        What's that you say? Gymnastics isn't just working out in a gym? Why is it called gymnastics then?.\n \
        Anyways, you get <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var teenOutcome3_2 = {
    description: "Step 1. Study business\n \
        Step 2. ???\n \
        Step 3. Become more <span class='blue'>intelligent</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var teenOutcome3_3 = {
    description: "You study psychology and now understand <span class='red'>social</span> interactions better.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};

var teenOutcome4_1 = {
    description: "You decide to work out in your free time.\n \
        Due to your training, you get <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var teenOutcome4_2 = {
    description: "You decide to play video games in your free time.\n \
        Contrary to what some people may claim, playing games is not a good way to improve the mind-muscle connection.\n \
        You become slightly <span class='green'>weaker</span> due to your sedentary lifestyle.",
    callback: function() {setup.changeCoreStats(-1, 0, 0)}
};
var teenOutcome4_3 = {
    description: "You decide to watch TV.\n \
        Despite what your parents may have said, watching TV won't literally rot your brain.\n \
        Except in this game. In this game, watching TV rots your brain.\n \
        You become significantly <span class='blue'>dumber</span>.",
    callback: function() {setup.changeCoreStats(0, -2, 0)}
};
var teenOutcome4_4 = {
    description: "You decide to study in your free time.\n \
        Due to your effort, you become <span class='blue'>smarter</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var teenOutcome4_5 = {
    description: "You decide to hang out with your friends in your free time.\n \
        Your <span class='red'>social</span> skills improve.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};

var teenOutcome5_1 = {
    description: "You decide to go swimming.\n \
        With regular exercise, you get <span class='green'>stronger</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var teenOutcome5_2 = {
    description: "You decide to get a summer job.\n \
        It's not much fun, but your parents commend you for your <span class='blue'>wise</span> use of time.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var teenOutcome5_3 = {
    description: "You decide to go camping with some friends.\n \
        Your <span class='red'>social</span> skills improve.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
};

var adultOutcome1_1 = {
    description: "You suck it up and get your taxes done.\n \
        Twas the terrifying taxing task to... do, but you do get a bonus to your <span class='green'>strength</span> and <span class='blue'>intelligence</span> for your mental fortitude.",
    callback: function() {setup.changeCoreStats(1, 1, 0)}
};
var adultOutcome1_2 = {
    description: "Taxes? Just get someone else to handle that.\n \
        You hire an accountant to help you with your taxes. <span class='blue'>Smart</span> move.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var adultOutcome1_3 = {
    description: "Didn't you already learn from your mistakes in high school? No?\n \
        Well, the consequences of procrastination are a bit more taxing this time.\n \
        You lose some <span class='red'>reputation</span> since you forgot to file your taxes.",
    callback: function() {setup.changeCoreStats(0, 0, -1)}
};
var adultOutcome1_4 = {
    description: "You decided to not file your taxes.\n \
        Bad move.\n \
        Your <span class='blue'>foolish</span> decision costs you some <span class='red'>reputation</span>.",
    callback: function() {setup.changeCoreStats(0, -1, -1)}
};

var adultOutcome2_1 = {
    description: "You get a job in the blue collar industry.\n \
        You get a bonus to your <span class='green'>strength</span>.",
    callback: function() {setup.changeCoreStats(1, 0, 0)}
};
var adultOutcome2_2 = {
    description: "You get a job in the white collar industry.\n \
        You get a bonus to your <span class='blue'>intelligence</span>.",
    callback: function() {setup.changeCoreStats(0, 1, 0)}
};
var adultOutcome2_3 = {
    description: "You get a job in the pink collar industry.\n \
        You get a bonus to your <span class='red'>charm</span>.",
    callback: function() {setup.changeCoreStats(0, 0, 1)}
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
var childEvent4 = {
    description: "Your teacher asks the students in your class a question about their futures.\n\n\
        What do you want to be when you grow up?\n",
    options: new Map([
        ["A sports star", childOutcome4_1],
        ["A lawyer", childOutcome4_2],
        ["A doctor", childOutcome4_3],
        ["A movie star", childOutcome4_4],
        ["A software developer", childOutcome4_5]
    ])
};
var childEvent5 = {
    description: "It's Halloween!.\n\n\
        What is your costume?\n",
    options: new Map([
        ["A super hero", childOutcome5_1],
        ["A robot", childOutcome5_2],
        ["A celebrity", childOutcome5_3],
        ["A blob", childOutcome5_4]
    ])
};
var childEvents = new Array(childEvent1, childEvent2, childEvent3, childEvent4, childEvent5);

var teenEvent1 = {
    description: "Some of your less reputable classmates have obtained a bottle of alcohol.\n\n\
        They pass the bottle to you and tell you to take a swig.\n\n\
        What do you do?\n",
    options: new Map([
        ["Sip it", teenOutcome1_1],
        ["Take a drink", teenOutcome1_2],
        ["Chug it", teenOutcome1_3],
        ["Politely decline", teenOutcome1_4],
        ["Refuse", teenOutcome1_5]
    ])
};
var teenEvent2 = {
    description: "It's freshman year and clubs are recruiting!\n\n\
        Which club do you want to join?\n",
    options: new Map([
        ["Soccer", teenOutcome2_1],
        ["Basketball", teenOutcome2_1],
        ["Football", teenOutcome2_1],
        ["Chess", teenOutcome2_2],
        ["Math", teenOutcome2_2],
        ["Debate", teenOutcome2_2],
        ["Drama", teenOutcome2_3],
        ["Dance", teenOutcome2_3],
        ["Music", teenOutcome2_3]
    ])
};
var teenEvent3 = {
    description: "It's time to pick an elective!\n\n\
        What do you choose?\n",
    options: new Map([
        ["Gymnastics", teenOutcome3_1],
        ["Business", teenOutcome3_2],
        ["Psychology", teenOutcome3_3],
    ])
};
var teenEvent4 = {
    description: "You have more free time now and have to pick a pastime.\n\n\
        What do you do?\n",
    options: new Map([
        ["Work out", teenOutcome4_1],
        ["Play games", teenOutcome4_2],
        ["Watch TV", teenOutcome4_3],
        ["Study", teenOutcome4_4],
        ["Hang out with friends", teenOutcome4_5],
    ])
};
var teenEvent5 = {
    description: "It's summer vacation!\n\n\
        What do you do?\n",
    options: new Map([
        ["Go swim", teenOutcome5_1],
        ["Get a job", teenOutcome5_2],
        ["Go camping", teenOutcome5_3],
    ])
};
var teenEvents = new Array(teenEvent1, teenEvent2, teenEvent3, teenEvent4, teenEvent5);

var adultEvent1 = {
    description: "It's time for the best part of being an adult.\n\n\
        Doing your taxes!\n\n\
        How do you handle this?\n",
    options: new Map([
        ["Tough it out and just do it", adultOutcome1_1],
        ["Get an accountant to do it for you", adultOutcome1_2],
        ["I'll do it later", adultOutcome1_3],
        ["Nope", adultOutcome1_4]
    ])
};
var adultEvent2 = {
    description: "Time to find a job!\n\n\
        Which industry do you go for?\n",
    options: new Map([
        ["Blue collar", adultOutcome2_1],
        ["White collar", adultOutcome2_2],
        ["Pink collar", adultOutcome2_3],
    ])
};
var adultEvents = new Array(adultEvent1, adultEvent2);

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