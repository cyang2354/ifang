'use strict';

angular.module('waijuyiApp')
  .directive('ngGalleria', function () {
    return {
      restrict: 'E',
      controller: function galleriaDirectiveCtrl($scope, $element, $timeout) {
          Galleria.loadTheme('non_bower_components/galleria/themes/classic/galleria.classic.min.js');

          Galleria.configure({
              dummy: '/res/img/dummy.gif'
          });

          var GalleriaApiReference;

          $scope.$watch(
            'source',
            function() {
              $timeout(function () {
                if (!$scope.source) {
                  return;
                }

                var obj = $element.find('.galleria');
                var index = -1;
                for(var i = 0; i < $scope.source.images.length; i++){
                    if($scope.source.images[i].image === $scope.source.index.image) {
                        index = i;
                        break;
                    }
                }

                Galleria.run(obj, {
                    show: index,
                    extend: function(){
                        GalleriaApiReference = this;
                    }
                });
              });
            },
            true // Object equality (not just reference).
          );


          $scope.$on('$destroy', function() {
              if(GalleriaApiReference && GalleriaApiReference.destroy) {
              	GalleriaApiReference.destroy();
              }
          });
      },
      template: '<div class="galleria">' +
                     '<a href="{{img.image}}" ng-repeat="img in source.images">' +
                        '<img src="{{img.thumb}}">' +
                     '</a>' +
                '</div>',
      scope: {
          source: '='
      }
    };
  });
