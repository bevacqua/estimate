/**
 * estimate - Calculate remaining reading time estimates in real-time
 * @version v0.1.21
 * @link https://github.com/bevacqua/estimate
 * @license MIT
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.estimate=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

/**
 * get the window's scrolltop.
 * 
 * @return {Number}
 */

module.exports = function(){
  if (window.pageYOffset) return window.pageYOffset;
  return document.documentElement.clientHeight
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
};

},{}],2:[function(_dereq_,module,exports){
'use strict';

var scrolltop = _dereq_('scrolltop');
var defaults = {
  speed: 150, // words per minute
  spaces: /\W+/g
};

function resolveOptions (options) {
  var no;
  var o = options;
  if (o === no) { return defaults; }
  if (o.speed === no) { o.speed = defaults.speed; }
  if (o.spaces === no) { o.spaces = defaults.spaces; }
  return options;
}

function measureText (text, options) {
  var o = resolveOptions(options);
  var words = text.split(o.spaces).length;
  var seconds = Math.round(words / o.speed * 60);
  return seconds;
}

function measureElement (element, options) {
  var calc = {
    initialize: initialize,
    update: update
  };

  function initialize () {
    calc.total = measureText(element.innerText, options);
  }

  function update () {
    calc.progress = getProgress();
    calc.remaining = Math.ceil(calc.total * (1 - (calc.progress / 100)));
  }

  function getProgress () {
    var scroll = scrolltop();
    var rect = element.getBoundingClientRect();
    var diffTop = scroll - element.offsetTop + window.innerHeight / 2;
    var diffHeight = rect.height;
    var scaled = diffTop / diffHeight * 100;
    var bounded = Math.max(0, Math.min(scaled, 100));
    return bounded; // progress bounded within 0..100
  }

  initialize();
  update();

  return calc;
}

module.exports = {
  element: measureElement,
  text: measureText
};
/*
        isReadable: function(){
            return this.$element.is(function(){
                var height = window.innerHeight / 2,
                    rect = this.getBoundingClientRect(),
                    readable = (
                        rect.bottom > height &&
                        rect.top < height
                    );

                return readable;
            });
        }


        update: function update(){
            var plugin = this,
                measurements = measure(plugin.$element),
                text = getBubbleText(measurements),
                readable = plugin.isReadable();

            if(readable && text){
                if($window.width() >= 768){
                    plugin.$bubble.css('top', measurements.distance).text(text);
                    plugin.fadeBubble(0.4);
                }

                // fade out the annotation after a second of no scrolling through.
                plugin.stopFading();
                plugin.startFading();
            }
        }
*/

},{"scrolltop":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNvL25pY28vZ2l0L2VzdGltYXRlL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbmljby9uaWNvL2dpdC9lc3RpbWF0ZS9ub2RlX21vZHVsZXMvc2Nyb2xsdG9wL2luZGV4LmpzIiwiL1VzZXJzL25pY28vbmljby9naXQvZXN0aW1hdGUvc3JjL2VzdGltYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXG4vKipcbiAqIGdldCB0aGUgd2luZG93J3Mgc2Nyb2xsdG9wLlxuICogXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0KSByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgIDogZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc2Nyb2xsdG9wID0gcmVxdWlyZSgnc2Nyb2xsdG9wJyk7XG52YXIgZGVmYXVsdHMgPSB7XG4gIHNwZWVkOiAxNTAsIC8vIHdvcmRzIHBlciBtaW51dGVcbiAgc3BhY2VzOiAvXFxXKy9nXG59O1xuXG5mdW5jdGlvbiByZXNvbHZlT3B0aW9ucyAob3B0aW9ucykge1xuICB2YXIgbm87XG4gIHZhciBvID0gb3B0aW9ucztcbiAgaWYgKG8gPT09IG5vKSB7IHJldHVybiBkZWZhdWx0czsgfVxuICBpZiAoby5zcGVlZCA9PT0gbm8pIHsgby5zcGVlZCA9IGRlZmF1bHRzLnNwZWVkOyB9XG4gIGlmIChvLnNwYWNlcyA9PT0gbm8pIHsgby5zcGFjZXMgPSBkZWZhdWx0cy5zcGFjZXM7IH1cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmVUZXh0ICh0ZXh0LCBvcHRpb25zKSB7XG4gIHZhciBvID0gcmVzb2x2ZU9wdGlvbnMob3B0aW9ucyk7XG4gIHZhciB3b3JkcyA9IHRleHQuc3BsaXQoby5zcGFjZXMpLmxlbmd0aDtcbiAgdmFyIHNlY29uZHMgPSBNYXRoLnJvdW5kKHdvcmRzIC8gby5zcGVlZCAqIDYwKTtcbiAgcmV0dXJuIHNlY29uZHM7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmVFbGVtZW50IChlbGVtZW50LCBvcHRpb25zKSB7XG4gIHZhciBjYWxjID0ge1xuICAgIGluaXRpYWxpemU6IGluaXRpYWxpemUsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplICgpIHtcbiAgICBjYWxjLnRvdGFsID0gbWVhc3VyZVRleHQoZWxlbWVudC5pbm5lclRleHQsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgICBjYWxjLnByb2dyZXNzID0gZ2V0UHJvZ3Jlc3MoKTtcbiAgICBjYWxjLnJlbWFpbmluZyA9IE1hdGguY2VpbChjYWxjLnRvdGFsICogKDEgLSAoY2FsYy5wcm9ncmVzcyAvIDEwMCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb2dyZXNzICgpIHtcbiAgICB2YXIgc2Nyb2xsID0gc2Nyb2xsdG9wKCk7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBkaWZmVG9wID0gc2Nyb2xsIC0gZWxlbWVudC5vZmZzZXRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgIHZhciBkaWZmSGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgdmFyIHNjYWxlZCA9IGRpZmZUb3AgLyBkaWZmSGVpZ2h0ICogMTAwO1xuICAgIHZhciBib3VuZGVkID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2NhbGVkLCAxMDApKTtcbiAgICByZXR1cm4gYm91bmRlZDsgLy8gcHJvZ3Jlc3MgYm91bmRlZCB3aXRoaW4gMC4uMTAwXG4gIH1cblxuICBpbml0aWFsaXplKCk7XG4gIHVwZGF0ZSgpO1xuXG4gIHJldHVybiBjYWxjO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZWxlbWVudDogbWVhc3VyZUVsZW1lbnQsXG4gIHRleHQ6IG1lYXN1cmVUZXh0XG59O1xuLypcbiAgICAgICAgaXNSZWFkYWJsZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbGVtZW50LmlzKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIsXG4gICAgICAgICAgICAgICAgICAgIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgICAgICByZWFkYWJsZSA9IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3QuYm90dG9tID4gaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0LnRvcCA8IGhlaWdodFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlYWRhYmxlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCl7XG4gICAgICAgICAgICB2YXIgcGx1Z2luID0gdGhpcyxcbiAgICAgICAgICAgICAgICBtZWFzdXJlbWVudHMgPSBtZWFzdXJlKHBsdWdpbi4kZWxlbWVudCksXG4gICAgICAgICAgICAgICAgdGV4dCA9IGdldEJ1YmJsZVRleHQobWVhc3VyZW1lbnRzKSxcbiAgICAgICAgICAgICAgICByZWFkYWJsZSA9IHBsdWdpbi5pc1JlYWRhYmxlKCk7XG5cbiAgICAgICAgICAgIGlmKHJlYWRhYmxlICYmIHRleHQpe1xuICAgICAgICAgICAgICAgIGlmKCR3aW5kb3cud2lkdGgoKSA+PSA3Njgpe1xuICAgICAgICAgICAgICAgICAgICBwbHVnaW4uJGJ1YmJsZS5jc3MoJ3RvcCcsIG1lYXN1cmVtZW50cy5kaXN0YW5jZSkudGV4dCh0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmZhZGVCdWJibGUoMC40KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBmYWRlIG91dCB0aGUgYW5ub3RhdGlvbiBhZnRlciBhIHNlY29uZCBvZiBubyBzY3JvbGxpbmcgdGhyb3VnaC5cbiAgICAgICAgICAgICAgICBwbHVnaW4uc3RvcEZhZGluZygpO1xuICAgICAgICAgICAgICAgIHBsdWdpbi5zdGFydEZhZGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4qL1xuIl19
(2)
});
