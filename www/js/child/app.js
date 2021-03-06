// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('jiaYongAppChild', ['ionic', 'jiaYongAppChild.controllers', 'jiaYongAppChild.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  // setup an abstract state for the tabs directive

  .state('menu', {
    url: '/menu',
    abstract: true,
    templateUrl: 'templates/child/menu.html'
  })

  .state('menu.tab', {
    url: "/tab",
    abstract: true,
    views: {
      'menuContent': {
        templateUrl: "templates/child/tabs.html"
      }
    }
  })

  // Each tab has its own nav history stack:

  .state('menu.tab.my-tasks', {
    url: '/my-tasks',
    cache: false,
    views: {
      'tab-my-tasks': {
        templateUrl: 'templates/child/my-tasks.html',
        controller: 'MyTasksCtrl'
      }
    }
  })

 .state('menu.tab.my-propose-task', {
    url: '/my-propose-task',
    cache: false,
    views: {
      'tab-propose-task': {
        templateUrl: 'templates/child/tab-pending-approval-tasks.html',
        controller: 'MyProposedTasksCtrl'
      }
    }
  })

 .state('menu.tab.propose-task', {
    url: '/propose-task',
    views: {
        'tab-propose-task': {
          templateUrl: 'templates/child/propose-task.html',
          controller: 'ProposeTaskCtrl'
        }
    }
  })

  // to view the task detail by id
  .state('menu.tab.view-my-task', {
    url:'/details/:id',
    cache: false,
    views: {
      'tab-my-tasks':{
        templateUrl: 'templates/child/view-task.html',
        controller: 'ViewMyTaskDetailCtrl'
      }
    }
  })

  // // to edit the proposal detail by id
  // .state('menu.tab.my-tasks.editProposal', {
  //   url:'/editProposal/:id',
  //   views: {
  //     'tab-my-tasks':{
  //       templateUrl: 'templates/child/view-task.html',
  //       controller: 'EditProposalCtrl',
  //       resolve:{
  //         task: function(){
  //           //get the task ID to display
  //         }
  //       }
  //     }
  //   }
  // })


  .state('menu.tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/child/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('menu.tab.account-logout', {
    url: '/account-logout',
    views: {
        'tab-profile': {
        templateUrl: 'templates/login.html',
        controller: 'LogoutCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('menu/tab/my-tasks');

});
