/*
*	TODO: When switching between toggleMessageWithAnyEmote and toggleMEssageWithOnlyEmote they cancel each other out.
 */


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
*/
function toggleMessageWithOnlyEmote() {
   if ($('#message-with-only-emote').prop('checked')) {
	   $('.message-line').each(function() {
	       var textMessage = $(this).find('.message').clone().children().remove().end().text().trim();

	       if (textMessage.length <= 0 && $(this).find('.message').find('a').length <= 0) {
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
*	ToDo: Refactor using objects instead of arrays
*/
function getEmotes() {
	var emoteAltArray = [];
	var emoteSrcArray = [];
	var emoteSrcSetArray = [];
	
	$('.emoticon').each(function() {
		emoteAltArray.push($(this).attr('alt'));
		emoteSrcArray.push($(this).attr('src'));
		emoteSrcSetArray.push($(this).attr('srcset'));
	});
	
	emoteAltArray = jQuery.uniqueSort(emoteAltArray);
	emoteSrcArray = jQuery.uniqueSort(emoteSrcArray);
	emoteSrcSetArray = jQuery.uniqueSort(emoteSrcSetArray);
	
	for (var i = 0; i < emoteAltArray.length; i++) {
		$('.emote-name-list').append('<li><span class="balloon-wrapper"><img class="emoticon-icon" src="' + emoteSrcArray[i] + '" srcset="' + emoteSrcSetArray[i] + '" alt="' + emoteAltArray[i] + '"><div class="balloon balloon--tooltip balloon--down balloon--center mg-t-1">' + emoteAltArray[i] + '</div></span><input type="checkbox" id="emote-' + emoteAltArray[i] + '" value="emote-' + emoteAltArray[i] + '"></li>');
	}
}

function toggleUsingEmoteName(emoticon) {
	$('.emoticon[alt="' + emoticon + '"').each(function() {
		$(this).hide();
	});
}



/*
*	Toggle entire message lines that have any more than a specified amount
*	of emoticons 
*/
function toggleMessageWithEmoteCount(emoticon) {
	
}




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

	$('#hide-by-name-btn').click(function() {
		toggleUsingEmoteName($(this).parent().find('#using-emote-name').val());
	});
	
	getEmotes();
});
