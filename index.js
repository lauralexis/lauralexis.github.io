const angular = require ('angular');
require ('./index.scss');
require ('angular-material/angular-material.scss');

angular.module('styleguide', [
  require('angular-route'),
  require('angular-material'),
  require('angular-aria'),
  require('angular-animate'),
  require('angular-messages')
])

.config( ($routeProvider) => {
  $routeProvider
    .when('/styleguide', {
      title: 'Styleguide',
      template: require('./app/overview.jade')
    })
    .when('/avatar', {
      title: 'Avatar',
      template: require('./app/avatar.jade')
    })
    .when('/cards', {
      title: 'Cards',
      template: require('./app/cards.jade')
    })
    .when('/checkboxes', {
      title: 'Checkboxes',
      template: require('./app/checkboxes.jade')
      // controller: 'CheckboxesController'
    })
    .when('/color', {
      title: 'Color',
      template: require('./app/color.jade')
      // controller: 'ColorController'
    })
    .when('/illustration', {
      title: 'Illustration',
      template: require('./app/illustration.jade')
    })
    .when('/infotips', {
      title: 'Infotips',
      template: require('./app/infotips.jade')
    })
    .when('/loaders', {
      title: 'Loaders',
      template: require('./app/loaders.jade')
    })
    .when('/menus', {
      title: 'Menus',
      template: require('./app/menus.jade')
    })
    .when('/radio-buttons', {
      title: 'Radio buttons',
      template: require('./app/radio-buttons.jade')
    })
    .when('/select-menus', {
      title: 'Select menus',
      template: require('./app/select-menus.jade')
      // controller: 'SelectMenusController'
    })
    .when('/tables', {
      title: 'Tables',
      template: require('./app/tables.jade')
      // controller: 'TablesController'
    })
    .when('/text-fields', {
      title: 'Text fields',
      template: require('./app/text-fields.jade')
      // controller: 'TextFieldsController'
    })
    .when('/typography', {
      title: 'Typography',
      template: require('./app/typography.jade')
    })
    .otherwise({
      redirectTo: "/styleguide"
    });
})
.directive('toolbar', require('./components/toolbar/toolbar.js'))
.directive('sidenav', require('./components/sidenav/sidenav.js'));
// .directive('infotip', require('../tools/infotip/infotip.coffee'))
// .directive('icon', require('../tools/icon/icon.coffee'))
// .directive('indeterminate', require('../tools/checkbox/indeterminate.coffee'))
// .directive('copyToClipboard', require('../tools/copy-to-clipboard/copy-to-clipboard.coffee'))
// .directive('referralLink', require('../tools/referral-link/referral-link.coffee'))
// .controller('SelectMenusController', function($scope, $route) {
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
// .controller('CheckboxesController', function($scope, $route) {
//   console.log($route.current.$$route.title)
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
