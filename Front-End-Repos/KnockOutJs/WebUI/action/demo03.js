/// <reference path="../js/knockout-3.4.2.debug.js" />

var country = function (name, population) {
    this.countryName = name;
    this.countryPopulation = population;
};
viewModel = {
    availableCountries: ko.observableArray([
        new country("UK", 65000000),
        new country("USA", ''),
        new country("Sweden", 29000000)
    ]),
    selectedCountry: ko.observable()
};

alert(viewModel.selectedCountry());
setTimeout(function () { console.log(viewModel.selectedCountry()); }, 2000);
ko.applyBindings(viewModel);