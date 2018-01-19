require('./toolbar.scss');

module.exports = ($route, $location) => {
  return {
    restrict: 'E',
    scope: {},
    template: (require('./toolbar.jade'))(null),
    link: (scope, elem, attrs) => {
      scope.components = Object.values($route.routes).filter(route => route.title);
      var reformattedArray = scope.components.map((obj) => {
         var rObj = {};
         rObj[obj.title] = obj.originalPath;
         return rObj;
      });
      scope.activeComponent = $route.current.$$route.title;
      scope.go = (path) => {
        $location.path(path);
      };
      scope.setComponent = (componentTitle) => {
        scope.activeComponent = componentTitle;
        scope.go(reformattedArray[componentTitle].originalPath);
      };
    }
  };
};
