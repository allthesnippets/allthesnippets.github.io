
jQuery(document).ready(function() {

    /*
        Product showcase background
    */
    $('.product-showcase-one').backstretch([
     "assets/img/backgrounds/abstract-access-low.jpg"
    ], {duration: 3000, fade: 750});

    $('.product-showcase').backstretch([
          "assets/img/backgrounds/road.jpg"
        , "assets/img/backgrounds/apple-black-low.jpg"
        , "assets/img/backgrounds/abstract-access-low.jpg"
        , "assets/img/backgrounds/red-phone.jpg"
        , "assets/img/backgrounds/people.jpg"
        ], {duration: 3000, fade: 750});

    /*
        Countdown initializer
    */
    var now = new Date();
    // var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf();
    var countTo = "2019/02/04";

    $('.timer').countdown(countTo, function(event) {
        var $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span.'+event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });

    /*
        Gallery prettyPhoto (aeg 2021-06-15 - prettyPhoto not used)
    */
    // $(".gallery-images a[rel^='prettyPhoto']").prettyPhoto({social_tools: false});

    /*
        Subscription form
    */
    $('#frm-top').submit(function() {
        var postdata = $('#frm-top').serialize();
        $.ajax({
            type: 'GET',
            url: 'https://allthesnippets.us19.list-manage.com/subscribe/post-json?c=?',
            data: postdata,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(data) {
              if (data.result != "success") {
                  msg = '<span style="color:red">' + data.msg + ' / Try again or use this <a href="http://eepurl.com/dNU-Sk" target=_new>link</a>.</span>'
                  $('.subscribe-feedback-top').html(msg)
              } else {
                    // debugger;
                    $('.subscribe-feedback-top').html(data.msg).fadeOut(4000, function() {
                        $( ".subscribe-feedback-top" ).text('')
                        $( ".subscribe-feedback-top" ).show()
                    });
                }
            }
        });
        return false;
    });

    $('#frm-bottom').submit(function() {
        var postdata = $('#frm-bottom').serialize();
        $.ajax({
            type: 'GET',
            url: 'https://allthesnippets.us19.list-manage.com/subscribe/post-json?c=?',
            data: postdata,
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function(data) {
              if (data.result != "success") {
                  msg = '<span style="color:red">' + data.msg + ' / Try again or use this <a href="http://eepurl.com/dNU-Sk" target=_new>link</a>.</span>'
                  $('.subscribe-feedback-bottom').html(msg)
              } else {
                    // debugger;
                    $('.subscribe-feedback-bottom').html(data.msg).fadeOut(4000, function() {
                        $( ".subscribe-feedback-bottom" ).text('')
                        $( ".subscribe-feedback-bottom" ).show()
                    });
                }
            }
        });
        return false;
    });

});
