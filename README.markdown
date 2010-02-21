# jQuery.typset plugin

A simple jQuery plugin to handle typesetting for HTML5 audio tags.

## Usage

    $(document).ready(function() {
      var timings = new Array({ time: 5.3, selector: $(".mydiv"), display: "block" });
      $("#mytag").typeset(timings, 
        function(jSel) {
          jSel.selector.css('display', jSel.display);
        }, function(jSel) {
          jSel.selector.hide();
      });
    });

# License

Released under MIT license.