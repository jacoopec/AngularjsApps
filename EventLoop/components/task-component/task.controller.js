angular.module('event-loop-app', []).controller('TaskComponentController', function() {
    const vm = this;

    vm.$onInit = function() {
      // Initialization logic here
    };

    vm.doSomething = function() {
      // Handle interactions
      vm.onUpdate({ data: vm.inputData });
    };
  });
