'use strict';

var scrolltop = require('scrolltop');
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
