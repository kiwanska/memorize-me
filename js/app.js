$(document).ready(function(){

	var blocks = $('.block');


	blocks.hover(function() {
	    console.log('wjechala');
	  }, function() {
	    console.log('zjechala');
	  }
	);

	blocks.on('click', function(){
		console.log('dkjhfdskj');
	})
});