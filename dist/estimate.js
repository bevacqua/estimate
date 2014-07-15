/**
 * estimate - Calculate remaining reading time estimates in real-time
 * @version v0.1.3
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
  var words = text.split(spaces).length;
  var seconds = Math.round(words / speed / 60);
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
    var diffTop = scroll - rect.top;
    var diffHeight = rect.height - window.innerHeight;
    var scaled = diffTop / diffHeight * 100;
    var bounded = Math.max(0, Math.min(calc.progress, 100));
    return bounded; // progress bounded within 0..100
  }

  initialize();
  update();

  return state;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImY6XFxnaXRcXGVzdGltYXRlXFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsImY6L2dpdC9lc3RpbWF0ZS9ub2RlX21vZHVsZXMvc2Nyb2xsdG9wL2luZGV4LmpzIiwiZjovZ2l0L2VzdGltYXRlL3NyYy9lc3RpbWF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuLyoqXG4gKiBnZXQgdGhlIHdpbmRvdydzIHNjcm9sbHRvcC5cbiAqIFxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCkgcmV0dXJuIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICA6IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHNjcm9sbHRvcCA9IHJlcXVpcmUoJ3Njcm9sbHRvcCcpO1xudmFyIGRlZmF1bHRzID0ge1xuICBzcGVlZDogMTUwLCAvLyB3b3JkcyBwZXIgbWludXRlXG4gIHNwYWNlczogL1xcVysvZ1xufTtcblxuZnVuY3Rpb24gcmVzb2x2ZU9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgdmFyIG5vO1xuICB2YXIgbyA9IG9wdGlvbnM7XG4gIGlmIChvID09PSBubykgeyByZXR1cm4gZGVmYXVsdHM7IH1cbiAgaWYgKG8uc3BlZWQgPT09IG5vKSB7IG8uc3BlZWQgPSBkZWZhdWx0cy5zcGVlZDsgfVxuICBpZiAoby5zcGFjZXMgPT09IG5vKSB7IG8uc3BhY2VzID0gZGVmYXVsdHMuc3BhY2VzOyB9XG4gIHJldHVybiBvcHRpb25zO1xufVxuXG5mdW5jdGlvbiBtZWFzdXJlVGV4dCAodGV4dCwgb3B0aW9ucykge1xuICB2YXIgbyA9IHJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KHNwYWNlcykubGVuZ3RoO1xuICB2YXIgc2Vjb25kcyA9IE1hdGgucm91bmQod29yZHMgLyBzcGVlZCAvIDYwKTtcbiAgcmV0dXJuIHNlY29uZHM7XG59XG5cbmZ1bmN0aW9uIG1lYXN1cmVFbGVtZW50IChlbGVtZW50LCBvcHRpb25zKSB7XG4gIHZhciBjYWxjID0ge1xuICAgIGluaXRpYWxpemU6IGluaXRpYWxpemUsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplICgpIHtcbiAgICBjYWxjLnRvdGFsID0gbWVhc3VyZVRleHQoZWxlbWVudC5pbm5lclRleHQsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgICBjYWxjLnByb2dyZXNzID0gZ2V0UHJvZ3Jlc3MoKTtcbiAgICBjYWxjLnJlbWFpbmluZyA9IE1hdGguY2VpbChjYWxjLnRvdGFsICogKDEgLSAoY2FsYy5wcm9ncmVzcyAvIDEwMCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFByb2dyZXNzICgpIHtcbiAgICB2YXIgc2Nyb2xsID0gc2Nyb2xsdG9wKCk7XG4gICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBkaWZmVG9wID0gc2Nyb2xsIC0gcmVjdC50b3A7XG4gICAgdmFyIGRpZmZIZWlnaHQgPSByZWN0LmhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB2YXIgc2NhbGVkID0gZGlmZlRvcCAvIGRpZmZIZWlnaHQgKiAxMDA7XG4gICAgdmFyIGJvdW5kZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjYWxjLnByb2dyZXNzLCAxMDApKTtcbiAgICByZXR1cm4gYm91bmRlZDsgLy8gcHJvZ3Jlc3MgYm91bmRlZCB3aXRoaW4gMC4uMTAwXG4gIH1cblxuICBpbml0aWFsaXplKCk7XG4gIHVwZGF0ZSgpO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVsZW1lbnQ6IG1lYXN1cmVFbGVtZW50LFxuICB0ZXh0OiBtZWFzdXJlVGV4dFxufTtcbi8qXG4gICAgICAgIGlzUmVhZGFibGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC5pcyhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyLFxuICAgICAgICAgICAgICAgICAgICByZWN0ID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICAgICAgcmVhZGFibGUgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN0LmJvdHRvbSA+IGhlaWdodCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdC50b3AgPCBoZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZWFkYWJsZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpe1xuICAgICAgICAgICAgdmFyIHBsdWdpbiA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbWVhc3VyZW1lbnRzID0gbWVhc3VyZShwbHVnaW4uJGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIHRleHQgPSBnZXRCdWJibGVUZXh0KG1lYXN1cmVtZW50cyksXG4gICAgICAgICAgICAgICAgcmVhZGFibGUgPSBwbHVnaW4uaXNSZWFkYWJsZSgpO1xuXG4gICAgICAgICAgICBpZihyZWFkYWJsZSAmJiB0ZXh0KXtcbiAgICAgICAgICAgICAgICBpZigkd2luZG93LndpZHRoKCkgPj0gNzY4KXtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2luLiRidWJibGUuY3NzKCd0b3AnLCBtZWFzdXJlbWVudHMuZGlzdGFuY2UpLnRleHQodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbi5mYWRlQnViYmxlKDAuNCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gZmFkZSBvdXQgdGhlIGFubm90YXRpb24gYWZ0ZXIgYSBzZWNvbmQgb2Ygbm8gc2Nyb2xsaW5nIHRocm91Z2guXG4gICAgICAgICAgICAgICAgcGx1Z2luLnN0b3BGYWRpbmcoKTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uc3RhcnRGYWRpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuKi9cbiJdfQ==
(2)
});
