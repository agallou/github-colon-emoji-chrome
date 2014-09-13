var removeColon = function(e) {
	var selectionStart = e.originalEvent.target.selectionStart - 1;
	var previousChar = $(this).val().substring(selectionStart, selectionStart + 1);
	var previousPreviousChar = $(this).val().substring(selectionStart - 1, selectionStart - 1 + 1);
	// 13 : entrée
	if (e.which == 13 && (previousChar == ":" || previousPreviousChar == ":")) {
		e.stopImmediatePropagation();
	}
};

//gist
jQuery(document).on('keydown', 'textarea.comment-form-textarea', removeColon);
 
//github
jQuery('#new_comment_field').on('keydown', removeColon);

