require('./toolbar.scss');

module.exports = ($route, $location) => {
  return {
    restrict: 'E',
    scope: {},
    template: (require('./toolbar.jade'))(null),
    link: (scope, elem, attrs) => {

      const components = Object.values($route.routes).filter(route => route.title);

      scope.components = components;
      var reformattedArray = Object.values($route.routes)
      .filter(route => route.title)
      .map((obj) => {
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
        var path = reformattedArray.filter(e => {
          return Object.keys(e).toString() === componentTitle;
        });
        scope.go(path[0][componentTitle]);
      };
    }
  };
};
