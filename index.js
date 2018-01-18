const angular = require ('angular');
require ('./index.scss');

angular.module('styleguide', [
  require('angular-route')
  // require('angular-material'),
  // require('angular-aria'),
  // require('angular-animate'),
  // require('angular-messages')
])

.config( ($locationProvider, $routeProvider) => {
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
  });
  return $routeProvider.when('/', {
    title: 'Styleguide',
    template: require('./app/overview.jade'),
    controller: 'StyleguideController'
  });
  // .when('/styleguide/avatar', {
  //   title: 'Avatar',
  //   template: require('./styleguide-components/avatar.jade')
  // })
  // .when('/styleguide/checkboxes', {
  //   title: 'Checkboxes',
  //   template: require('./styleguide-components/checkboxes.jade'),
  //   controller: 'CheckboxesController'
  // })
  // .when('/styleguide/error-patterns', {
  //   title: 'Error patterns',
  //   template: require('./styleguide-components/error-patterns.jade'),
  //   controller: 'ErrorPatternsController'
  // })
  // .when('/styleguide/icons', {
  //   title: 'Icons',
  //   template: require('./styleguide-components/icons.jade'),
  //   controller: 'IconsController'
  // })
  // .when('/styleguide/infotips', {
  //   title: 'Infotips',
  //   template: require('./styleguide-components/infotips.jade')
  // })
  // .when('/styleguide/loaders', {
  //   title: 'Loaders',
  //   template: require('./styleguide-components/loaders.jade')
  // })
  // .when('/styleguide/modals', {
  //   title: 'Modals',
  //   template: require('./styleguide-components/modals.jade'),
  //   controller: 'ModalsController'
  // })
  // .when('/styleguide/radio-buttons', {
  //   title: 'Radio buttons',
  //   template: require('./styleguide-components/radio-buttons.jade')
  // })
  // .when('/styleguide/select-menus', {
  //   title: 'Select menus',
  //   template: require('./styleguide-components/select-menus.jade'),
  //   controller: 'SelectMenusController'
  // })
  // .when('/styleguide/tables', {
  //   title: 'Tables',
  //   template: require('./styleguide-components/tables.jade'),
  //   controller: 'TablesController'
  // })
  // .when('/styleguide/text-fields', {
  //   title: 'Text fields',
  //   template: require('./styleguide-components/text-fields.jade'),
  //   controller: 'TextFieldsController'
  // })
  // .when('/styleguide/typography', {
  //   title: 'Typography',
  //   template: require('./styleguide-components/typography.jade')
  // });
})
// .directive('infotip', require('../tools/infotip/infotip.coffee'))
// .directive('icon', require('../tools/icon/icon.coffee'))
// .directive('indeterminate', require('../tools/checkbox/indeterminate.coffee'))
// .directive('copyToClipboard', require('../tools/copy-to-clipboard/copy-to-clipboard.coffee'))
// .directive('referralLink', require('../tools/referral-link/referral-link.coffee'))
// .factory('ComponentDirectorySerive', function($route) {
//   var components;
//   components = _.values($route.routes).filter(function(e) {
//     return e.title;
//   });
//   return {
//     shareComponents: function() {
//       return components;
//     }
//   };
// })
.controller('StyleguideController', function($scope, $route, $location) {
  console.log('styleguide-controller');
  // var ref;
  // $scope.activeComponent = (ref = $route.current) != null ? ref.$$route.title : void 0;
  // $scope.components = _.values($route.routes);
  // return $scope.go = function(path) {
  //   return $location.path(path);
  // };
});
// .controller('NavController', function($scope, $location, ComponentDirectorySerive) {
//   $scope.components = ComponentDirectorySerive.shareComponents();
//   $scope.activeComponent = $location.path();
//   $scope.go = function(path) {
//     return $location.path(path);
//   };
//   return $scope.setComponent = function(component) {
//     $scope.activeComponent = component.title;
//     return $location.path(component.originalPath);
//   };
// })
// .controller('SelectMenusController', function($scope, ComponentDirectorySerive) {
//   var ADVISOR, ALL, CONTRACTOR;
//   $scope.components = ComponentDirectorySerive.shareComponents();
//   ALL = 'all';
//   ADVISOR = 'advisor';
//   CONTRACTOR = 'contractor';
//   $scope.roles = [ALL, ADVISOR, CONTRACTOR];
//   $scope.selectedRole = $scope.roles[0];
//   return $scope.roleName = function(role) {
//     switch (role) {
//       case ALL:
//         return 'All';
//       case ADVISOR:
//         return 'Advisors';
//       case CONTRACTOR:
//         return 'Contractors';
//     }
//   };
// })
// .controller('CheckboxesController', function($scope) {
//   $scope.isIndeterminate = true;
//   return $scope.makeIndeterminate = function() {
//     return $scope.isIndeterminate = !$scope.isIndeterminate;
//   };
// })
// .controller('IconsController', function($scope) {
//   $scope.symbols = ferrous.icons.allSymbols;
//   return $scope.frames = ferrous.icons.allVariations().map(function(str) {
//     return str.replace(/^icon-/g, '').replace(/^icon/g, 'none');
//   });
// })
// .controller('ModalsController', function($scope, ModalService) {
//   $scope.showModal_1 = function() {
//     return ModalService.showModal({
//       template: (require('./styleguide-components/modals/variations/financial-plans-template.jade'))(null),
//       controller: 'ModalController'
//     });
//   };
//   return $scope.showModal_2 = function() {
//     return ModalService.showModal({
//       template: (require('./styleguide-components/modals/variations/financial-plans-readonly-template.jade'))(null),
//       controller: 'ModalController'
//     });
//   };
// })
// .controller('ModalController', function($scope, close) {
//   return $scope.close = function() {
//     return close(true);
//   };
// })
// .controller('TablesController', function($scope) {
//   return $scope.entries = [
//     {
//       name: 'Alan McGee',
//       email: 'alan@gust.com',
//       orgname: 'Acme Accelerator',
//       totalPercentage: 22.2,
//       totalShares: 1000000,
//       commonStock: 1000000,
//       options: null
//     }, {
//       name: 'Bob Nadler',
//       email: 'bob@wcombinator.com',
//       orgname: 'W Combinator',
//       totalPercentage: 0.11,
//       totalShares: 5000,
//       commonStock: 5000,
//       options: null
//     }, {
//       name: 'Jason Calabrese Payne-Gaposchkin',
//       email: 'jason.calabrese+payne-gaposchkin@gust.com',
//       totalPercentage: 44.4,
//       totalShares: 2000000,
//       commonStock: 2000000,
//       options: null
//     }, {
//       name: 'Mike Frederick',
//       email: 'mike@gust.com',
//       totalPercentage: 12.76,
//       totalShares: 575000,
//       commonStock: 500000,
//       options: 75000
//     }, {
//       name: 'Noah Gordon',
//       email: 'noah@gust.com',
//       totalPercentage: 2,
//       totalShares: 90000,
//       commonStock: null,
//       options: 90000
//     }
//   ];
// })
// .controller('TextFieldsController', function($scope, $timeout) {
//   $scope.email = 'laura@gust.com';
//   $scope.invalidSsn = 'XYJBZ';
//   return $scope.errorEmail = 'blargh@gust.net';
// })
// .controller('ErrorPatternsController', function($scope) {
//   $scope.inFocus1 = false;
//   return $scope.showHints = function(errors, touched) {
//     if (errors.required && touched) {
//       return false;
//     } else if (Object.keys(errors).length > 0 && !errors.required) {
//       return false;
//     } else {
//       return true;
//     }
//   };
// })
