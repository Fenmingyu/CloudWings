/****
 * App.js
 * Main App Config file
 ***/
var TabSidemenuApp = angular.module('ionicApp', [
        'ionic',
        'ionic.contrib.drawer',
        'flexcalendar',
        'pascalprecht.translate',
        'jett.ionic.filter.bar',
        'ngCordova',
        'ngResource'
    ])

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
                })

                .state('api', {
                    url: '/api',
                    templateUrl: 'templates/rest-api.html',
                    controller: 'ApiCtrl'
                })

                .state('flickr', {
                    url: '/flickr',
                    templateUrl: 'templates/flickr-search.html',
                    controller: 'FlickrCtrl'
                })

                //Temp states
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

            ;


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
        //Api Service part
        .factory('API', function($http) { //Bad service
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
        .factory('UserService', function ($resource) { // Using ngResource service ,good
            var data = $resource('http://jsonplaceholder.typicode.com/users/:user', {user: '@user'}, {
                update:{
                    method:'PUT'
                }
            });
            return data;
        })
        //Fliker Search Part
        .factory('Flickr', function($resource, $q) {
            var photosPublic = $resource('http://api.flickr.com/services/feeds/photos_public.gne',
                { format: 'json', jsoncallback: 'JSON_CALLBACK' },
                { 'load': { 'method': 'JSONP' } });

            return {
                search: function(query) {
                    var q = $q.defer();
                    photosPublic.load({
                        tags: query
                    }, function(resp) {
                        q.resolve(resp);
                    }, function(err) {
                        console.log(err);
                        alert(JSON.stringify(err));
                        q.reject(err);
                    })

                    return q.promise;
                }
            }
        })



        .directive('push-search', function() {
            return {
                restrict: 'A',
                link: function($scope, $element, $attr) {
                    var amt, st, header;

                    $element.bind('scroll', function(e) {
                        if(!header) {
                            header = document.getElementById('search-bar');
                        }
                        st = e.detail.scrollTop;
                        if(st < 0) {
                            header.style.webkitTransform = 'translate3d(0, 0px, 0)';
                        } else {
                            header.style.webkitTransform = 'translate3d(0, ' + -st + 'px, 0)';
                        }
                    });
                }
            }
        })

        .directive('photo', function($window) {
            return {
                restrict: 'C',
                link: function($scope, $element, $attr) {
                    var size = ($window.outerWidth / 3) - 2;
                    $element.css('width', size + 'px');
                }
            }
        })
        //iOS Keypad prevent bounce
        .run(function ($window, $ionicPlatform) {
            $ionicPlatform.ready(function () {
                if ($window.cordova && $window.cordova.plugins.Keyboard) {
                    $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    $window.cordova.plugins.Keyboard.disableScroll(true);
                }
            });
        })
    ;

