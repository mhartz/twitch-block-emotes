var controls = {
  
  messageWithOnlyEmotes: function(this) {
    $this = this;
    if () {
      $(".message-line").each(function() {
        if ($(this).find('.emoticon').length != 0) {
          $(this).hide();
        }
      }); 
    }
  },
  
  messageWithEmotes: function() {
    
  },
  
  emotesByNumber: function() {
    
  },
  
  emotesOnly: function() { 
  
  },
  
  repeatedSingleWords: function() {
    
  }
  
  init: function() {
    $('#message-with-only-emotes').change(function() {
      controls.messageWithOnlyEmotes('#message-with-only-emotes');
    });
  }
  
};