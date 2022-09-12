setup.determineFinalScore = function(textSelector) {
    var finalScoreText = "At your funeral, everyone remembers you for being ";

    if (state.active.variables.strength >= 5 && state.active.variables.intelligence >= 5 && state.active.variables.charm >= 5) {
        finalScoreText += "a <span class='yellow'>modern Renaissance person</span>, skilled in every aspect of life.";
    } else if (state.active.variables.strength >= 5) {
        finalScoreText += "a <span class='green'>superhuman</span>, capable of incredible physical feats.";
    } else if (state.active.variables.intelligence >= 5) {
        finalScoreText += "a <span class='blue'>genius</span>, with an intellect surpassing all your peers.";
    } else if (state.active.variables.charm >= 5) {
        finalScoreText += "a <span class='red'>charmer</span>, with charisma to spare.";
    } else if (state.active.variables.strength == 4 || state.active.variables.intelligence == 4 || state.active.variables.charm == 4) {
        finalScoreText += "a <span class='yellow'>wildly successful person</span> in life, though not quite great enough to be noted in history.";
    } else if (state.active.variables.strength == 3 || state.active.variables.intelligence == 3 || state.active.variables.charm == 3) {
        finalScoreText += "a <span class='yellow'>mildly successful person</span> in life, though unable to achieve anything notable.";
    } else if (state.active.variables.strength == 2 || state.active.variables.intelligence == 2 || state.active.variables.charm == 2) {
        finalScoreText += "a <span class='yellow'>nobody</span>, remembered by few and forgotten by many.";
    } else {
        finalScoreText += "an <span class='yellow'>utter failure</span>, failing to achieve anything in your lifetime.";
    }

    setup.waitForElement(textSelector).then(() => {
        $(textSelector).html(finalScoreText);
    });
}