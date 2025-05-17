
angular.module('eventLoopSim', []).component('microtaskComponent', {
    template: `<div class="microtask">dddd
    {{$ctrl.task}}
</div>`,
    bindings: {
      task: '<' 
    },
    controller: function() {
      const vm = this;

      vm.$onInit = function() {
        // Initialization logic
        console.log('Microtask received:', vm.task);
      };

      vm.doSomething = function() {
        // Handle interactions
        vm.onUpdate({ data: vm.inputData });
      };
  }

  });