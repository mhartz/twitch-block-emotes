/*
*	Toggle all emoticons on or off.
*/
function toggleAllEmotes() {
	if ($('#all-emotes').prop('checked')) {
	    $('.emoticon').each(function() {
	        $(this).hide();
	    });
	}
	else {
		$('.emoticon').each(function() {
	        $(this).show();
	    });
	}
}


/*
*	Toggle entire message lines that have any emotes on them to show/hide
*/
function toggleMessageWithAnyEmote() {
	if ($('#message-with-any-emote').prop('checked')) {
	    $('.message-line').each(function() {
	        if ($(this).find('.emoticon').length != 0) {
	            $(this).hide();
	        }
	    });
	}
	else {
		$('.message-line').each(function() {
	        if ($(this).find('.emoticon').length != 0) {
	            $(this).show();
	        }
	    });
	}
}




/*
*	Toggle entire messages that only have emoticons on them
*
*	Todo: Currently hide user links as well, need to fix
*/
function toggleMessageWithOnlyEmote() {
   if ($('#message-with-only-emote').prop('checked')) {
	   $('.message-line').each(function() {
	       var textMessage = $(this).find('.message').clone().children().remove().end().text().trim();

	       if ((textMessage.length <= 0)) {
	           $(this).hide();
	       }
	   });
	}
	else {
		$('.message-line').each(function() {
	       var textMessage = $(this).find('.message').clone().children().remove().end().text().trim();

	       if ((textMessage.length <= 0)) {
	           $(this).show();
	       }
	   });
	}
}


/*
*	Toggle only certain emoticons to show/hide.
*	Loops through each emoticon that shows and adds them to the selection
*	so a user can pick and choose which to show/hide.
*	
*	ToDo: Loop through active emoticons and add them to the selection, display all items
*/
function toggleUsingEmoteName(emoticon) {
	$('.emoticon[alt="' + emoticon + '"').each(function() {
		$(this).hide();
	});
}
toggleUsingEmoteName('qtpFEELS');


/*
*	Toggle entire message lines that have any more than a specified amount
*	of emoticons 
*/
function toggleMessageWithEmoteCount(emoticon) {
	
}
toggleMessageWithEmoteCount('qtpFEELS');



/*
*	Call all the functions through events
*/
$(function() {
	$('#all-emotes').change(function() {
		toggleAllEmotes();
	});
	
	$('#message-with-any-emote').change(function() {
		toggleMessageWithAnyEmote();
	});
	
	$('#message-with-only-emote').change(function() {
		toggleMessageWithOnlyEmote();
	});
});
