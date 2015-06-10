// // function to get matching groups
	
$(function () {

	// add drag functionality
	$(".draggable").draggable({
		// cursorAt: { right: 2, top: 2 },
		cursor: "crosshair",
		helper: "clone",	
    // stop: function(e, ui) {
    //   getAll(ui).css({
    //       'top': ui.helper.css('top'),
    //       'left': ui.helper.css('left'),
    //   });
    // },
    drag: function(e, ui) {
    	// debugger;
    },

	});

	$(".droppable").droppable({
		tolerance: "pointer",	
		hoverClass: "bleh",
    drop: function(e, ui) {
    	var droppedOn = $(this);
    	ui.helper.children().children().each(function() {
			if ($(this).data("color") !== "clear") {
				$(this).addClass("selected");
			}
		})
		var dropped = $('.selected');
		debugger;
		}
	});

	$('.square').mousedown(function() {
		console.log("hi");
		console.log(this);
		console.log("yo");
	});
});




