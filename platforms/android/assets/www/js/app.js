/****
 * App.js
 * Main App Config file
 ***/
var TabSidemenuApp = angular.module('ionicApp', ['ionic', 'ionic.contrib.drawer', 'flexcalendar', 'pascalprecht.translate','jett.ionic.filter.bar','ngCordova'])

        .config(function ($stateProvider, $urlRouterProvider, $ionicFilterBarConfigProvider) {

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'templates/signup.html',
                    controller: 'SignUpCtrl'
                })
                .state('recover-password', {
                    url: '/recover-password',
                    templateUrl: 'templates/recover-password.html',
                    controller: 'PwdRecoveryCtrl'
                })
                .state('phone-validation', {
                    url: '/phone-validation',
                    templateUrl: 'templates/phone-validation.html',
                    controller: 'PhoneVerifyCtrl'
                })
                .state('intro', {
                    url: '/intro',
                    templateUrl: 'templates/intro-slides.html',
                    controller: 'IntroCtrl'
                })
                .state('calendar', {
                    url: '/calendar',
                    templateUrl: 'templates/calendar.html',
                    controller: 'CalendarViewCtrl'
                })
                .state('search', {
                    url: '/search',
                    templateUrl: 'templates/search.html',
                    controller: 'SearchCtrl'
                })
                .state('settings', {
                    url: '/settings',
                    templateUrl: 'templates/settings.html'
                })
                .state('tabs', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "templates/tabs.html"
                })
                .state('tabs.home', {
                    url: "/home",
                    views: {
                        'home-tab': {
                            templateUrl: "templates/home.html",
                            controller: 'HomeTabCtrl'
                        }
                    }
                })
                .state('tabs.facts', {
                    url: "/facts",
                    views: {
                        'home-tab': {
                            templateUrl: "templates/facts.html"
                        }
                    }
                })
                .state('tabs.facts2', {
                    url: "/facts2",
                    views: {
                        'home-tab': {
                            templateUrl: "templates/facts2.html"
                        }
                    }
                })
                .state('tabs.about', {
                    url: "/about",
                    views: {
                        'about-tab': {
                            templateUrl: "templates/about.html"
                        }
                    }
                })
                .state('tabs.navstack', {
                    url: "/navstack",
                    views: {
                        'about-tab': {
                            templateUrl: "templates/nav-stack.html"
                        }
                    }
                })
                .state('tabs.booking', {
                    url: "/booking",
                    views: {
                        'booking-tab': {
                            templateUrl: "templates/bookings.html",
                            controller: "BookingCtrl"
                        }
                    }
                })
                .state('tabs.message', {
                    url: "/message",
                    views: {
                        'message-tab': {
                            templateUrl: "templates/messages.html"
                        }
                    }
                });


            $urlRouterProvider.otherwise("/intro");

            //You can override the config such as the following
            $ionicFilterBarConfigProvider.theme('royal');
            $ionicFilterBarConfigProvider.clear('ion-close');
            $ionicFilterBarConfigProvider.search('ion-search');
            $ionicFilterBarConfigProvider.backdrop(false);
            $ionicFilterBarConfigProvider.transition('vertical');
            $ionicFilterBarConfigProvider.placeholder('Search');
            /*
             $ionicFilterBarConfigProvider.theme('calm');//light,stable,positive,calm,balanced,energized,assertive,royal,dark
             $ionicFilterBarConfigProvider.clear('ion-close');
             $ionicFilterBarConfigProvider.search('ion-search');
             $ionicFilterBarConfigProvider.backdrop(false);
             $ionicFilterBarConfigProvider.transition('vertical');
             $ionicFilterBarConfigProvider.placeholder('Filter');
             */

        })
        .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            $ionicConfigProvider.navBar.alignTitle('center')
        })
        .config(['$ionicConfigProvider', function ($ionicConfigProvider) {
            $ionicConfigProvider.tabs.position('bottom'); // other values: top
        }])
        .config(function ($ionicConfigProvider) {
            // remove back button text completely
            $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-back').previousTitleText(false);
        })

        .constant('DB_CONFIG', {
            name: 'DB',
            tables: {
                users: {
                    id: 'integer primary key',
                    name: 'text'
                }
            }
        })
        .factory('User', function($http) {
            var self = this;

            self.getUserInfo = function(id) {
                var adding = '/users/'+((id)?id:1);
                return $http.get("http://jsonplaceholder.typicode.com"+adding)
                    .then(function(result){
                        return result;
                    });
            }

            self.getAllByName = function(name) {
                var adding = '?name='+name.toLowerCase();
                return $http.get("http://jsonplaceholder.typicode.com"+adding)
                    .then(function(result){
                        return result;
                    });
            };
            return self;
        })
        .directive('ionSearch', function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    getData: '&source',
                    model: '=?',
                    search: '=?filter'
                },
                link: function(scope, element, attrs) {
                    attrs.minLength = attrs.minLength || 0;
                    scope.placeholder = attrs.placeholder || '';
                    scope.search = {value: ''};

                    if (attrs.class)
                        element.addClass(attrs.class);

                    if (attrs.source) {
                        scope.$watch('search.value', function (newValue, oldValue) {
                            alert(newValue);
                            if (newValue.length > attrs.minLength) {
                                scope.getData({str: newValue}).then(function (results) {
                                    scope.model = results;
                                });
                            } else {
                                scope.model = [];
                            }
                        });
                    }

                    scope.clearSearch = function() {
                        scope.search.value = '';
                    };
                },
                template: '<div class="item-input-wrapper">' +
                '<i class="icon ion-android-search placeholder-icon"></i>' +
                '<input type="search" placeholder="{{placeholder}}" ng-model="search.value">' +
                '<i ng-if="search.value.length > 0" ng-click="clearSearch()" class="icon ion-close"></i>' +
                '</div>'
            };
        })
        .run(function ($window, $ionicPlatform) {
            $ionicPlatform.ready(function () {
                if ($window.cordova && $window.cordova.plugins.Keyboard) {
                    $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    $window.cordova.plugins.Keyboard.disableScroll(true);
                }
            });
        })
    ;

