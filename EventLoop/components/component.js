(function() {
  // Define the controller
  function MicrotaskController() {
    const vm = this;

    vm.$onInit = function() {
      // Provide default status if missing
      if (!vm.task.status) {
        vm.task.status = 'pending';
      }

      // Display name transformation
      vm.displayName = vm.task.name.toUpperCase();

      console.log('MicrotaskComponent initialized with:', vm.task);
    };
  }

  // Register the component
  angular.module('myApp')
    .component('componentF', {
      bindings: {
        task: '<' // One-way binding of task object
      },
      controller: MicrotaskController,
      template: `
        <div class="microtask-item">
          <strong>{{ $ctrl.displayName }}</strong><br>
          <small>Status: {{ $ctrl.task.status }}</small>
        </div>
      `
    });
})();
