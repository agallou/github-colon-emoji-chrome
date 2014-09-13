var removeColon = function(e) {
	var selectionStart = e.originalEvent.target.selectionStart - 1;
	var previousChar = $(this).val().substring(selectionStart, selectionStart + 1);
	var previousPreviousChar = $(this).val().substring(selectionStart - 1, selectionStart - 1 + 1);
	// 13 : entrée
	if (e.which == 13 && (previousChar == ":" || previousPreviousChar == ":")) {
		e.stopImmediatePropagation();
	}
};

var textarea = jQuery('textarea.comment-form-textarea');
textarea.keydown(removeColon);
var eventList = jQuery._data(textarea[0], "events");
if (typeof eventList.keydown != 'undefined') {
  eventList.keydown.unshift(eventList.keydown.pop());
}

