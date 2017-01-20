/*
*	TODO: When switching between toggleMessageWithAnyEmote and toggleMEssageWithOnlyEmote they cancel each other out.
 */

/*
*	Toggle all emoticons on or off.
*/
function toggleAllEmotes() {
	var emoticons = document.querySelectorAll('.emoticon');

	if (document.getElementById('all-emotes').checked) {
		emoticons.forEach(function(el) {
	        el.style.display = 'none';
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
	var messageLines = document.querySelectorAll('.message-line');

	if (document.getElementById('message-with-any-emote').checked) {
		messageLines.forEach(function(el) {
	        if (el.querySelector('.emoticon') !== null) {
				el.style.display = 'none';
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
	var messageLines = document.querySelectorAll('.message-line');

   if (document.getElementById('message-with-only-emote').checked) {
	   messageLines.forEach(function(el) {
	       var textMessage = el.querySelector('.message').clone().children().remove().end().text().trim();

	       if (textMessage.length <= 0 && el.querySelector('.message').find('a').length <= 0) {
			   el.style.display = 'none';
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
		$('.emote-name-list').append('<li><span class="balloon-wrapper"><img class="emoticon-icon" src="' + emoteSrcArray[i] + '" srcset="' + emoteSrcSetArray[i] + '" alt="' + emoteAltArray[i] + '"><div class="balloon balloon--tooltip balloon--down balloon--center mg-t-1">' + emoteAltArray[i] + '</div></span><input type="checkbox" id="emote-' + emoteAltArray[i] + '" class="emote-selector" value="' + emoteAltArray[i] + '"></li>');
	}
	
	// Todo: Move this is the init at bottom
	// Todo: Also make it so that if the line only contains emotes, it should hide (would be nice to be it's own function to do this)
	$('.emote-selector').change(function() {
		if ($(this).prop('checked')) {
			var selectorValue = $(this).val();
			
			$('.emoticon').each(function() {
				if ($(this).attr('alt') === selectorValue) {
					$(this).hide();
				}
			});
		}
		else {
			var selectorValue = $(this).val();
			
			$('.emoticon').each(function() {
				if ($(this).attr('alt') === selectorValue) {
					$(this).show();
				}
			});
		}
	});
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
function toggleMessageWithEmoteCount() {
	var getCount = $('#message-with-emote-count').val();
	
	$('.message-line').each(function() {
		if($(this).find('.emoticon').length > getCount && getCount != null && getCount != '') {
			$(this).find('.emoticon').hide();
		}
		else {
			$(this).find('.emoticon').show();
		}
	});
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
	
	$('#message-with-emote-count').change(function() {
		toggleMessageWithEmoteCount();
	});
});
