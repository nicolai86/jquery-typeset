/*
Copyright (c) 2010 Raphael Randschau

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE

Author: Raphael Randschau
Version: 1.0.0
*/
(function($) {

  $.fn.typeset = function(_ts, _do, _undo) {
    var timings = _ts;
    
    timings.sort(function(a, b) {
      if (a.time < b.time) {
        return -1;
      } else if (a.time > b.time) {
        return 1;
      }
      return 0;
    });
    
    this.each(function() {
      var audio = $(this);
      var duration = audio.attr('duration');
      var pos = 0;
      
      audio.bind('timeupdate', function() {
        var current = audio.attr('currentTime');
        pos = Math.min(Math.max(0, pos), timings.length - 1);
        var next = timings[pos];
        var first = timings[0];
        var last = timings[timings.length-1];
        
        if (current < first.time) {
          while(pos >= 0) {
            _undo(timings[pos]);
            pos -= 1;
          }
        } else if (current > last.time) {
          while (pos < timings.length) {
            _do(timings[pos]);
            pos += 1;
          }
        } else {
          while (current < next.time) {
            _undo(next);
            pos -= 1;
            next = timings[pos];
          }
          while (current > next.time) {
            _do(next);
            pos += 1;
            next = timings[pos];
          }
        }
      });
    });

    return this;

  };

})(jQuery);