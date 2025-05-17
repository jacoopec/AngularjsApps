export function MicrotaskComponentController() {
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
