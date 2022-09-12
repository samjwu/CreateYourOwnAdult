// using global window Array
window.ageMap = new Map([
    [-1, "unborn"],
    [0, "baby"],
    [1, "child"],
    [2, "teen"],
    [3, "adult"],
    [4, "senior"],
    [5, "dead"]
]);

// using SugarCube's author-use setup object
setup.initializeStats = function() {
    state.active.variables.age = -1;

    state.active.variables.strength = 0;
    state.active.variables.intelligence = 0;
    state.active.variables.charm = 0;
}

setup.getAgeString = function(ageInt) {
    return ageMap.get(ageInt);
}

setup.getStrString = function(val) {
    if (val <= 0) {
        return "feeble";
    } else if (val == 1) {
        return "weak";
    } else if (val == 2) {
        return "soft";
    } else if (val == 3) {
        return "strong";
    } else if (val == 4) {
        return "powerful";
    }
    return "herculean";
}

setup.getIntString = function(val) {
    if (val <= 0) {
        return "brainless";
    } else if (val == 1) {
        return "foolish";
    } else if (val == 2) {
        return "mediocre";
    } else if (val == 3) {
        return "intelligent";
    } else if (val == 4) {
        return "brilliant";
    }
    return "genius";
}

setup.getChaString = function(val) {
    if (val <= 0) {
        return "repugnant";
    } else if (val == 1) {
        return "offensive";
    } else if (val == 2) {
        return "unfriendly";
    } else if (val == 3) {
        return "charming";
    } else if (val == 4) {
        return "magnetizing";
    }
    return "transcendental";
}

setup.changeStrength = function(change) {
    state.active.variables.strength += change;
}

setup.changeIntelligence = function(change) {
    state.active.variables.intelligence += change;
}

setup.changeCharm = function(change) {
    state.active.variables.charm += change;
}

setup.changeCoreStats = function(changeStr, changeInt, changeCha) {
    state.active.variables.strength += changeStr;
    state.active.variables.intelligence += changeInt;
    state.active.variables.charm += changeCha;
}