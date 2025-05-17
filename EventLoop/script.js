angular.module('eventLoopSim', [])
    .controller('EventLoopController', function($interval, $timeout) {
      const vm = this;

      // Queues and state
      vm.callStack = [];
      vm.webApis = [];
      vm.taskQueue = [];
      vm.microtaskQueue = ['one','two','three'];
      vm.isSpinning = false;

      // Internal counters for naming
      let taskCount = 1;
      let microtaskCount = 1;
      let webApiCount = 1;

      // Button actions
      vm.addTask = function() {
        vm.taskQueue.push('Task ' + taskCount++);
      };

      vm.addMicrotask = function() {
        vm.microtaskQueue.push('Microtask ' + microtaskCount++);
        console.log(vm.microtaskQueue)
      };

      vm.flashTaskIndex = -1; // To highlight a task when added






      vm.addWebApi = function() {
        const taskName = 'Web API ' + webApiCount++;
        vm.webApis.push(taskName);
        vm.animateWebApiIn = true;

        // Simulate moving from Web API to Task Queue after 2s
        $timeout(() => {
          const index = vm.webApis.indexOf(taskName);
          if (index !== -1) {
            vm.webApis.splice(index, 1);
            vm.taskQueue.push(taskName);

            // Trigger flash animation on added task
            vm.flashTaskIndex = vm.taskQueue.length - 1;
            $timeout(() => {
              vm.flashTaskIndex = -1;
            }, 600);
          }
        }, 2000);
      };







      function runEventLoopCycle() {
        console.log('event loop');
        vm.isSpinning = true;
        vm.animateIn = false;

        $timeout(() => {
          let movedTask = null;

          // Microtasks have priority
          if (vm.microtaskQueue.length > 0) {
            movedTask = vm.microtaskQueue.shift();
          } else if (vm.taskQueue.length > 0) {
            movedTask = vm.taskQueue.shift();
          }

          if (movedTask) {
            vm.callStack.push(movedTask); // Add to end so it's $last for animation
            vm.animateIn = true;

            // Remove from call stack after delay
            $timeout(() => {
              vm.callStack.pop();
              vm.isSpinning = false;
            }, 600);
          } else {
            vm.isSpinning = false;
          }
        }, 400);
      }





      
      // Start the event loop every 2 seconds
      $interval(runEventLoopCycle, 1000);
    });