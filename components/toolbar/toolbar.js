require('./toolbar.scss');

module.exports = ($route, $location) => {
  return {
    restrict: 'E',
    scope: {},
    template: (require('./toolbar.jade'))(null),
    link: (scope, elem, attrs) => {
      scope.components = Object.values($route.routes).filter(route => route.title);
      scope.activeComponent = $route.current.$$route.title;
      scope.go = (path) => {
        $location.path(path);
      };
      scope.setComponent = (component) => {
        scope.activeComponent = component.title;
        scope.go(component.originalPath);
      };
    }
  };
};
