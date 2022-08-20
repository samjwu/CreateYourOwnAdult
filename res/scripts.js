// using global window object

// using SugarCube's author-use setup object
setup.initializeStats = function() {
    state.active.variables.strength = 0;
    state.active.variables.intelligence = 0;
    state.active.variables.charm = 0;
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