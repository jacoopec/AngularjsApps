angular.module('event-loop-app', []).component('task-component', {
    templateUrl: './task-component.template.html',
    controller: 'TaskComponentController',
    bindings: {
      inputData: '<',
      onUpdate: '&'
    }
  });