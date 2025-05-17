angular.module('stockApp').component('fancyCard', {
  bindings: {
    title: '@',
    value: '@',
    icon: '@',
    subtitle: '@'
  },
  template: `
    <div class="fancy-card">
      <div class="icon-area">
        <i class="{{$ctrl.icon}}"></i>
      </div>
      <div class="text-area">
        <h3>{{$ctrl.title}}</h3>
        <p class="value">{{$ctrl.value}}</p>
        <p class="subtitle">{{$ctrl.subtitle}}</p>
      </div>
    </div>
  `
});
