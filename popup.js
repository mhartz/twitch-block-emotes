function hideAnyEmotesLines() {
    $('.message-line').each(function() {
        if ($(this).find('.emoticon').length != 0) {
            $(this).hide();
        }
    });
}
hideAnyEmotesLines();



function hideAllEmotes() {
    $('.emoticon').each(function() {
        $(this).hide();
    });
}
hideAllEmotes();



function hideOnlyEmoteLines() {
   $('.message-line').each(function() {
       var textMessage = $(this).find('.message').clone().children().remove().end().text().trim();

       if ((textMessage.length <= 0)) {
           $(this).hide();
       }
   });
}
hideOnlyEmoteLines();



function hideEmotesByCount(emoticon) {
	$('.emoticon[alt="' + emoticon + '"').each(function() {
		$(this).hide();
	});
}
hideEmotesByCount('qtpFEELS');







//function messageWithOnlyEmotes(dec) {
//    if (dec.checked) {
//        console.log("this: " + dec);
//        $(".message-line").each(function() {
//            if ($(this).find('.emoticon').length != 0) {
//                $(this).hide();
//            }
//        });
//    }
//    else {
//        $(".message-line").each(function() {
//            if ($(this).find('.emoticon').length != 0) {
//                $(this).show();
//            }
//        });
//    }
//}
//
//function messageWithEmotes () {
//
//}
//
//function messageWithEmotes () {
//}
//
//function emotesByNumber () {
//}
//
//function emotesOnly () {
//}
//
//function repeatedSingleWords () {
//}
//
//$(function() {
//    $('#message-with-only-emotes').change(function() {
//        messageWithOnlyEmotes(this);
//        console.log("clicked");
//    });
//});


//$(function() {
//    $('#message-with-only-emotes').change(function() {
//        if ($('#message-with-only-emotes').checked) {
//            console.log("this: " + this);
//            $(".message-line").each(function() {
//                console.log($(this));
//                if ($(this).find('.emoticon').length != 0) {
//                    $(this).hide();
//                }
//            });
//        }
//        else {
//            $(".message-line").each(function() {
//                if ($(this).find('.emoticon').length != 0) {
//                    $(this).show();
//                }
//            });
//        }
//    });
//});