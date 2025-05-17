angular.module('eventLoopSim', []).controller('EventloopComponentController', function() {
    const vm = this;

    vm.$onInit = function() {
      // Initialization logic here
    };

    vm.doSomething = function() {
      // Handle interactions
      vm.onUpdate({ data: vm.inputData });
    };
  });
