// using global window Array
window.ageMap = new Map([
    [-1, "unborn"],
    [0, "baby"],
    [1, "child"],
    [2, "teen"],
    [3, "adult"],
    [4, "senior"],
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

setup.changeStrength = function(change) {
    state.active.variables.strength += change;
}

setup.changeIntelligence = function(change) {
    state.active.variables.intelligence += change;
}

setup.changeCharm = function(change) {
    state.active.variables.charm += change;
}