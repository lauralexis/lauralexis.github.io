require('./toolbar.scss');

module.exports = ($route, $location) => {
  return {
    restrict: 'E',
    scope: {},
    template: (require('./toolbar.jade'))(null),
    link: (scope, elem, attrs) => {

      const components = Object.values($route.routes).filter(route => route.title);
      const componentDictionary = {};

      components.forEach(component => {
        componentDictionary[component.title] = component.originalPath;
      });

      scope.components = components;
      scope.activeComponent = $route.current.$$route.title;
      scope.go = (path) => {
        $location.path(path);
      };

      scope.setComponent = (componentTitle) => {
        scope.activeComponent = componentTitle;
        scope.go(componentDictionary[componentTitle]);
      };
    }
  };
};
