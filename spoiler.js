/*
 * angular-spoiler v0.0.1
 * (c) 2014 Monospaced http://monospaced.com
 * License: MIT
 */

angular.module('monospaced.spoiler', [])
  .directive('spoiler', ['$window', function($window) {

    return {
      restrict: 'E',
      link: function(scope, element, attrs) {

        var domElement = element[0],
            parent = domElement.parentElement,
            color = !attrs.color ? 'black' : attrs.color,
            spoil = function spoil() {
              domElement.style.backgroundColor = parent.style.backgroundColor;
              domElement.style.color = parent.style.color;
            };

        domElement.onclick = spoil;

        if (!attrs.expires || Date.now() < Date.parse(attrs.expires)) {
          domElement.setAttribute("style", "background-color: " + color + "; color: " + color);
        }
      }
    };
  }]);
