module.exports = ($route, $location) => {
  return {
    restrict: 'E',
    scope: {},
    template: (require('./toolbar.jade'))(null),
    link: (scope, elem, attrs) => {
      scope.components = Object.values($route.routes).filter(route => route.title);
      scope.activeComponent = $route.current.$$route.title;
      scope.go = (originalPath) => {
        $location.path(originalPath);
      };
      scope.setComponent = (component) => {
        scope.activeComponent = component.title;
        $location.path(component.originalPath);
      };
    }
  };
};
