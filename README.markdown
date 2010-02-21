# jQuery.typset plugin

  A simple jQuery plugin to handle typesetting for HTML5 audio tags. This plugin enables you
  to manipulate your DOM in accordance to your audio tags current time position. Given appropriate
  re- and undo functions it also enables you to skip through your audio file while ensuring that
  all changes are correct and in place.

## Usage

  By default, jQuery typesetter assumes that you want to display DOM elements at a given point 
  in time. To get started all you need is an Array which holds your timings and a selector.

    $(document).ready(function() {
      // this will display .mydiv after the first second
      var timings = new Array({ time: 1.0, selector: '.mydiv‘});
      
      // connect your timings with your audio tag and two functions to handle re- and undo.
      $("#my_audio_tag").typeset(timings);
    });
    
  Using the HTML5 audio tag controls you can play your audio file and jQuery typesetter will
  make sure that all your DOM elements are displayed at the right time.
  
  You can roll your own by specifying re- and undo functions:
  
    $(document).ready(function() {
      var timings = new Array({ time: 1.0, selector: '.mydiv', display: 'inline' });
      
      // connect your timings with your audio tag and two functions to handle re- and undo.
      $("#my_audio_tag").typeset(timings, 
        function(sel) {
          $(sel.selector).css('display',sel.display);
          // your redo logic 
        }, function(sel) {
          $(sel.selector).hide();
          // your undo logic
        });
    });
    
  According to the [HTML5 specification][1] jQuery typesetter will update about every 15 to 250ms.

# License

Released under [MIT License][2]. Tune used in the sample taken from [Wikipedia][3]

  [1]: http://dev.w3.org/html5/spec/Overview.html#current-playback-position
  [2]: http://www.opensource.org/licenses/mit-license.php
  [3]: http://commons.wikimedia.org/wiki/File:Nokia_tune_-_piano.ogg