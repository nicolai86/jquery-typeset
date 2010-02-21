# jQuery.typset plugin

A simple jQuery plugin to handle typesetting for HTML5 audio tags. This plugin enables you
to manipulate your DOM in accordance to your audio tags current time position. Given appropriate
re- and undo functions it also enables you to skip through your audio file while ensuring that
all changes are correct and in place.

## Usage

    $(document).ready(function() {
      // place your timings in an Array
      var timings = new Array({ time: 5.3, selector: $(".mydiv"), display: "block" });
      
      // connect your timings with your audio tag and two functions to handle re- and undo.
      $("#my_audio_tag").typeset(timings, 
        function(jSel) {
          jSel.selector.css('display', jSel.display);
        }, function(jSel) {
          jSel.selector.hide();
      });
    });

# License

Released under MIT license.