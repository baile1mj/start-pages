angular
    .module('portalPageApp', ['ui.bootstrap'])
    .controller('linkDetailInstanceController', [
        '$scope', '$modalInstance', 'title', 'link',
        function($scope, $modalInstance, title, link) {
            $scope.validating = false;
            $scope.link = link ? link : { Url: '', Display: '' };
            $scope.title = title;

            $scope.ok = function(formObj) {
                $scope.validating = true;

                if (formObj.$invalid) {
                    if (formObj.$error.url || !$scope.link.Url) {
                        $('#url').focus();
                    } else if (!$scope.link.Display) {
                        $('#display').focus();
                    }
                } else {
                    $modalInstance.close(angular.copy($scope.link));
                }
            };

            $scope.cancel = function() {
                $modalInstance.dismiss();
            };

            setTimeout(function() {
                $('#url').focus();
            }, 250);
        }
    ])
    .controller('linksModalInstanceController', [
        '$scope', '$modal', '$modalInstance', 'links',
        function($scope, $modal, $modalInstance, links) {
            $scope.links = angular.copy(links);
            $scope.errorMessage = null;

            $scope.moveUp = function(index) {
                if (index > 0) {
                    var thisElement = $scope.links[index];
                    var prevElement = $scope.links[index - 1];

                    $scope.links[index] = prevElement;
                    $scope.links[index - 1] = thisElement;
                }
            };

            $scope.moveDown = function(index) {
                if (index < $scope.links.length - 1) {
                    var thisElement = $scope.links[index];
                    var nextElement = $scope.links[index + 1];

                    $scope.links[index] = nextElement;
                    $scope.links[index + 1] = thisElement;
                }
            };

            $scope.addLink = function() {
                $modal.open({
                    templateUrl: 'linkDetail.html',
                    controller: 'linkDetailInstanceController',
                    resolve: {
                        title: function() { return 'Add Link'; },
                        link: function() { return null; }
                    }
                })
                .result.then(function(result) {
                    $scope.links.push(result);
                });
            };

            $scope.editLink = function(index) {
                var link = $scope.links[index];
                $modal.open({
                    templateUrl: 'linkDetail.html',
                    controller: 'linkDetailInstanceController',
                    resolve: {
                        title: function() { return 'Edit Link'; },
                        link: function() { return link; }
                    }
                })
                .result.then(function(result) {
                    $scope.links[index] = result;
                });
            };

            $scope.deleteLink = function(index) {
                if ($scope.links[index]) {
                    $scope.links.splice(index, 1);
                }
            };

            $scope.ok = function() {
                $modalInstance.close($scope.links);
            };

            $scope.cancel = function() {
                $modalInstance.dismiss('cancel');
            };
        }
    ])
    .controller('pageController', [
        '$rootScope', '$http', '$modal',
        function($rootScope, $http, $modal) {
            var i = this;
            
            function unhideErrorRow() {
                angular.element('#errorRow').removeClass('hidden');
            }

            function setError(errorMessage) {
                if (!i.errors) i.errors = [];

                i.errors.push(errorMessage);
            }
            
            let STORAGE_KEY = 'cachedLinks';
            let LINKS_URL = 'links/links.json';

            function getLinks() {
                // The links will be cached on the client side in case the server is unavailable.
                let cachedLinkString = localStorage.getItem(STORAGE_KEY);
                                
                $http.get(LINKS_URL)
                    .success(function(response) {
                        // Always update the cache from the server.
                        let linkString = JSON.stringify(response);
                        localStorage.setItem(STORAGE_KEY, linkString);
                        
                        i.links = response;
                        i.isReady = true;
                    })
                    .error(function() {
                        // Whenever the links can't be fetched from the server, try to get them
                        // from the cache.
                        if (cachedLinkString !== null) {
                            i.links = JSON.parse(cachedLinkString);
                        }
                        else {
                            setError('unable to retrive links.');
                        }
                        i.isReady = true;
                    });
            }

            function saveLinks() {
                let linkString = JSON.stringify(i.links);

                $http.put(LINKS_URL, linkString)
                    .success(function() {
                        getLinks();
                    })
                    .error(function() {
                        setError('Unable to save links.');
                        i.isReady = true;
                    });
            }

            i.errors = null;
            i.links = null;

            i.isReady = false;

            i.editLinks = function() {
                $modal.open({
                    templateUrl: 'linkEdit.html',
                    controller: 'linksModalInstanceController',
                    resolve: {
                        links: function() {
                            return i.links;
                        }
                    }
                })
                .result.then(function(result) {
                    i.isReady = false;
                    i.links = result;
                    saveLinks();
                });

            };

            i.clearErrors = function() {
                i.errors = null;
            };

            getLinks();
            unhideErrorRow();
        }
    ]);