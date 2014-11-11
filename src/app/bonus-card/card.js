(function() {
  'use strict';

  angular
    .module('cups.bonusCard')
    .controller('card', card);

  card.$inject = ['$routeParams', 'cupper'];

  function card($routeParams, cupper) {

    var card = this;
    var matriculationNumber = $routeParams.matriculationNumber;

    card.cupper = {};
    card.getCupper = getCupper;

    getCupper();

    function getCupper(){

    return cupper
      .getBy(matriculationNumber)
      .then(function(cupper){

          card.cupper = cupper;
          return card.cupper;
        });
    }
  }
}());