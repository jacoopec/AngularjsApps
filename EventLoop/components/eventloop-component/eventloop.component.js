angular.module('eventLoopSim', []).component('eventloop-component', {
    templateUrl: './eventloop.template.html',
    controller: 'EventloopComponentController',
    bindings: {
      inputData: '<',
      onUpdate: '&'
    }
  });